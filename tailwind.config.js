module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blur-effect': {
          '0%': { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(255, 255, 255, 0)' },
          '100%': { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
        },
        'underline-slide': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'slide-right': 'slide-right 1s ease-in-out forwards',
        'fade-in': 'fade-in 1s ease-in-out forwards',
        'blur-effect': 'blur-effect 1s ease-in-out forwards',
        'underline-slide': 'underline-slide 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
