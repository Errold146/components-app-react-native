import { Colors } from './constants/Colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx", 
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ligth: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertaity: Colors.light.tertiary,
          background: Colors.light.background,
          text: Colors.light.text
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertaity: Colors.dark.tertiary,
          background: Colors.dark.background,
          text: Colors.dark.text
        }
      }
    },
  },
  plugins: [],
}