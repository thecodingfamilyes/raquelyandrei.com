import React from 'react';
import Layout from '../components/layout';
import App from '../firmas/Firmas';
import MenuContext from '../context/PageContext';

function Firmas({ pageContext }) {
    return (
        <MenuContext.Provider value={'firmas'}>
            <Layout pageContext={pageContext}>
                <div className="container mx-auto">
                    <App />
                </div>
            </Layout>
        </MenuContext.Provider>
    );
}

export default Firmas;
