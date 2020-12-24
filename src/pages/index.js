import React from "react";
import styled from "styled-components";
import Layout from "../global/Layout";
import { HR } from "../shared/ui-kit";
import TextAndMedia from "../components/TextAndMedia/index";
import Hero from "../components/Image/hero";
import HeroImg from "../assets/images/header-background.jpg";
import GenericImg from "../assets/images/picture-2.jpg";

const Section = styled.section`
  width: 100%;
`;

const Page = styled.main`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns:
    [full-start] minmax(2rem, 1fr)
    [main-start] minmax(0, 110rem) [main-end]
    minmax(2rem, 1fr) [full-end];

  > * {
    grid-column: main;
  }
`;

const IndexPage = () => (
  <Layout>
    <Hero src={HeroImg} alt="Hero" />
    <Page>
      <Section>
        <TextAndMedia
          heading2="This is my demo title 1"
          para="lorem ipsum delore"
          src={GenericImg}
          alt="Testing this shit"
        />
        <HR />
        <TextAndMedia
          heading2="This is my demo title 2"
          para="lorem ipsum delore part 2"
          src={GenericImg}
          alt="Testing this shit"
        />
      </Section>
    </Page>
  </Layout>
);

export default IndexPage;
