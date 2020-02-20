import * as React from "react";

import { Layout } from "@components";
import { Hero, About, Experience, Writings, Contact } from "@sections";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Writings />
    <Contact />
  </Layout>
);

export default IndexPage;
