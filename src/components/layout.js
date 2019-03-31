import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import LanguageSelector from "./LanguageSelector";
import NavMenu from './NavMenu';
import Helmet from "react-helmet";

function Layout({ children, pageContext: { locale, availableLocales } }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            bodyAttributes={{
              class: "font-sans antialiased text-grey-300 bg-neutral-100"
            }}
          />

          <LanguageSelector
            locale={locale}
            availableLocales={availableLocales}
          />

          <NavMenu />

          {children}
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
