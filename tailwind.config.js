/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "ui-blue": "#344054",
        "ui-blue-dark": "#1D2939",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sp: "1000px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
};
