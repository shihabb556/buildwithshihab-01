import React from 'react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#c6c6cd",
        "surface-container-lowest": "#060e20",
        "primary-fixed": "#dbe1ff",
        "on-primary-fixed-variant": "#003ea8",
        "surface": "#0b1326",
        "surface-dim": "#0b1326",
        "on-primary-container": "#4278ff",
        "on-secondary-container": "#a0b1ff",
        "tertiary-fixed": "#c4e7ff",
        "secondary-container": "#173bab",
        "surface-bright": "#31394d",
        "on-secondary-fixed-variant": "#173bab",
        "primary-fixed-dim": "#b4c5ff",
        "surface-container-low": "#131b2e",
        "on-tertiary-fixed": "#001e2c",
        "surface-tint": "#b4c5ff",
        "on-tertiary": "#00354a",
        "inverse-on-surface": "#283044",
        "inverse-primary": "#0053db",
        "on-tertiary-fixed-variant": "#004c69",
        "on-secondary": "#002584",
        "outline-variant": "#45464d",
        "on-primary": "#002a78",
        "on-error": "#690005",
        "on-primary-fixed": "#00174b",
        "surface-variant": "#2d3449",
        "tertiary-fixed-dim": "#7bd0ff",
        "surface-container-high": "#222a3d",
        "error-container": "#93000a",
        "on-background": "#dae2fd",
        "secondary-fixed-dim": "#b8c4ff",
        "inverse-surface": "#dae2fd",
        "surface-container-highest": "#2d3449",
        "on-secondary-fixed": "#001453",
        "primary-container": "#001442",
        "tertiary-container": "#001a27",
        "background": "#0b1326",
        "tertiary": "#7bd0ff",
        "on-tertiary-container": "#008abb",
        "primary": "#b4c5ff",
        "secondary": "#b8c4ff",
        "surface-container": "#171f33",
        "secondary-fixed": "#dde1ff",
        "outline": "#909097",
        "on-surface": "#dae2fd",
        "error": "#ffb4ab",
        "on-error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
