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

  const photo = `${site.siteMetadata.siteUrl}/social-${Math.floor(
    Math.random() * (3 - 1 + 1) + 1,
  )}.jpg`;

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
      property: "og:photo",
      content: photo,
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
    {
      name: "twitter:image",
      content: photo,
    },
    {
      itemprop: "name",
      content: props.title,
    },
    {
      itemprop: "description",
      content: metaDescription,
    },
    {
      itemprop: "image",
      content: photo,
    }
  ];

  if (props.img) {
    config.push({
      property: "og:photo",
      content: props.img,
    });

    config.push({
      name: "twitter:image",
      content: props.img,
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
  );
};

export { Seo };
