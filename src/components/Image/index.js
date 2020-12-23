import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  max-width: 600px;
`;

const Image = ({ src, alt }) => <Img src={src} alt={alt} />;

export default Image;
