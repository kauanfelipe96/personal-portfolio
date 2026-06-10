export default function Preloader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center z-50 fixed inset-0 bg-bg">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center font-mono font-bold text-3xl text-bg"
        style={{ background: 'var(--accent)', boxShadow: '0 0 60px color-mix(in oklch, var(--accent) 60%, transparent)' }}
      >
        KF
      </div>
    </div>
  )
}
