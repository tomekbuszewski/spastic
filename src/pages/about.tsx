import * as React from "react";
import { Layout } from "@components";

import { ArticleBody, ArticleHeader } from "@ui/Molecules";

import data from "../ui/Molecules/ArticleBody/data";

const AboutPage = () => (
  <Layout isFrontPage={false}>
    <ArticleHeader title="About me" />
    <ArticleBody source={data} />
  </Layout>
);

export default AboutPage;
