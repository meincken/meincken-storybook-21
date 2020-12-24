import React from "react";
import styled from "styled-components";
import { color, typography } from "./styles";

const HRstyle = styled.hr`
  border-color: #2f2d2e;
  border-color: hsla(0, 0%, 58.8%, 0.1);
  margin: 18px auto 24px;
  width: 60%;
`;

export const HR = () => <HRstyle />;

// Heading
const Heading2 = styled.h2`
  border-bottom: 3px solid ${color.primary};
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;

  @media print {
    border-bottom: 1px solid #000;
    margin-bottom: 0.6rem;
  }

  &.light {
    color: ${color.darkest};
    @media (min-width: 768px) {
      float: left;
    }
  }

  &.center {
    border-bottom: 0;
    color: ${color.darkest};
    font-size: 1.6rem;
    float: none;
    margin-bottom: 4.8rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const H2 = ({ title, color }) => (
  <Heading2 className={color}>{title}</Heading2>
);

const Heading2alt = styled.h2`
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;
`;

export const H2alt = ({ title }) => <Heading2alt>{title}</Heading2alt>;

const Heading3 = styled.h2`
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;
`;

export const H3 = ({ title }) => <Heading3>{title}</Heading3>;

const HeaderStyle = styled.div`
  h1 {
    color: #a9cc17;
    font-weight: 200;
    font-size: 80px;
    grid-column: span 2;
    line-height: 1;
    margin: 0;

    @media print {
      font-size: 50px;
    }

    small {
      color: #e1e1e1;
      font-size: 65%;
      display: block;
    }
  }
`;

export const Header = ({ title, subtitle }) => (
  <HeaderStyle className="container">
    <h1>
      {title}
      <small>{subtitle}</small>
    </h1>
  </HeaderStyle>
);

const Footer = styled.footer`
  grid-template-columns: repeat(12, 1fr);
  max-width: 1040px;
  margin: 0 auto;
  text-align: center;

  @media print {
    display: none !important;
  }
`;

export const FooterBlock = ({ title, copyright }) => (
  <Footer>
    <p>{title}</p>
    <p>{copyright}</p>
  </Footer>
);

// Heading
const Title = styled.h2`
  color: ${color.lightest};
  font-weight: 100;
  margin-bottom: 12px;
`;

export const Heading = ({ title }) => <Title>{title}</Title>;

// Button
const ButtonStyle = styled.a`
  background: ${color.primary};
  border-radius: 5px;
  display: block;
  margin-top: 6px;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s;

  svg {
    margin-right: 10px;
  }
`;

export const Button = ({ href, title }) => (
  <ButtonStyle href={href} target="_blank">
    {title}
  </ButtonStyle>
);

const SectionTitle = styled.header`
  grid-column: span 3;
  h2 {
    float: left;
    font-size: ${typography.size.s3}px;
    font-weight: ${typography.weight.black};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;

    span {
      border-bottom: 3px solid #a9cc17;
      padding-bottom: 6px;
    }
  }
`;

export const SectionHeading = ({ title }) => (
  <SectionTitle>
    <h2>
      <span>{title}</span>
    </h2>
  </SectionTitle>
);
