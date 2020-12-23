import React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./index";

storiesOf("02-Components/Footer", module).add("default", () => (
  <Footer footer="test" />
));
