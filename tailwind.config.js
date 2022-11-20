/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '340px', 'max': '767px'},
      // => @media (min-width: 340px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'dark-blue': '#384564',
      'white' : '#ffffff',
      'btn-secondary':'rgba(161, 177, 219, 0.317343)',
      'text-btn-secondary': '#55699E',
      'btn-tertiary': 'rgba(255, 207, 0, 0.15)',
      'text-btn-tertiary':'#988B49',
      'save-icon': '#3A4562',
      'posted': 'rgba(56, 65, 93, 0.355988)',
      'bg-map': '#2A3047'
    },
    fontFamily: {
      'sans': ['Robot', 'sans-serif'],
    }
  }
}