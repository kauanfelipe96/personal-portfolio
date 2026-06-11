/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
        'accent-soft': 'var(--accent-soft)',
        glass: 'var(--glass-bg)',
        'glass-2': 'var(--glass-bg-2)',
        'glass-bd': 'var(--glass-bd)',
        'glass-bd-2': 'var(--glass-bd-2)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      spacing: {
        pad: 'clamp(20px, 5vw, 48px)',
      },
      maxWidth: {
        container: '1080px',
      },
      keyframes: {
        ring: {
          '0%': { transform: 'scale(.6)', opacity: '.9' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        scrollwheel: {
          '0%': { opacity: '0', transform: 'translateY(-3px)' },
          '25%': { opacity: '1' },
          '65%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(9px)' },
        },
        cueIn: {
          to: { opacity: '1' },
        },
      },
      animation: {
        ring: 'ring 2s ease-out infinite',
        scrollwheel: 'scrollwheel 1.7s ease-in-out infinite',
        cueIn: 'cueIn 0.8s ease 1s forwards',
      },
    },
  },
  plugins: [],
}
