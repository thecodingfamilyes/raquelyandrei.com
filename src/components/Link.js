import React from 'react';
import { Link } from 'gatsby';
import { I18nContext } from '../i18n/I18nContext';

export default function PageLink(props) {
    let { to, children, ...rest } = props;

    return (
        <I18nContext.Consumer>
            {({ locale }) => {
                if (locale !== 'es') {
                    to = `/${locale}${to}`;
                }

                return (
                    <Link to={to} {...rest}>
                        {children}
                    </Link>
                );
            }}
        </I18nContext.Consumer>
    );
}
