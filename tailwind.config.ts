import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slate: {
          200: "#f5f3eb",
        },
        orange: {
          600: "#FE4F01",
          700: "#CD3F00",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
