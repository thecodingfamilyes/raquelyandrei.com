import PropTypes from 'prop-types';
import React from 'react';
import NavMenu from './NavMenu';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';

import { StaticQuery, graphql } from 'gatsby';
import SvgImage from '../components/SvgImage';

const LogoContainer = styled.div`
    max-width: 120px; 
`;

function Header({ className, pageContext, isHome }) {	
    return (
        <StaticQuery
            query={graphql`
				query {
					HeaderLogo: file(
						relativePath: { eq: "subpages-logo.svg" }
					) {
						...ImageWithSVG
					}
				}
			`}
            render={({ HeaderLogo }) => {
                let content = <div className={className}>
                    <LanguageSelector pageContext={pageContext} />
                    <NavMenu />
                </div>;

                if(!isHome) {
                    content = <div className={`flex container mx-auto ${className}`}>
                        <div className="flex-auto">
                            <LogoContainer>
                                <SvgImage {...HeaderLogo} className="py-5" />
                            </LogoContainer>
                        </div>
                        <div className="flex-auto">
                            <LanguageSelector pageContext={pageContext} />
                            <NavMenu />
                        </div>
                    </div>;
                }
                return (
                    content
                );
            }}
        />
    );
}

Header.propTypes = {
    className: PropTypes.string
};

Header.defaultProps = {
    className: ''
};

export default Header;
