module.exports = {
  siteMetadata: {
    title: "JORDAN BINSKIN",
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: ['gatsby-plugin-sass'],
  plugins: [
    {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`
      },
    },
  ],
}