import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './Link';

export default function NavMenu() {
    const { t } = useTranslation();

    const sections = [
        {
            title: t('Nosotros'),
            url: '/nosotros',
        },
        {
            title: t('La boda'),
            url: '/boda',
        },
        {
            title: t('Libro de firmas'),
            url: '/firmas',
        },
        {
            title: t('Pregúntanos'),
            url: '/preguntas',
        },
    ];

    return (
        <nav>
            <ul className="uppercase flex justify-end p-5">
                {sections.map(section => (
                    <li className="mx-2" key={section.url}>
                        <Link to={section.url}>{section.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
