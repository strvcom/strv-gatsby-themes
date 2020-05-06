# STRV Gatsby Theme - core

## Installation

```sh
yarn add @strv/gatsby-theme-core
```

Add the theme to `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    {
      resolve: '@strv/gatsby-theme-core',
      options: {
        assetPath: `${__dirname}/assets`,
      },
    },
  ],
}
```

## Features

- Allows resolving `src/**` as `~/**` (e.g. `~/components/MyComponent`)
- Resolve static assets as `assets` from specified `assetPath`

### Plugins

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)
- [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)
- [gatsby-plugin-root-import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/)
- [gatsby-plugin-robots-txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/)
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)
