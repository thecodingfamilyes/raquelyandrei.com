import React from 'react';
import Layout from '../components/layout';
import NosotrosContent from '../components/Nosotros';
import MenuContext from '../context/PageContext';

function Nosotros({ pageContext }) {
    return (
        <MenuContext.Provider value={'nosotros'}>
            <Layout pageContext={pageContext}>
                <NosotrosContent />
            </Layout>
        </MenuContext.Provider>
    );
}

export default Nosotros;
