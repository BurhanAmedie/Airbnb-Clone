module.exports = {
  mode: 'jit', 
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        animation: {
            blob: "blob 4s infinite"

        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate (0px, 0px) scale(1)"
                },
                "33%": {
                    transform: "translate (60px, -50px) scale(1.1)"
                },
                "66%": {
                    transform: "translate (-40px, 20px) scale(0.9)"
                },
                "100%": {
                    transform: "translate (0px, 0px) scale(1)"
                }
            },
            wiggle: {
                '0%, 100%': {
                    transform: 'rotate(-3deg)'
                },
                '50%': {
                    transform: 'rotate(3deg)'
                },
            }
        },
        animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
        }
    },
},
  variants: { 
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar-hide')
  ],
}
