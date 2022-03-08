module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#F6F8FF",
      dark: "#141D2F",
      "content-dark": "#141d2f",
      "content-white": "#FEFEFE",
      "text-white": "#4B6A9B",
      "text-dark": "#FFFFFF",
      "btn-primary": "#0079FF",
      "btn-hover": "#60ABFF",
      muted: "color: rgb(148, 163, 184)",
    },
    boxShadow: {
      md: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      lg: "0px 16px 30px -10px rgba(0,0,0,0.2)",
    },
    fontFamily: {
      "space-mono": ["Space Mono", "monospace"],
    },
    fontSize: {
      base: "15px",
      lg: "25px",
    },
  },
  plugins: [],
};
