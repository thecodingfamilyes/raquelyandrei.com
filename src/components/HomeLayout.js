import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

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
        <div className="flex flex-col flex-1 md:justify-center mx-auto py-8 w-full home-layout w-screen h-screen">
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
