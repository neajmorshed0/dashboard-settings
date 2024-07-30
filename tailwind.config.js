/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        bgray: "#E1E4EA", //soft-200
        dgray: "#0E121B",
        pgray: "#525866",
        mgray: "#99A0AE",
        primary: "#7D52F4",
        weak: {
          50: "#F5F7FA",
          100: "#CACFD8",
        },
      },
      borderRadius: {
        custom: "10px",
      },
      boxShadow: {
        "custom-xs": "0px 1px 2px 0px rgba(10, 13, 20, 0.03)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
