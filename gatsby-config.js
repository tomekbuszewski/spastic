const { resolve } = require("path");

const config = {
  siteMetadata: {
    title: "Buszewski.com",
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
        name: "Buszewski.com",
        short_name: "Buszewski.com",
        start_url: "/",
        background_color: "#FDFDFD",
        theme_color: "#F1C40F",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://buszewski.com",
        sitemap: "https://buszewski.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-7541047-2",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.summary,
                  date: edge.node.frontmatter.pubdate,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  enclosure: {
                    url:
                      edge.node.frontmatter.featuredImage &&
                      site.siteMetadata.siteUrl +
                        edge.node.frontmatter.featuredImage.childImageSharp
                          .fluid.src,
                    type: "image/jpeg",
                  },
                });
              });
            },
            query: `
{
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/writings/" } }
        sort: { fields: frontmatter___pubdate, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              pubdate
              summary
              title
              featuredImage {
                childImageSharp {
                  fluid(
                    duotone: {
                      highlight: "#0ec4f1"
                      shadow: "#192550"
                      opacity: 50
                    }
                    quality: 90
                    webpQuality: 90
                  ) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
        `,
            output: "/rss.xml",
            title: "Buszewski.com",
          },
        ],
      },
    },
  ],
};

// if (process.env.NODE_ENV === "production") {
//   config.plugins.push("gatsby-plugin-preact");
// }

module.exports = config;
