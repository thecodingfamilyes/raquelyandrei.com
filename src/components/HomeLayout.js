import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Base from './Base';

function HomeLayout({ children, pageContext }) {
  return (
    <Base pageContext={pageContext}>
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
        render={() => (
            <div className="flex flex-col flex-1 md:justify-center mx-auto py-8 w-full home-layout w-screen h-screen">
              {children}
            </div>
        )}
      />
    </Base>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomeLayout;
