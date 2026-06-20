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
        ink: "#14202b",
        muted: "#667482",
        paper: "#ffffff",
        field: "#f5f7fa",
        line: "#d8e0e8",
        leaf: "#2c7a62",
        "leaf-dark": "#0f3554",
        steel: "#1f5f8b",
        amber: "#a86718",
        danger: "#9f3f35"
      },
      boxShadow: {
        soft: "0 18px 42px rgba(18, 32, 43, 0.1)"
      },
      borderRadius: {
        panel: "8px"
      }
    }
  },
  plugins: []
};

export default config;
