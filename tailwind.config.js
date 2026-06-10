/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#06070b',
        text: '#eaedf4',
        muted: '#b6bcc8',
        faint: '#5b616d',
        accent: 'oklch(0.72 0.17 250)',
        'accent-bright': 'oklch(0.8 0.16 250)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
      },
      maxWidth: {
        container: '1080px',
      },
      animation: {
        cueIn: 'cueIn 0.7s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
}
