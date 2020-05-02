module.exports = {
  siteMetadata: {
    title: 'Street Electrical',
    author: 'Philip Street',
    description: 'Professional Electrician Based In Essex',
    url: "https://www.street-electrical.co.uk",
  },


  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Street Electrical',
        short_name: 'street-electrical',
        start_url: '/',
        background_color: '#39403E',
        theme_color: '#39403E',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-160028043-2',
      }
    }]
}
