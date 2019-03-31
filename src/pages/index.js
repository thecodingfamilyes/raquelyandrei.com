import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withI18next from '../components/withI18next';
import Countdown from '../components/Countdown';
import { StaticQuery, graphql } from 'gatsby';
import SvgImage from '../components/SvgImage';

function IndexPage({ pageContext: { locale }, t, pageContext }) {
    return (
        <Layout pageContext={pageContext}>
            <SEO title="Portada" />

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
                    }
                `}
                render={({ fullBg }) => (
                    <div className="text-center container m-auto">
                        <SvgImage {...fullBg} className="w-screen" />
                    </div>
                )}
            />

            <Countdown locale={locale} />
        </Layout>
    );
}

export default withI18next()(IndexPage);
