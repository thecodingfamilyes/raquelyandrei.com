import React from 'react';
import { Link } from 'gatsby';
import { I18nContext } from '../i18n/I18nContext';

export default function LanguageSelector({ pageContext: { originalPath } }) {
    return (
        <I18nContext.Consumer>
            {({ locale, availableLocales }) => (
                <>
                    <ul className="absolute right-0 top-0 pr-6 pt-12 sm:relative sm:pr-0 flex items-end content-end justify-end pl-5 sm:pt-5">
                        {availableLocales.map(loc => {
                            let className = 'text-grey-600 hover:text-grey-500';

                            if (loc.value === locale) {
                                className += ' font-bold';
                            }

                            return (
                                <li key={loc.value} className="mx-2">
                                    <Link
                                        className={className}
                                        to={`/${
                                            loc.value === 'es' ? '' : loc.value
                                        }${originalPath}`.replace('//', '/')}
                                    >
                                        {loc.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </I18nContext.Consumer>
    );
}
