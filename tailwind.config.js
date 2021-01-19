module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'art': "url('/public/images/art.jpg')",
                'people': "url('/public/images/people.jpg')",
                'people2': "url('/public/images/people2.jpg')",
                'military': "url('/public/images/military.jpg')",
            }),
            colors: {
                twitterBlue: '#15202b'
            },
            inset: {
                little: '2px',
                little2: '3px',
                little3: '4px'
            },
            fontFamily: {
                'poppins': 'Poppins,sans-serif'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}