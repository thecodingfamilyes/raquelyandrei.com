import React from 'react';
import { Link } from 'gatsby';

export default function LanguageSelector({ locale, availableLocales }) {
    return (
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
                            to={`/${loc.value === 'es' ? '' : loc.value}`}
                        >
                            {loc.text}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
