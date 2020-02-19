import * as React from "react";

import { Layout } from "@components";
import { Hero, About, Experience } from "@sections";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
  </Layout>
);

export default IndexPage;
