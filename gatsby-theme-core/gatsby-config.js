module.exports = (themeOptions) => ({
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': `${__dirname}/src`,
      },
    },
    'gatsby-plugin-robots-txt',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: themeOptions.assetPath,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
})
