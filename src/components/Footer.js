import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SvgImage from './SvgImage';

function Footer() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    FooterLogo: file(
                        relativePath: { eq: "round-seal-white.svg" }
                    ) {
                        ...ImageWithSVG
                    }
                }
            `}
            render={({ FooterLogo }) => (
                <div className="bg-blue-900 text-white text-center mt-12 py-16 relative">
                    <p className="font-cursive">&copy; 2019 Raquel & Andrei</p>
                    <p className="font-sans text-xs pt-2">Realizado por <a href="https://github.com/thecodingfamilyes" target="_blank" title="The Coding Family" className="font-bold">The Coding Family</a></p>
                    <SvgImage className="absolute inset-y-0 mr-100 pt-8 right-0" {...FooterLogo} />
                </div>
            )}
        />
    );
}

export default Footer;