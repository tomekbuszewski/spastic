import * as React from "react";
import { Layout } from "@components";

import { About, Hero, Work } from "@sections";
import { SECTIONS } from "@config/sections";

const IndexPage = () => (
  <Layout>
    <Hero name={SECTIONS.HERO} />
    <About name={SECTIONS.ABOUT} />
    <Work name={SECTIONS.EXPERIENCE} />
  </Layout>
);

export default IndexPage;
