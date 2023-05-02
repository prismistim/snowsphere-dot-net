module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      'futura': ['futura-pt', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'ubuntu-mono': ['Ubuntu Mono', 'monospace']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
