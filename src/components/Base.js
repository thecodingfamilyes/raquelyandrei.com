import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import withI18next from '../components/withI18next';
import { I18nContext } from '../i18n/I18nContext';

function Base({ children, pageContext: { locale, availableLocales } }) {
    return (
        <I18nContext.Provider value={{ locale, availableLocales }}>
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={() => (
                    <>
                        <Helmet
                            bodyAttributes={{
                                class:
                                    'font-sans antialiased text-grey-300 bg-neutral-100',
                            }}
                        />

                        {children}
                    </>
                )}
            />
        </I18nContext.Provider>
    );
}

Base.propTypes = {
    children: PropTypes.node.isRequired,
    pageContext: PropTypes.object.isRequired,
};

export default withI18next()(Base);
