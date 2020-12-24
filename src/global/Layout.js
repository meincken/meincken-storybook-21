import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../shared/GlobalStyle";
import Default from "../assets/theme";

import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={Default}>
        <>
          <Helmet>
            <title>
              {data.site.siteMetadata.title}
              {data.site.siteMetadata.subtitle}
            </title>
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="default"
            />
          </Helmet>
          <GlobalStyle />
          <Header heading1={data.site.siteMetadata.title} subheading={data.site.siteMetadata.subtitle} />
          <>{children}</>
          <Footer title={data.site.siteMetadata.title} />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
