/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      fontFamily:{
        'roboto-bold':['Roboto-Bold','system-ui'],
        'roboto-medium':['Roboto-Medium','system-ui'],
        'roboto-regular':['Roboto-Regular','system-ui']
      },
      colors:{
        'green':'#00c1b5',
        'yellow':'#ffbe00',
        'red':'#e30512',
        'orange':'#ff651a',
        'blue':'#1d3fbb'
      }
    },
  },
  plugins: [],
}

