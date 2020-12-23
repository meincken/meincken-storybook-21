import React from "react";
import { storiesOf } from "@storybook/react";
import TextAndMedia from "./index";
import GenericImg from "../../assets/images/picture-1.jpg";

storiesOf("02-Components/TextAndMedia", module).add("default", () => (
  <TextAndMedia
    heading2="Test heading"
    para="lorem ipsum"
    src={GenericImg}
    alt="This is an alt"
  />
));
