import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function HomeLayout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteHomeTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col flex-1 md:justify-center mx-auto px-4 py-8 md:p-8 w-full home-layout">
          <Header siteTitle={data.site.siteMetadata.title} />
          
          {children}
        </div>
      )}
    />
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomeLayout;
