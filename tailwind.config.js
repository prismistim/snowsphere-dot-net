module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      'futura': ['futura-pt', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'ubuntu-mono': ['Ubuntu Mono', 'monospace'],
      'kinto': ['kinto-sans', 'sans-serif'],
      'material': ['Material Icons Rounded'],
      'firacode': ['Fira Code Variable', 'sans-serif'],
      'heebo': ['Heebo', 'sans-serif'],
      'main': ['Heebo', 'kinto-sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
