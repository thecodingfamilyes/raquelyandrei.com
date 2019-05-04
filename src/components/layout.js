import React from 'react';
import PropTypes from 'prop-types';
//import LanguageSelector from './LanguageSelector';
//import NavMenu from './NavMenu';

import Header from './header';

import Base from './Base';

function Layout({ children, pageContext }) {
    return (
        <Base pageContext={pageContext}>
            <Header pageContext={pageContext} />

            {children}
        </Base>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageContext: PropTypes.object.isRequired,
};

export default Layout;
