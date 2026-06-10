import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 position;
void main(){ gl_Position = vec4(position, 0.0, 1.0); }
`

const FRAG_AURA = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uIntensity;
uniform vec2 uMouse;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 p = (uv - 0.5) * asp;
  float t = uTime * 0.065 * (0.5 + uIntensity);
  vec2 q = vec2(fbm(p * 1.4 + t), fbm(p * 1.4 - t + 4.0));
  float f = fbm(p * 1.7 + q * 1.9 + vec2(0.0, t * 0.6));
  vec3 c1 = vec3(0.05, 0.20, 0.66);
  vec3 c2 = vec3(0.10, 0.55, 0.86);
  vec3 c3 = vec3(0.34, 0.14, 0.72);
  vec3 col = mix(c1, c2, smoothstep(0.30, 0.72, f));
  col = mix(col, c3, smoothstep(0.55, 0.96, q.x));
  float glow = pow(f, 2.2) * (0.85 + uIntensity);
  col *= glow * 1.7;
  col += vec3(0.013, 0.018, 0.038);
  vec2 m = (uMouse - 0.5) * asp;
  float md = exp(-dot(p - m, p - m) * 3.0);
  col += vec3(0.10, 0.26, 0.52) * md * 0.45 * uIntensity;
  float vig = smoothstep(1.35, 0.18, length(p));
  col *= 0.5 + 0.5 * vig;
  col *= 1.15;
  gl_FragColor = vec4(col, 1.0);
}
`

function compile(gl, type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('Shader error:', gl.getShaderInfoLog(s))
  }
  return s
}

function createRenderer(canvas, getIntensity) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false })
  if (!gl) return null
  const prog = gl.createProgram()
  gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT))
  gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG_AURA))
  gl.linkProgram(prog)
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, 'position')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'uRes')
  const uTime = gl.getUniformLocation(prog, 'uTime')
  const uIntensity = gl.getUniformLocation(prog, 'uIntensity')
  const uMouse = gl.getUniformLocation(prog, 'uMouse')

  let raf = null
  let running = false
  const start = performance.now()
  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6)
    const w = Math.floor(canvas.clientWidth * dpr)
    const h = Math.floor(canvas.clientHeight * dpr)
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
    }
    gl.viewport(0, 0, canvas.width, canvas.height)
  }

  function frame() {
    if (!running) return
    resize()
    mouse.x += (mouse.tx - mouse.x) * 0.05
    mouse.y += (mouse.ty - mouse.y) * 0.05
    gl.uniform2f(uRes, canvas.width, canvas.height)
    gl.uniform1f(uTime, (performance.now() - start) / 1000)
    gl.uniform1f(uIntensity, getIntensity())
    gl.uniform2f(uMouse, mouse.x, mouse.y)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    raf = requestAnimationFrame(frame)
  }

  return {
    play() {
      if (!running) {
        running = true
        raf = requestAnimationFrame(frame)
      }
    },
    pause() {
      running = false
      if (raf) cancelAnimationFrame(raf)
    },
    setMouse(x, y) {
      mouse.tx = x
      mouse.ty = y
    },
    destroy() {
      this.pause()
      const ext = gl.getExtension('WEBGL_lose_context')
      if (ext) ext.loseContext()
    },
  }
}

export default function AuraBackground({ intensity = 0.4 }) {
  const ref = useRef(null)
  const intRef = useRef(intensity)
  intRef.current = intensity

  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const r = createRenderer(ref.current, () => intRef.current)
    if (!r) return
    if (!reduced) r.play()
    const onMove = (e) => r.setMouse(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight)
    const onVis = () => (document.hidden ? r.pause() : !reduced && r.play())
    window.addEventListener('pointermove', onMove)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVis)
      r.destroy()
    }
  }, [])

  return (
    <div className="bg-wrap">
      <canvas ref={ref} className="bg-layer" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true"></div>
    </div>
  )
}
