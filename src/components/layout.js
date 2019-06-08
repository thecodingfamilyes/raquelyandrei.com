import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

import Header from './header';

import Base from './Base';

function Layout({ children, pageContext }) {
    return (
        <Base pageContext={pageContext}>
            <Header pageContext={pageContext} className="px-6" />

            {children}

            <Footer/>
        </Base>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageContext: PropTypes.object.isRequired,
};

export default Layout;
