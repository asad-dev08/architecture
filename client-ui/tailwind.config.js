/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f9",
          100: "#dcf1f2",
          200: "#bce3e5",
          300: "#90cfd2",
          400: "#59b4b9",
          500: "#3a9da3",
          600: "#2d8c92",
          700: "#266f74",
          800: "#235b5f",
          900: "#214d50",
          950: "#0f2f32",
        },
        secondary: {
          50: "#fdf8f2",
          100: "#fbecde",
          200: "#f6d5b8",
          300: "#f1ba8c",
          400: "#eca05e",
          500: "#e78a44",
          600: "#e78a44",
          700: "#c26426",
          800: "#9e4f20",
          900: "#83421d",
          950: "#462010",
        },
      },
    },
  },
  plugins: [],
};
