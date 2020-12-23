import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 100;

  strong {
    font-weight: 400;
  }
`;
export const Heading1 = ({ heading1, subheading }) => (
  <H1>
    {heading1}
    <strong>{subheading}</strong>
  </H1>
);

const H2 = styled.h2`
  font-size: 3.2rem;
`;
export const Heading2 = ({ heading2 }) => <H2>{heading2}</H2>;

const H3 = styled.h3`
  font-size: 2.8rem;
`;
export const Heading3 = ({ heading3 }) => <H3>{heading3}</H3>;

const H4 = styled.h4`
  font-size: 2.4rem;
`;
export const Heading4 = ({ heading4 }) => <H4>{heading4}</H4>;

const LeadText = styled.p`
  font-size: 2rem;
`;

export const Lead = ({ lead }) => <LeadText>{lead}</LeadText>;

export const Paragraph1 = ({ para }) => <p>{para}</p>;

const SmallText = styled.small`
  font-size: 50%;
`;

export const Small = ({ content }) => (
  <p>
    <SmallText>{content}</SmallText>
  </p>
);
