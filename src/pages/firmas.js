import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Login from '../components/Login';
import App from '../firmas/Firmas';

function Firmas({ pageContext }) {
    return (
        <Layout pageContext={pageContext}>
            <SEO title="Libro de firmas" />
            <div className="container text-center">
                <Login />

                <App />
            </div>
        </Layout>
    );
}

export default Firmas;
