/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            Poppins: 'Poppins',
            Paprika: 'Paprika',
            Inria: 'Inria Serif',
        },
        container: {
            center: true,
            padding: '4rem',
        },
        extend: {
            colors: {
                dark_primary: '#06223F',
                bg_light_primary: '#F5F9FD',
                gray: '#B7C5D3',
            },
            backgroundImage: {
                primaryLinear: 'linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)',
            },
            dropShadow: {
                normal: '-5px 35px 40px rgba(223, 229, 236, 0.9)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            boxShadow: {
                primary: '0px 0px 12px 1px rgba(0,0,0,0.67)',
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                fadeIn: {
                    from: { opacity: 0, transform: 'translateY(10%)' },
                    to: { opacity: 0.5, transform: 'translateY(0)' },
                },
            },
        },
        animation: {
            slideDown: 'slideDown 0.6s ease-in-out',
            fadeIn: 'fadeIn 0.4s ease-in-out',
        },
    },
    plugins: [],
};
