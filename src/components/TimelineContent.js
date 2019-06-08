import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { I18nContext } from '../i18n/I18nContext';
import SEO from './seo';
import TimelineItem from './TimelineItem';
import Image from 'gatsby-image';
import SvgImage from './SvgImage';
import styled from 'styled-components';

const TimelineContainer = styled.div.attrs({
    className: 'container mx-auto pt-4 flex flex-wrap relative mt-5',
})`
    @media (min-width: 1024px) {
        &::before {
            z-index: 1;
            content: '';
            position: absolute;
            top: 0;
            left: 49.7%;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #e2e2e2;
        }

        &::after {
            z-index: 1;
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            border-left: 2px solid #e2e2e2;
        }
    }
`;

const TimelineEnd = styled.div.attrs({
    className: 'container mx-auto py-8 flex flex-wrap relative',
})`
    @media (min-width: 1024px) {
        &::after {
            z-index: 1;
            content: '';
            position: absolute;
            bottom: 0;
            left: 49.7%;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #e2e2e2;
        }
    }
`;

export default function TimelineContent() {
    const { t } = useTranslation();

    return (
        <>
            <I18nContext.Consumer>
                {({ locale }) => <SEO title={t('La boda')} lang={locale} />}
            </I18nContext.Consumer>
            <StaticQuery
                query={graphql`
                    query {
                        FotoPadrinos: file(
                            relativePath: { eq: "foto-padrinos.jpeg" }
                        ) {
                            childImageSharp {
                                fixed(width: 170) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                            extension
                            publicURL
                        }
                        FotoIglesia: file(
                            relativePath: { eq: "foto-iglesia.jpg" }
                        ) {
                            ...TimelineItemImage
                        }
                        IglesiaIcon: file(
                            relativePath: { eq: "iglesia-icon.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        CopaEsperaIcon: file(
                            relativePath: { eq: "copaespera-icon.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        FotoCopaEspera: file(
                            relativePath: { eq: "foto-copaespera.jpg" }
                        ) {
                            ...TimelineItemImage
                        }
                        CoctelIcon: file(
                            relativePath: { eq: "coctel-icon.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        FotoCoctel: file(
                            relativePath: { eq: "foto-coctel.jpeg" }
                        ) {
                            ...TimelineItemImage
                        }
                        BanqueteIcon: file(
                            relativePath: { eq: "banquete-icon.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        FotoBanquete: file(
                            relativePath: { eq: "foto-banquete.jpg" }
                        ) {
                            ...TimelineItemImage
                        }
                        FiestaIcon: file(
                            relativePath: { eq: "fiesta-icon.svg" }
                        ) {
                            ...ImageWithSVG
                        }
                        FotoFiesta: file(
                            relativePath: { eq: "foto-fiesta.jpg" }
                        ) {
                            ...TimelineItemImage
                        }
                    }
                `}
                render={({
                    FotoPadrinos,
                    IglesiaIcon,
                    FotoIglesia,
                    CopaEsperaIcon,
                    FotoCopaEspera,
                    CoctelIcon,
                    FotoCoctel,
                    BanqueteIcon,
                    FotoBanquete,
                    FiestaIcon,
                    FotoFiesta,
                }) => (
                    <TimelineContainer>
                        <TimelineItem
                            title={t('Ceremonia')}
                            time="11:30"
                            icon={<SvgImage {...IglesiaIcon} />}
                            className="w-full px-6 lg:px-0 lg:w-1/2 lg:pr-12"
                        >
                            <div className="item-content py-4">
                                <div className="sm:flex">
                                    <div className="flex-1">
                                        <p>
                                            {t(
                                                'La ceremonia tendrá lugar en la Catedral Ortodoxa Rumana de Madrid, la cual se encuentra en la Calle Tubas, 9, 28054, Madrid. Pertenece al barrio de Carabanchel Alto, os recomendamos que asistáis, sí! Que asistáis!!! Porque ya sabemos qué pasa con ir a las iglesias/catedrales, que os saltáis ese paso y directamente nos vemos en el banquete.'
                                            )}
                                        </p>
                                    </div>

                                    <div className="py-4 sm:py-0 flex flex-1 justify-center sm:justify-end">
                                        <div className="text-center lg:absolute">
                                            <Image
                                                {...FotoPadrinos.childImageSharp}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {t(
                                            'Os recomendamos que si queréis asistir a una ceremonia mágica, de la mano del Padre Siluan Sandor, no dejéis de venir, os va a gustar y más a nosotros el poder contar con vuestra presencia en el templo ;) .'
                                        )}
                                    </p>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <div className="w-full mt-4">
                                        <Image
                                            {...FotoIglesia.childImageSharp}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>

                        <TimelineItem
                            title={t('Copa de espera')}
                            time="13:30"
                            rightSide
                            icon={<SvgImage {...CopaEsperaIcon} />}
                            className="w-full px-6 lg:px-0 lg:w-1/2 lg:pl-12 right-0 ml-auto lg:mt-104"
                        >
                            <div className="item-content py-4">
                                <div className="flex">
                                    <div className="flex-1">
                                        <p>
                                            {t(
                                                'Aquí es donde nos esperaréis una vez finalizada la ceremonia, será en la finca '
                                            )}
                                            <span>
                                                <a
                                                    href="https://www.inbodas.com/fincas-para-bodas-en-madrid-sur/finca-los-cotos/"
                                                    target="_blank"
                                                    title="Los Cotos"
                                                    className="text-red-700"
                                                >
                                                    "Los Cotos"
                                                </a>
                                            </span>
                                            {t(
                                                ', no os preocupéis, es muy grande pero en todo momento contaréis con organizadores que os mostrarán cada parte de la misma si así lo necesitáis.'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <div className="w-full mt-4">
                                        <Image
                                            {...FotoCopaEspera.childImageSharp}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>

                        <TimelineItem
                            title={t('Cóctel')}
                            time="14:00"
                            icon={<SvgImage {...CoctelIcon} />}
                            className="w-full px-6 lg:px-0 lg:w-1/2 lg:pr-12 lg:-mt-16 xl:-mt-40"
                        >
                            <div className="item-content py-4">
                                <div className="flex">
                                    <div className="flex-1">
                                        <p>
                                            {t(
                                                'Aquí es donde aparecemos nosotros, disfrutaréis de toda clase de “picoteo”, eso sí, reservaros un poquito para el banquete, que queda mucha comida por delante!!!'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <div className="w-full mt-4">
                                        <Image
                                            {...FotoCoctel.childImageSharp}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>

                        <TimelineItem
                            title={t('Banquete')}
                            time="15:00"
                            rightSide
                            icon={<SvgImage {...BanqueteIcon} />}
                            className="w-full px-6 lg:px-0 lg:w-1/2 lg:pl-12 right-0 ml-auto lg:mt-40"
                        >
                            <div className="item-content py-4">
                                <div className="flex">
                                    <div className="flex-1">
                                        <p>
                                            {t(
                                                'Os invitamos a un banquete muy activo donde cada uno de vosotros tiene un papel importante para que la diversión esté asegurada en todo momento.'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <div className="w-full mt-4">
                                        <Image
                                            {...FotoBanquete.childImageSharp}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>

                        <TimelineItem
                            title={t('Barra libre + recena')}
                            time="19:00"
                            icon={<SvgImage {...FiestaIcon} />}
                            className="w-full px-6 lg:px-0 lg:w-1/2 lg:pr-12 lg:-mt-40 xl:-mt-56"
                        >
                            <div className="item-content py-4">
                                <div className="flex">
                                    <div className="flex-1">
                                        <p>
                                            {t(
                                                'La apertura de baile estará de nuestra mano pero una vez hayamos finalizado seréis vosotros los encargados de continuar la fiesta, dándolo todo ya que no faltará música variada, sorpresas y buen ambiente.'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <div className="w-full mt-4">
                                        <Image
                                            {...FotoFiesta.childImageSharp}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>

                        <TimelineEnd />
                    </TimelineContainer>
                )}
            />
        </>
    );
}

// you can even declare fragment
export const fragment = graphql`
    fragment TimelineItemImage on File {
        childImageSharp {
            fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
        extension
        publicURL
    }
`;
