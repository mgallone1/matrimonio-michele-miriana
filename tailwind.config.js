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
          DEFAULT: '#423832',
          light: '#5d4f47',
          dark: '#28221e',
        },
        champagne: {
          DEFAULT: '#e5dcd0',
          light: '#fbf9f6',
          dark: '#cfc2b1',
        },
        blush: {
          DEFAULT: '#eec2ad',
          light: '#faede7',
          dark: '#dca68e',
        },
        rose: {
          DEFAULT: '#e5517c', // Rosa ciclamino / Dalia pompon dal bouquet
          light: '#fde8ef',
          dark: '#ba3158',
          mauve: '#923649', // Rosa orchidea / Mauve
        },
        sage: {
          DEFAULT: '#626a3a',
          light: '#f2f5e8',
          dark: '#4c532c',
        },
        burgundy: {
          DEFAULT: '#4a0d1b',
          light: '#6b1427',
          dark: '#300811',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
          subtle: '#FAF6F1',
          border: 'rgba(229, 220, 208, 0.6)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive']
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
