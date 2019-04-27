import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import LanguageSelector from './LanguageSelector';
import NavMenu from './NavMenu';
import Helmet from 'react-helmet';
import { Auth } from '../auth/Auth';
import withI18next from '../components/withI18next';
import { I18nContext } from '../i18n/I18nContext';

function Layout({
    children,
    pageContext: { locale, availableLocales },
    pageContext,
}) {
    return (
        <I18nContext.Provider value={{ locale, availableLocales }}>
            <Auth>
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

                            <LanguageSelector pageContext={pageContext} />

                            <NavMenu />

                            {children}
                        </>
                    )}
                />
            </Auth>
        </I18nContext.Provider>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageContext: PropTypes.object.isRequired,
};

export default withI18next()(Layout);
