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
        background: 'linear-gradient(180deg, rgba(255, 111, 72, 1) 0%, rgba(240, 42, 166, 1) 100%)',
        color: '#FFFFFF',
        fontSize: '18px',
        with: '167px',
        height: '56px',
        fontWeight: 'bold',
        padding: '16px 33px',
        borderRadius: '31.5px',
        '&:hover': {
          backgroundColor: '#4B5563',
        },
      },
    }

    const wrapper = {
      '.wrapper': {
        marginInline: '16px'
      },
      '.wrapper-md': {
        marginInline: '40px'
      }
    }
    const fonts = {
      '.font-heading': {
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }
    }

      addComponents(buttons)
      addComponents(wrapper)
      addComponents(fonts)
    } 
  ],
}

