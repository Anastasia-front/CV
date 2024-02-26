/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
    screens: {
      sm: "360px",
      md: "768px",
      xl: "1024px",
    },
    extend: {
      fontSize: {
        font16: ["16px", { letterSpacing: "-0.3px" }], // className="text-font16"
        font16Long: ["16px", { letterSpacing: "0.7px" }],
        font18Long: ["18px", { letterSpacing: "4px", fontWeight: 600 }],
        font20: ["20px", { letterSpacing: "-0.7px" }],
        font24: ["24px", { letterSpacing: "-0.8px" }],
        font28Long: ["28px", { letterSpacing: "1.2px", fontWeight: 400 }],
        font36: ["36px", { letterSpacing: "-1.4px", fontWeight: 300 }],
        font36Long: ["36px", { letterSpacing: "1.4px", fontWeight: 500 }],
      },
    },
  },
};
