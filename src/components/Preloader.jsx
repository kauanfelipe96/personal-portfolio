export default function Preloader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center z-50 fixed inset-0" style={{ background: 'var(--bg)' }}>
      <span className="brand-mark" style={{ width: 64, height: 64, fontSize: 22, borderRadius: 16 }}>
        KF
      </span>
    </div>
  )
}
