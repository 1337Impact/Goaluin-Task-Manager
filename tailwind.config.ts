import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "theme-red": "#FF9090",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        'kranky': ['Kranky', 'serif']
      },
    },
  },
  plugins: [],
}
export default config
