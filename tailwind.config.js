/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFDE00',
          'yellow-hover': '#E6C800',
          blue: '#00629D',
          'blue-light': '#00A3FF',
          black: '#000000',
          charcoal: '#1A1C1C',
          dark: '#111111',
          bg: '#FFFFFF',
          'bg-subtle': '#F9F9F9',
          card: '#FFFFFF',
          gray: '#666666',
          'gray-light': '#F3F3F3',
          border: '#000000'
        }
      },
      fontFamily: {
        display: ['Be Vietnam Pro', 'Hanken Grotesk', 'sans-serif'],
        body: ['Be Vietnam Pro', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'neo': '4px 4px 0px #000000',
        'neo-lg': '8px 8px 0px #000000',
        'neo-yellow': '4px 4px 0px #FFDE00',
        'neo-hover': '6px 6px 0px #000000',
        'neo-yellow-hover': '6px 6px 0px #FFDE00',
      }
    },
  },
  plugins: [],
}
