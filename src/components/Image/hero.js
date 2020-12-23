import React from "react";
import styled from "styled-components";

const Hero = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroBlock = ({ src, alt }) => <Hero src={src} alt={alt} />;

export default HeroBlock;
