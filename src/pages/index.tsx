import * as React from "react";
import loadable from "@loadable/component";

import { Layout } from "@components";
import { Hero } from "@sections";

const About = loadable(() => import("../sections/About/About"));
const Experience = loadable(() => import("../sections/Experience/Experience"));
const Writings = loadable(() => import("../sections/Writings/Writings"));
const Contact = loadable(() => import("../sections/Contact/Contact"));

const IndexPage = () => (
  <Layout isFrontPage={true}>
      <Hero/>
      <About/>
      <Experience/>
      <Writings/>
      <Contact/>
  </Layout>
);

export default IndexPage;
