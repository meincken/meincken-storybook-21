import React from "react";
import Layout from "../global/Layout";
import { Heading1, Paragraph1 } from "../components/Typography/index";

const NotFoundPage = () => (
  <Layout>
    <Heading1>NOT FOUND</Heading1>
    <Paragraph1>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph1>
  </Layout>
);

export default NotFoundPage;
