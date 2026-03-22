/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red':     '#7F1725',
        'brand-crimson': '#4c0000',
        'brand-light':   '#AE2637',
        'brand-gold':    '#b97837',
        'brand-gold-light': '#d4a05a',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Lato"', 'Helvetica', 'sans-serif'],
        accent:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        nav:     ['"Merriweather"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
