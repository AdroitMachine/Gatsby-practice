/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Some random description',
    author: '@johnDoe',
    data: ['item 1', 'item 2'],
    person: { name: 'peterson', age: 32 }
  },
  plugins: [
    `gatsby-plugin-styled-components`
  ],
}
