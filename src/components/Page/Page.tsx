import * as React from "react";
import { Layout } from "@components";
import { ArticleBody, ArticleHeader } from "@ui/Molecules";

interface Props {
  pageContext: {
    title: string;
    body: string;
    pubdate?: string;
    photo?: string;
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
      <ArticleHeader
        title={props.pageContext.title}
        photo={props.pageContext.photo || false}
        pubdate={props.pageContext.pubdate}
      />
      <ArticleBody source={props.pageContext.body} />
    </Layout>
  );
};

export { Page };

export default Page;
