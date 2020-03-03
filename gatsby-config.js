const { resolve } = require("path");

const config = {
  siteMetadata: {
    title: "buszewski.com",
    description:
      "Developer, consultant and lead with over 12 years of commercial experience",
    author: "Tomek Buszewski <tomek.buszewski@gmail.com>",
    siteUrl: "https://buszewski.com",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content`,
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
          "@config": resolve(__dirname, "config"),
          "@ui": resolve(__dirname, "src", "ui"),
          "@helpers": resolve(__dirname, "src", "helpers"),
          "@hooks": resolve(__dirname, "src", "hooks"),
          "@components": resolve(__dirname, "src", "components"),
          "@sections": resolve(__dirname, "src", "sections"),
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
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://buszewski.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Domine",
            variants: ["400", "800"],
          },
        ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify"
  ],
};

// if (process.env.NODE_ENV === "production") {
//   config.plugins.push("gatsby-plugin-preact");
// }

module.exports = config;