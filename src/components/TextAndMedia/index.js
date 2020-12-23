import React from "react";
import styled from "styled-components";
import { Heading2, Paragraph1 } from "../Typography/index";
import Image from "../Image/index";

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
`;

const Content = styled.div``;

const TextAndMedia = ({ heading2, para, src, alt }) => (
  <Article>
    <Content>
      <Heading2 heading2={heading2} />
      <Paragraph1 para={para} />
    </Content>
    <Image src={src} alt={alt} />
  </Article>
);

export default TextAndMedia;
