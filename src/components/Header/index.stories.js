import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./index";

storiesOf("02-Components/Header", module).add("Header", () => (
  <Header heading1="Nick" subheading="Meincken" />
));
