import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './Link';
import MenuContext from '../context/PageContext';

export default function NavMenu() {
    const { t } = useTranslation();

    const sections = [
        {
            title: t('Nosotros'),
            url: '/nosotros',
            key: 'nosotros',
        },
        {
            title: t('La boda'),
            url: '/boda',
            key: 'boda',
        },
        {
            title: t('Libro de firmas'),
            url: '/firmas',
            key: 'firmas',
        },
    ];

    return (
        <nav>
            <MenuContext.Consumer>
                {curMenu => (
                    <ul className="uppercase flex justify-end p-5 pr-0">
                        {sections.map(section => {
                            let activeClass = null;

                            if (section.key == curMenu) {
                                activeClass = 'border-b-2 border-red-700';
                            }

                            return (
                                <li
                                    className={`mx-2 inline-block ${activeClass}`}
                                    key={section.url}
                                >
                                    <Link to={section.url}>
                                        {section.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </MenuContext.Consumer>
        </nav>
    );
}
