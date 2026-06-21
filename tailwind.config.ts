import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2F2A22",
        muted: "#6F6658",
        paper: "#FFF9F0",
        field: "#F7F1E8",
        line: "#E5D6C3",
        leaf: "#B68A4C",
        "leaf-dark": "#8B6F47",
        steel: "#B68A4C",
        amber: "#B68A4C",
        danger: "#9A5B3F",
        "cta-hover": "#765C38",
        hint: "#F1E4D1"
      },
      boxShadow: {
        soft: "0 18px 42px rgba(47, 42, 34, 0.1)"
      },
      borderRadius: {
        panel: "8px"
      }
    }
  },
  plugins: []
};

export default config;
