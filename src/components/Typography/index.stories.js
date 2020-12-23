import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Lead,
  Paragraph1,
} from "./index";

storiesOf("01-Atoms/Typography", module).add("default", () => (
  <>
    <Heading1 heading1="Heading 1" />
    <Heading2 heading2="Heading 2" />
    <Heading3 heading3="Heading 3" />
    <Heading4 heading4="Heading 4" />
    <Lead lead="Lead text - Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus." />
    <Paragraph1 para="Paragraph style" />
  </>
));
