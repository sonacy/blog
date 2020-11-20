module.exports = {
  pathPrefix: "/blog",
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        cli: true,
        contentPath: "decks",
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: [
          "mdx-deck",
          "gatsby-theme-mdx-deck",
          "@mdx-deck/themes",
          "@mdx-deck",
        ],
      },
    },
  ],
};
