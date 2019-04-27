import React from 'react';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

// this can be in different file
const ImgWithSVGSupport = ({ childImageSharp, extension, publicURL, alt, ...rest }) => {
    if (!childImageSharp && extension === 'svg') {
        return <img src={publicURL} {...rest} alt={alt} />;
    }
    return <GatsbyImage {...childImageSharp} {...rest} />;
};

export default ImgWithSVGSupport;

// you can even declare fragment
export const fragment = graphql`
  fragment ImageWithSVG on File {
    childImageSharp {
      fluid(maxWidth: 2600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
    extension
    publicURL
  }
`;
