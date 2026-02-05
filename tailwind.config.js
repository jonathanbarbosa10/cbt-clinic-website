/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#334155', // slate-700
                    dark: '#1E293B',    // slate-800
                },
                secondary: {
                    DEFAULT: '#99F6E4', // teal-200
                    light: '#CCFBF1',   // teal-100
                },
                accent: {
                    DEFAULT: '#FB7185', // rose-400
                },
                background: '#F8FAFC', // slate-50
            },
            fontFamily: {
                heading: ['Inter', 'sans-serif'],
                body: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
