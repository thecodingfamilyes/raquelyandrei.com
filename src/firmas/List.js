import React from 'react';
import { useTranslation } from 'react-i18next';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Item from './Item';
import SvgImage from '../components/SvgImage';

const ImageContainer = styled.div`
    max-height: 460px;
    max-width: 350px;
`;

export default function List({ items }) {
    const { t } = useTranslation();

    if (!items || !items.length) {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        Travelers: file(relativePath: { eq: "travelers.svg" }) {
                            ...ImageWithSVG
                        }
                    }
                `}
                render={({ Travelers }) => (
                    <div className="mt-12 mb-16">
                        <p className="my-3 text-center text-gray-700 text-2xl">
                            {t('Aún no hay firmas. ¡Escribe la primera!')}
                        </p>
                        <ImageContainer className="mx-auto">
                            <SvgImage {...Travelers} />
                        </ImageContainer>
                    </div>
                )}
            />
        );
    }

    return (
        <div className="mx-auto">
            {items.map((item, k) => (
                <Item key={k} {...item} />
            ))}
        </div>
    );
}
