/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      accent: "#ffad9f",
      black: "#000",
    },
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
      screens: {
        tall: { raw: "(min-height: 970px) and (min-width: 1280px)" },
        small: {
          raw: "(min-height: 585px) and (max-height: 655px) and (min-width: 1280px)",
        },
        little: {
          raw: "(min-height: 385px) and (max-height: 585px) and (min-width: 1280px)",
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2.25rem",
          xl: "2rem",
        },
      },
      fontSize: {
        font16: ["16px", { letterSpacing: "-0.3px" }], // className="text-font16"
        font16Long: ["16px", { letterSpacing: "0.7px" }],
        font20: ["20px", { letterSpacing: "-0.7px" }],
        font24: ["24px", { letterSpacing: "-0.8px" }],
        font28Long: ["28px", { letterSpacing: "1.2px", fontWeight: 400 }],
        font36: ["36px", { letterSpacing: "-1.4px", fontWeight: 300 }],
        font36Long: ["36px", { letterSpacing: "1.4px", fontWeight: 400 }],
      },

      content: {
        // crossIcon: 'url("/icons/error-cross.svg")',
      },
    },
  },
};
