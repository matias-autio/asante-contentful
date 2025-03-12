/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: "inherit",
            maxWidth: "inherit",
            a: {
              fontWeight: "inherit",
            },
            p: {
              fontSize: "var(--font-size-p)",
            },
            ul: {
              fontSize: "var(--font-size-p)",
            },
            ol: {
              fontSize: "var(--font-size-p)",
            },
            h1: {
              fontSize: "var(--font-size-h1)",
              lineHeight: "var(--line-height-h1)",
            },
            h2: {
              fontSize: "var(--font-size-h2)",
              lineHeight: "var(--line-height-h2)",
            },
            h3: {
              fontSize: "var(--font-size-h3)",
              lineHeight: "var(--line-height-h3)",
            },
            h4: {
              fontSize: "var(--font-size-h4)",
              lineHeight: "var(--line-height-h4)",
            },
            h5: {
              fontSize: "var(--font-size-h5)",
              lineHeight: "var(--line-height-h5)",
            },
            figcaption: {
              "padding-inline": "1rem",
              "padding-top": "0.75rem",
              "font-style": "italic",
              "font-size": "0.85rem",
              "margin-top": 0,
            },
          },
        },
      }),
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
        },
        yellow: {
          DEFAULT: "var(--yellow)",
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        // mono: ['var(--font-mono)'],
      },
      aspectRatio: {
        "5/2": "5 / 2",
        "2/1": "2 / 1",
        "3/1": "3 / 1",
        "5/3": "5 / 3",
        "3/4": "3 / 4",
        "4/3": "4 / 3",
      },
      fontSize: {
        h1: "var(--font-size-h1)",
        h2: "var(--font-size-h2)",
        h3: "var(--font-size-h3)",
        lead: "var(--font-size-lead)",
        hero: "var(--font-size-hero)",
        p: "var(--font-size-p)",
        caption: "var(--font-size-caption)",
        small: "var(--font-size-small)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
