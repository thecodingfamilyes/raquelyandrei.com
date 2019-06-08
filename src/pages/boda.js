import React from 'react';
import Layout from '../components/layout';
import TimelineContent from '../components/TimelineContent';
import MenuContext from '../context/PageContext';

function Boda({ pageContext }) {
    return (
        <MenuContext.Provider value={'boda'}>
            <Layout pageContext={pageContext}>
                <TimelineContent />
            </Layout>
        </MenuContext.Provider>
    );
}

export default Boda;
