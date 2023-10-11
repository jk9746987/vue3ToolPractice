// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}"
    ],
    theme: {
        extend: {
            keyframes: {
                animateBg: {
                    '100%': {filter: 'hue-rotate(360deg)'},
                },
            },
            animation: {
                animateBg: 'animateBg 5s linear infinite'
            }
        },
        screens: {
            'sm': {'max': '360px'},
        }
    },
    plugins: [],
}