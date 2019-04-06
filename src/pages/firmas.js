import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Login from '../components/Login';
import App from '../firmas/Firmas';
import MenuContext from '../context/PageContext';

function Firmas({ pageContext }) {
    return (
        <MenuContext.Provider value={'firmas'}>
            <Layout pageContext={pageContext}>
                <SEO title="Libro de firmas" />
                <div className="container text-center">
                    <Login />

                    <App />
                </div>
            </Layout>
        </MenuContext.Provider>
    );
}

export default Firmas;
