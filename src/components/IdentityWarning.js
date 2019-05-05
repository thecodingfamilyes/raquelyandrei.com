import React from 'react';
import { useTranslation } from 'react-i18next';
import { StaticQuery, graphql } from 'gatsby';
import SvgImage from './SvgImage';
import Login from './Login';
import styled from 'styled-components';

const ImageContainer = styled.div`
    max-width: 80px;
    max-height: 80px;
`;

export default function IdentityWarning() {
    const { t } = useTranslation();

    return (
        <StaticQuery
            query={graphql`
                query {
                    LoginImage: file(relativePath: { eq: "profile.svg" }) {
                        ...ImageWithSVG
                    }
                }
            `}
            render={({ LoginImage }) => (
                <div className="mt-4 mb-8 flex">
                    <ImageContainer className="mr-8">
                        <SvgImage {...LoginImage} />
                    </ImageContainer>
                    <div className="flex-1 flex items-center">
                        <Login text={t('Escribir en el libro de firmas')} />
                    </div>
                </div>
            )}
        />
    );
}
