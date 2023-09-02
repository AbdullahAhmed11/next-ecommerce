import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: "blue['400']",
        primary: 'white',
        secondary: '#b6bbb6',
        background: '#1a1a1a',
        'main-red': "red['400']",
        'border-primary': "neutral['700']",
        'border-secondary': "neutral['400']"
      }
    },
  },
  plugins: [],
}
export default config
