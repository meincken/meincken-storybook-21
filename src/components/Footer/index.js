import React from "react";
import styled from "styled-components";
import { Small } from "../Typography/index";

const FooterBlock = styled.footer`
  background: black;
  color: white;
  text-align: center;
  padding: 2rem 0;

  p {
    line-height: 0.5;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Small content={"\u00a9Nick Meincken 1997-2020"} />
    </FooterBlock>
  );
};

export default Footer;
