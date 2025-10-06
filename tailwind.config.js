// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './views/**/*.ejs',
    './src/**/*.js' // Beispiel für einen weiteren Pfad
  ],
  theme: {
    extend: {
      colors: {
        // Wir mappen die CSS-Variablen auf Tailwind-Farbnamen
        // Die Syntax oklch(var(...) / <alpha-value>) ist entscheidend,
        // damit Opazitäts-Modifikatoren wie bg-primary/50 funktionieren.
        'bg-dark': 'oklch(var(--bg-dark) / <alpha-value>)',
        'bg': 'oklch(var(--bg) / <alpha-value>)',
        'bg-light': 'oklch(var(--bg-light) / <alpha-value>)',
        'text': 'oklch(var(--text) / <alpha-value>)',
        'text-muted': 'oklch(var(--text-muted) / <alpha-value>)',
        'highlight': 'oklch(var(--highlight) / <alpha-value>)',
        'border': 'oklch(var(--border) / <alpha-value>)',
        'border-muted': 'oklch(var(--border-muted) / <alpha-value>)',
        'primary': 'oklch(var(--primary) / <alpha-value>)',
        'secondary': 'oklch(var(--secondary) / <alpha-value>)',
        'danger': 'oklch(var(--danger) / <alpha-value>)',
        'warning': 'oklch(var(--warning) / <alpha-value>)',
        'success': 'oklch(var(--success) / <alpha-value>)',
        'info': 'oklch(var(--info) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}