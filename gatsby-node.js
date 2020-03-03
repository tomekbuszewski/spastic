const { resolve } = require("path");

const slugify = require("slugify");
const { createFilePath } = require("gatsby-source-filesystem");

const slugifyCfg = require("./config/slugify");

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);

    // Pages
    if (fileNode.relativePath.includes("pages")) {
      const slug = createFilePath({ node, getNode }).replace("/pages/", "/");

      actions.createNodeField({
        node,
        name: "slug",
        value: slugify(slug, slugifyCfg),
      });
    }

    // Writings
    if (fileNode.relativePath.includes("writings")) {
      const slug = slugify(createFilePath({ node, getNode }), slugifyCfg);

      actions.createNodeField({
        node,
        name: "slug",
        value: slug,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const {
    data: {
      posts: { edges: posts },
      pages: { edges: pages },
    },
  } = await graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }

            title: frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fixed(
                    width: 1920
                    duotone: {
                      highlight: "#0ec4f1"
                      shadow: "#192550"
                      opacity: 50
                    }
                    quality: 90
                    webpQuality: 90
                  ) {
                    base64
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
            body: rawMarkdownBody
          }
        }
      }

      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/writings/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            title: frontmatter {
              title
              pubdate(formatString: "MMMM Do, YYYY")
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
            body: rawMarkdownBody
          }
        }
      }
    }
  `);

  [...posts, ...pages].forEach(({ node }) => {
    const { title, pubdate, featuredImage } = node.title;
    const { slug } = node.fields;
    const body = node.body;
    const photo = featuredImage && featuredImage.childImageSharp.fluid;

    actions.createPage({
      path: slug,
      component: resolve(__dirname, "src", "components", "Page", "Page.tsx"),
      context: {
        title,
        body,
        pubdate,
        photo,
      },
    });
  });

  const postsPerPage = 8;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numberOfPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/writings" : `/writings/${i + 1}`,
      component: resolve(
        __dirname,
        "src",
        "components",
        "Writings",
        "Writings.tsx",
      ),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    });
  });
};
