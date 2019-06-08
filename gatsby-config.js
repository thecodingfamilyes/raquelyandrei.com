const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Raquel y Andrei',
        description: 'Raquel y Andrei',
        author: '@algm85, @cso1992',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Raquel y Andrei',
                short_name: 'raquelyandrei',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#ba2525',
                display: 'minimal-ui',
                icon: 'src/images/subpages-logo.svg',
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                tailwind: true,
                purgeOnly: ['src/css/style.css'],
            },
        },
        {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
                fonts: [
                    {
                        family: 'Roboto',
                    },
                    {
                        family: 'Pacifico',
                    },
                    {
                        family: 'Montserrat',
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
};
