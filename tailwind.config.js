/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#121820',
          graphite: '#1a222d',
          slate: '#2c3542',
          ivory: '#faf9f6',
          sand: '#f4f1ea',
          sandstone: '#ede8de',
          border: '#e4e0d7',
          teal: '#246663',
          tealDark: '#1a4e4c',
          tealLight: '#e6f2f1',
          champagne: '#d8cebf'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
