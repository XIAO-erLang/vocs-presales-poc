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
        ink: "#17211f",
        muted: "#66736f",
        paper: "#ffffff",
        field: "#f7f8f5",
        line: "#dce3df",
        leaf: "#1d6b55",
        "leaf-dark": "#124536",
        steel: "#285f8f",
        amber: "#b26b22",
        danger: "#9f3f35"
      },
      boxShadow: {
        soft: "0 20px 55px rgba(24, 33, 31, 0.12)"
      },
      borderRadius: {
        panel: "8px"
      }
    }
  },
  plugins: []
};

export default config;
