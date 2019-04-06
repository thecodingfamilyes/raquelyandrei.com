import React from 'react';
import Layout from '../components/layout';
import PersonCard from '../components/PersonCard';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { useTranslation } from 'react-i18next';

function Nosotros({ pageContext }) {
    const { t } = useTranslation();

    return (
        <Layout pageContext={pageContext}>
            <StaticQuery
                query={graphql`
                    query {
                        RaquelImage: file(
                            relativePath: { eq: "Raquel-photo.png" }
                        ) {
                            ...PersonImage
                        }
                        AndreiImage: file(
                            relativePath: { eq: "andrei-photo.png" }
                        ) {
                            ...PersonImage
                        }
                        FirstImage: file(
                            relativePath: { eq: "first-photo.png" }
                        ) {
                            ...PersonImage
                        }
                    }
                `}
                render={({ RaquelImage, AndreiImage, FirstImage }) => (
                    <>
                        <PersonCard
                            title="Raquel"
                            photo={<Image {...RaquelImage.childImageSharp} />}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam eget ex eget dolor
                                dapibus egestas et at mauris. Sed posuere, orci
                                et consequat faucibus, nibh lectus ultrices
                                diam, sit amet semper dui tellus id magna. Fusce
                                congue tempor laoreet. Nam quis neque vehicula,
                                volutpat elit ut, placerat odio. Suspendisse sit
                                amet pellentesque arcu. Duis volutpat diam a
                                tincidunt tempus. Vivamus bibendum massa a elit
                                maximus, eget ultricies ligula auctor. Donec
                                vitae elit eleifend, condimentum justo quis,
                                pulvinar enim. Praesent rutrum tincidunt mauris,
                                vel consectetur eros bibendum sit amet. Ut et
                                dui vitae lectus laoreet tristique sed ac est.
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Phasellus dignissim ligula mi,
                                vitae ultricies nisl eleifend eu. Curabitur
                                rutrum lacus felis, nec varius nibh dapibus ac.
                            </p>
                        </PersonCard>

                        <PersonCard
                            title="Andrei"
                            photo={<Image {...AndreiImage.childImageSharp} />}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam eget ex eget dolor
                                dapibus egestas et at mauris. Sed posuere, orci
                                et consequat faucibus, nibh lectus ultrices
                                diam, sit amet semper dui tellus id magna. Fusce
                                congue tempor laoreet. Nam quis neque vehicula,
                                volutpat elit ut, placerat odio. Suspendisse sit
                                amet pellentesque arcu. Duis volutpat diam a
                                tincidunt tempus. Vivamus bibendum massa a elit
                                maximus, eget ultricies ligula auctor. Donec
                                vitae elit eleifend, condimentum justo quis,
                                pulvinar enim. Praesent rutrum tincidunt mauris,
                                vel consectetur eros bibendum sit amet. Ut et
                                dui vitae lectus laoreet tristique sed ac est.
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Phasellus dignissim ligula mi,
                                vitae ultricies nisl eleifend eu. Curabitur
                                rutrum lacus felis, nec varius nibh dapibus ac.
                            </p>
                        </PersonCard>
                        <PersonCard
                            title={t('Nos conocimos...')}
                            photo={<Image {...FirstImage.childImageSharp} />}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam eget ex eget dolor
                                dapibus egestas et at mauris. Sed posuere, orci
                                et consequat faucibus, nibh lectus ultrices
                                diam, sit amet semper dui tellus id magna. Fusce
                                congue tempor laoreet. Nam quis neque vehicula,
                                volutpat elit ut, placerat odio. Suspendisse sit
                                amet pellentesque arcu. Duis volutpat diam a
                                tincidunt tempus. Vivamus bibendum massa a elit
                                maximus, eget ultricies ligula auctor. Donec
                                vitae elit eleifend, condimentum justo quis,
                                pulvinar enim. Praesent rutrum tincidunt mauris,
                                vel consectetur eros bibendum sit amet. Ut et
                                dui vitae lectus laoreet tristique sed ac est.
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Phasellus dignissim ligula mi,
                                vitae ultricies nisl eleifend eu. Curabitur
                                rutrum lacus felis, nec varius nibh dapibus ac.
                            </p>
                        </PersonCard>
                    </>
                )}
            />
        </Layout>
    );
}

export default Nosotros;

// you can even declare fragment
export const fragment = graphql`
    fragment PersonImage on File {
        childImageSharp {
            fluid(maxHeight: 125) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
        extension
        publicURL
    }
`;
