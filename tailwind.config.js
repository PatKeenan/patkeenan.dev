/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content:[ "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        light: 'hsl(var(--light) / <alpha-value>)',
        'light-accent': 'hsl(var(--light-accent) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        dark: 'hsl(var(--dark) / <alpha-value>)',
        'dark-accent': 'hsl(var(--dark-accent) / <alpha-value>)',
        success:  'hsl(var(--success) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
        danger: 'hsl(var(--danger) / <alpha-value>)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
