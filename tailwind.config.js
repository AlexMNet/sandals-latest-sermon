module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sermon-bg':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470686164816-830d3688f62c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VybW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')",
      },
    },
  },
  plugins: [],
}
