import type { Config } from "tailwindcss";

/*
 * Every colour maps to a CSS variable declared in globals.css, so the palette
 * lives in one place and the components never ship a hex value.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "var(--paper)",
        raised: "var(--paper-raised)",
        white: "var(--white)",
        night: {
          DEFAULT: "var(--night)",
          line: "var(--night-line)",
          text: "var(--night-text)",
          body: "var(--night-body)",
        },
        ink: "var(--ink)",
        body: "var(--body)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        dim: "var(--dim)",
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
          chip: "var(--chip-line)",
        },
        blue: {
          DEFAULT: "var(--blue)",
          deep: "var(--blue-deep)",
          label: "var(--blue-label)",
          mist: "var(--blue-mist)",
          soft: "var(--blue-soft)",
          wash: "var(--blue-wash)",
        },
        amber: {
          DEFAULT: "var(--amber)",
          deep: "var(--amber-deep)",
          text: "var(--amber-text)",
          light: "var(--amber-light)",
          ink: "var(--amber-ink)",
          line: "var(--amber-line)",
          soft: "var(--amber-soft)",
        },
        coral: {
          DEFAULT: "var(--coral)",
          deep: "var(--coral-deep)",
          text: "var(--coral-text)",
          soft: "var(--coral-soft)",
        },
        green: {
          DEFAULT: "var(--green)",
          deep: "var(--green-deep)",
          ink: "var(--green-ink)",
          soft: "var(--green-soft)",
          light: "var(--green-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
