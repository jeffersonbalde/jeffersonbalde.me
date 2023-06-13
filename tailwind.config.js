/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#416BD8',
        grey: '#676767',
        navbar: 'rgba(103, 103, 103, 0.77)',
        black: '#333333',
        aboutme: '#D9D9D9'
      },
    //   screens: {
    //     xs: "",
    //     sm: "",
    //     sml: "",
    //     md: "",
    //     mdl: "",
    //     lg: "",
    //     lgl: "",
        
    // },
  },
  plugins: [],
}
};
