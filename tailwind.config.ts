import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#A8D275",
        },
        dark: {
          bg: "#0A0A0A",
          secondary: "#1A1A1A",
        },
        text: {
          light: "#FFFFFF",
          muted: "#808080",
        },
      },
    },
  },
  plugins: [],
};
export default config;

