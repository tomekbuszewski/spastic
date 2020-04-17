import * as React from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";

import { Layout, Seo } from "@components";
import { ArticleBody } from "@ui/Molecules";

const ArticleHeader = loadable(() =>
  import("../../ui/Molecules/ArticleHeader/ArticleHeader"),
);

interface Props {
  pageContext: {
    title: string;
    body: string;
    html: string;
    pubdate?: string;
    summary: string;
    photo?: string;
  };
  data: {
    file: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const Page = (props: Props) => {
  React.useEffect(() => {
    (async () => {
      const Prism = await import("./prismjs");
      Prism.default.highlightAll();
    })();
  });

  return (
    <Layout isFrontPage={false} title={props.pageContext.title}>
      <Seo
        title={props.pageContext.title}
        description={props.pageContext.summary}
        type="article"
      />
      <ArticleHeader
        title={props.pageContext.title}
        photo={props.pageContext.photo && props.data.file.childImageSharp.fluid}
        pubdate={props.pageContext.pubdate}
      />
      <ArticleBody source={props.pageContext.html} />
    </Layout>
  );
};
const query = graphql`
  query GetPhoto($photo: String) {
    file(id: { eq: $photo }) {
      childImageSharp {
        fluid(
          webpQuality: 90
          quality: 90
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            blackOnWhite: true
            alphaMax: 1.5
            color: "#000"
          }
        ) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;
export { Page, query };

export default Page;
