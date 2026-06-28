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
        ink: "#2E2E2E",
        muted: "#6B6B6B",
        paper: "#FFFFFF",
        field: "#F8F8F6",
        line: "#E5E5E5",
        leaf: "#B9976B",
        "leaf-dark": "#5E4B36",
        steel: "#B9976B",
        amber: "#B9976B",
        danger: "#D95C44",
        success: "#6E8F76",
        "logo-green": "#B9976B",
        "cta-hover": "#A78356",
        hint: "#F8F8F6",
        "hover-warm": "#FFFCF8",
        "sand-soft": "#E8E0D4"
      },
      boxShadow: {
        soft: "0 18px 54px rgba(46, 46, 46, 0.07)",
        float: "0 30px 90px rgba(46, 46, 46, 0.10)"
      },
      borderRadius: {
        panel: "24px"
      }
    }
  },
  plugins: []
};

export default config;
