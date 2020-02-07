import * as React from "react";
import { Layout } from "@components";

import { About, Hero } from "@sections";
import { SECTIONS } from "@config/sections";

const IndexPage = () => (
  <Layout>
    <Hero name={SECTIONS.HERO} />
    <About name={SECTIONS.ABOUT} />
  </Layout>
);

export default IndexPage;
