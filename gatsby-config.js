// ./gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Polling App',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/poll/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Chiswick Rehearsal Room',
        short_name: 'Chiswick Rehearsal Room',
        start_url: '/',
        background_color: '#08AEEA',
        theme_color: '#2AF598',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
