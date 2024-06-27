import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)']
      },
      colors: {
        'black-800': '#080808',
        primary: '#B7D240',
        "primary-300": '#f9ffde',
        'border-color': 'rgba(255, 255, 255, 0.2)'
      },

      animation: {
        'spin-slow': 'spin 7s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

     
    },
  },
  plugins: [],
}
export default config
