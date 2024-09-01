/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [ function ({ addComponents }) {
    const buttons = {
      '.btn-primary': {
        backgroundColor: '#13183F',
        color: '#FFFFFF',
        with: '167px',
        height: '56px',
        fontWeight: 'bold',
        fontSize: '18px',
        padding: '13px 33px',
        borderRadius: '28px',
        transition: '0.5s',
        '&:hover': {
          backgroundColor: '#666CA3',
        },
      },
      '.btn-secondary': {
        backgroundColor: '#6B7280',
        color: '#FFFFFF',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        '&:hover': {
          backgroundColor: '#4B5563',
        },
      },
    }

      addComponents(buttons)
    } 
  ],
}

