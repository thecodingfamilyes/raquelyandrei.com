import React from 'react';
import { Link } from 'gatsby';
import { I18nContext } from '../i18n/I18nContext';

export default function LanguageSelector({ pageContext: { originalPath } }) {
    return (
        <I18nContext.Consumer>
            {({ locale, availableLocales }) => (
                <>
                    <ul className="flex items-end content-end justify-end px-5 pt-5">
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
