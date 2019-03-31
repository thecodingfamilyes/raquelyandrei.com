import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withI18next from '../components/withI18next';
import Login from '../components/Login';
import { Auth } from '../auth/Auth';

function Firmas({ pageContext: { locale }, t, pageContext }) {
    return (
        <Layout pageContext={pageContext}>
            <SEO title="Libro de firmas" />
            <Auth>
                <div className="container text-center">
                    <Login />
                </div>
            </Auth>
        </Layout>
    );
}

export default withI18next()(Firmas);
