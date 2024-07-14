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
        "body": "rgba(var(--body))",
        "primary": "rgba(var(--primary))",
        "text": "rgba(var(--text))",
        "link": "#3366CC"
      }
    },
  },
  plugins: [],
};
export default config;
