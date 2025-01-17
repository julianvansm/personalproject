/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  content: [],
  theme: {

    extend: {
      colors: {
        'Custom1': '#ec50ef',
        'Custom2': '#313131',

      }
    }
  },
  plugins: [],
}

