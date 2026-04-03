import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#f0f4ff" },
          100: { value: "#e0e9ff" },
          200: { value: "#c1d3ff" },
          300: { value: "#a2bdff" },
          400: { value: "#8ba7ff" },
          500: { value: "#6b91ff" },
          600: { value: "#4f66d9" },
          700: { value: "#3a4aa8" },
          800: { value: "#253077" },
          900: { value: "#151a4d" },
        },
        accent: {
          50: { value: "#fef5e0" },
          100: { value: "#fce8b3" },
          200: { value: "#fbdb86" },
          300: { value: "#f9ce59" },
          400: { value: "#f7c13c" },
          500: { value: "#f5b41f" },
          600: { value: "#c48a15" },
          700: { value: "#93650e" },
          800: { value: "#623a08" },
          900: { value: "#311d04" },
        },
        dark: {
          50: { value: "#f9f9f9" },
          100: { value: "#e8e8e8" },
          200: { value: "#d0d0d0" },
          300: { value: "#a0a0a0" },
          400: { value: "#707070" },
          500: { value: "#474747" },
          600: { value: "#323232" },
          700: { value: "#1f1f1f" },
          800: { value: "#0d0d0d" },
          900: { value: "#000000" },
        },
      },
      fonts: {
        heading: { value: "'Poppins', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
  },
});
