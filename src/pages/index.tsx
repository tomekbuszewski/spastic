import * as React from "react";

import { Layout } from "@components";
import { Hero, About, Experience, Writings } from "@sections";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Writings />
  </Layout>
);

export default IndexPage;
