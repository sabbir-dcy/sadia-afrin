/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#c084fc",
        sub: "#EDE5F0",
      },
      screens: {
        md: "1126px",
      },
    },
    fontFamily: {
      sans: ["Urbanist"],
    },
  },
  plugins: [],
};
