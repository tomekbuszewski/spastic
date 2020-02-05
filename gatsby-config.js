const { resolve } = require("path");

module.exports = {
  siteMetadata: {
    title: "buszewski.com – 2020",
    description: "",
    author: "Tomek Buszewski <tomek.buszewski@gmail.com>",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#FDFDFD",
        theme_color: "#F1C40F",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@sections": resolve(__dirname, "src", "components", "sections"),
          "@ui": resolve(__dirname, "src", "ui"),
          "@components": resolve(__dirname, "src", "components"),
          "@pages": resolve(__dirname, "src", "pages"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    }
  ],
};
