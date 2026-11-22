/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#523c2f',
          light: '#6d513f',
          dark: '#38271e',
        },
        champagne: {
          DEFAULT: '#dacdbd',
          light: '#f7f4ef',
          dark: '#c4b39f',
        },
        blush: {
          DEFAULT: '#bf9d9b',
          light: '#f5eeec',
          dark: '#9a7573',
        },
        sage: {
          DEFAULT: '#4f523f',
          light: '#eff2e7',
          dark: '#383a2c',
        },
        burgundy: {
          DEFAULT: '#530c1e',
          light: '#72122b',
          dark: '#380612',
        },
        paper: {
          DEFAULT: '#FDFAF6',
          card: '#FFFFFF',
          subtle: '#F9F5EF',
          border: 'rgba(218, 205, 189, 0.4)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      // Scala tipografica e spaziatura armonica basata sulla Sezione Aurea (φ = 1.618)
      fontSize: {
        'phi-xs': ['0.618rem', { lineHeight: '1rem', letterSpacing: '0.2em' }], // ~10px
        'phi-sm': ['0.764rem', { lineHeight: '1.2rem', letterSpacing: '0.12em' }], // ~12px
        'phi-base': ['1rem', { lineHeight: '1.618' }], // 16px (base)
        'phi-md': ['1.236rem', { lineHeight: '1.618' }], // ~20px
        'phi-lg': ['1.618rem', { lineHeight: '1.4' }], // ~26px (16 * 1.618)
        'phi-xl': ['2.618rem', { lineHeight: '1.25' }], // ~42px (26 * 1.618)
        'phi-2xl': ['4.236rem', { lineHeight: '1.15' }], // ~68px (42 * 1.618)
        'phi-3xl': ['6.854rem', { lineHeight: '1.05' }], // ~110px (68 * 1.618)
      },
      spacing: {
        'phi-1': '0.382rem', // ~6px (1 - 0.618)
        'phi-2': '0.618rem', // ~10px
        'phi-3': '1rem',     // 16px
        'phi-4': '1.618rem', // ~26px
        'phi-5': '2.618rem', // ~42px
        'phi-6': '4.236rem', // ~68px
        'phi-7': '6.854rem', // ~110px
      },
      boxShadow: {
        paper: '0 4px 20px -2px rgba(82, 60, 47, 0.06), 0 2px 6px -1px rgba(82, 60, 47, 0.04)',
        card: '0 12px 32px -4px rgba(82, 60, 47, 0.08), 0 4px 12px -2px rgba(82, 60, 47, 0.03)',
        envelope: '0 25px 50px -12px rgba(82, 60, 47, 0.25), 0 0 0 1px rgba(82, 60, 47, 0.05)',
        wax: '0 8px 16px rgba(83, 12, 30, 0.35), inset 0 2px 3px rgba(255, 255, 255, 0.3)'
      }
    },
  },
  plugins: [],
}
