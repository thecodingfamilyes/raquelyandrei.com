import React from 'react';
import Layout from '../components/HomeLayout';

import Countdown from '../components/Countdown';
import { StaticQuery, graphql } from 'gatsby';
import SvgImage from '../components/SvgImage';

import Header from '../components/header';

function IndexPage({ pageContext }) {
    return (
        <Layout pageContext={pageContext}>
            <StaticQuery
                query={graphql`
                    query {
                        planeImage: file(
                            relativePath: { eq: "map-plane.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        sealImage: file(
                            relativePath: { eq: "round-seal.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        fullBg: file(
                            relativePath: { eq: "Illustrations.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={({ fullBg, site }) => (
                    <div className="text-center">
                        <Header isHome className="absolute top-0 w-full" siteTitle={site.siteMetadata.title} pageContext={pageContext} />
                        <SvgImage {...fullBg} className="w-screen h-screen pt-8" />
                        <Countdown />
                    </div>
                )}
            />
        </Layout>
    );
}

export default IndexPage;
