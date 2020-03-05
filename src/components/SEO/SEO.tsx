import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  title?: string;
  description?: string;
  img?: string;
  type?: string;
}

const Seo = (props: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = props.description || site.siteMetadata.description;
  const pageTitle = props.title || site.siteMetadata.title;
  const config = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: props.title,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: props.type ? props.type : "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: "@tomekbuszewski",
    },
    {
      name: "twitter:title",
      content: props.title,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
  ];

  if (props.img) {
    config.push({
      name: "og:photo",
      content: props.img,
    });
  } else {
    config.push({
      name: "og:photo",
      content: `/social-${Math.floor(Math.random() * (3 - 1 + 1) + 1)}.jpg`,
    });
  }
  
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={props.title}
      defaultTitle={pageTitle}
      titleTemplate={`%s · ${site.siteMetadata.title}`}
      meta={config}
    />
  )
};

export { Seo };
