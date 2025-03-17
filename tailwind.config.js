module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes your React components
    "./public/index.html", // This includes your public index.html file
  ],
  theme: {
    extend: {colors: {
      'custom-blue': 'rgba(0, 80, 213, 0.9)',
      'custom-blue-dark': 'rgba(0, 90, 213, 0.85)',
    },},
  },
  plugins: [],
}
