import React, { Fragment } from "react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GlobalStyle } from "~/components/GlobalStyle";
import { ThemeProvider } from "styled-components";

const Decorator = (story) => (
  <Fragment>
    <GlobalStyle />
    {story()}
  </Fragment>
);

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

export const decorators = [Decorator];

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = "";
global.__BASE_PATH__ = "";
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
