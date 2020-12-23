import React from "react";
import { storiesOf } from "@storybook/react";
import HeroImg from "../../assets/images/header-background.jpg";
import GenericImg from "../../assets/images/picture-1.jpg";

import Image from ".";
import Hero from "./hero";

storiesOf("01-Atoms/Image", module)
  .add("Default", () => <Image src={GenericImg} alt="Generic Image" />)
  .add("Hero", () => <Hero src={HeroImg} alt="Hero Image" />);
