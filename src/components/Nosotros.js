import React from 'react';

import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import PersonCard from './PersonCard';
import { H2 } from './styled/Titles';
import { I18nContext } from '../i18n/I18nContext';
import SEO from './seo';

export default function Nosotros() {
    const { t } = useTranslation();

    return (
        <>
            <I18nContext.Consumer>
                {({ locale }) => <SEO title={t('Nosotros')} lang={locale} />}
            </I18nContext.Consumer>
            <StaticQuery
                query={graphql`
                    query {
                        RaquelImage: file(
                            relativePath: { eq: "Raquel-photo.png" }
                        ) {
                            ...PersonImage
                        }
                        AndreiImage: file(
                            relativePath: { eq: "andrei-photo.png" }
                        ) {
                            ...PersonImage
                        }
                        FirstImage: file(
                            relativePath: { eq: "first-photo.png" }
                        ) {
                            ...PersonImage
                        }
                        HeartIcon: file(
                            relativePath: { eq: "heart-icon.png" }
                        ) {
                            childImageSharp {
                                fixed(width: 60) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                            extension
                            publicURL
                        }
                        HeartsIcon: file(relativePath: { eq: "hearts.png" }) {
                            childImageSharp {
                                fixed(width: 170) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                            extension
                            publicURL
                        }
                    }
                `}
                render={({
                    RaquelImage,
                    AndreiImage,
                    FirstImage,
                    HeartIcon,
                    HeartsIcon,
                }) => {
                    return (
                        <div className="container mx-auto">
                            <div className="single-cards block lg:flex">
                                <PersonCard
                                    title="Raquel"
                                    photo={
                                        <Image
                                            {...RaquelImage.childImageSharp}
                                        />
                                    }
                                    className="flex-1 flex"
                                >
                                    <p>
                                        {t(
                                            'Y allí estaba ella... detrás de la barra del restaurante, unos metros más abajo de donde yo trabajaba por aquel entonces (2006). Cada vez que Raquel recuerda ese momento, te va a decir lo mismo que a todo el que se lo cuenta; "fue verle y ya!!"'
                                        )}
                                    </p>

                                    <p>
                                        {t(
                                            'Unos cuantos cafés a la salida, cenas, cine, el retiro... fueron más que suficientes.'
                                        )}
                                    </p>

                                    <p>
                                        {t(
                                            'Siempre positiva, me encanta esto en ella, no existe el lado malo, y si lo hubiera, siempre tiene la solución para arreglarlo.'
                                        )}
                                    </p>

                                    <p>
                                        {t(
                                            'Como pisciana que es, sorprende su intuición, aprensión y amabilidad para con todo el mundo, a veces se hace la dura, pero le dura minutos.'
                                        )}
                                    </p>

                                    <p>
                                        {t(
                                            '¡Que más decir! Que soy el hombre más afortunado por tenerla, que sin ella, nada tendría sentido.'
                                        )}
                                    </p>
                                </PersonCard>

                                <div className="icon self-center hidden sm:block md:py-4 pt-20 pb-0 px-6 text-center">
                                    <Image {...HeartIcon.childImageSharp} />
                                </div>

                                <PersonCard
                                    title="Andrei"
                                    photo={
                                        <Image
                                            {...AndreiImage.childImageSharp}
                                        />
                                    }
                                    className="flex-1 flex"
                                >
                                    <p>
                                        {t(
                                            'Nacido en Piatra Neamt (Rumania) en 1983, el destino quiso que su vida diera un giro de 360 grados al llegar a España, a veces fue fácil, otras no tanto, pero siempre adelante con esa fortaleza interior que le caracteriza.'
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            'Amigo de sus amigos, con un corazón que no le cabe, el cual intenta esconder tras una apariencia de duro, que problablemente sorprenda una vez le conoces, comprometedor a tope, siempre tratará de sacarte una sonrisa en los dias grises, aunque con él no funcione, pues como buen Libra que es, no le sacarás tan fácilmente de la cabeza su opinión.'
                                        )}
                                    </p>
                                </PersonCard>
                            </div>

                            <div className="icon text-center mt-5">
                                <Image {...HeartsIcon.childImageSharp} />
                            </div>

                            <PersonCard
                                photo={
                                    <Image {...FirstImage.childImageSharp} />
                                }
                                className="double-card"
                                isBig
                            >
                                <div className="our-start">
                                    <H2 className="text-red-700 text-3xl mb-3">
                                        {t('Nos conocimos...')}
                                    </H2>
                                    <p>
                                        {t(
                                            'allá por el 2006, que fue cuando nos conocimos, bastó una mirada, mutua, y ya... ya la liamos, los dos sentimos algo tan especial que no se puede describir (we swear!!!).'
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            'Cierto es que Reixel (así la llaman sus amigos más cercanos) se hizo la  por un año, por que no fue hasta el año siguiente que se subió al avión del viaje de su vida, el cual despegó una tarde de marzo de 2007.'
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            'Allí se encontraba su piloto, Andrei, al mando del vuelo más importante de su vida, deseando despegar y quedarse por siempre en !pinteresanteunto de NO retorno", es decir, no abortar el vuelo.'
                                        )}
                                    </p>
                                </div>

                                <div className="since-then mt-1 text-right">
                                    <H2 className="text-red-700 text-3xl mb-3">
                                        {t('Desde entonces...')}
                                    </H2>
                                    <p>
                                        {t(
                                            'los dos están en las nubes, colgados el uno del otro '
                                        )}
                                        <strong>
                                            {t('LOVE IS IN THE AIR!!!')}
                                        </strong>
                                    </p>
                                    <p>
                                        {t(
                                            'En este viaje nos ha acompañado la mejor tripulación con la que se puede contar: VOSOTROS, por que habéis estado en los pasajes de nuestras vidas, familia, amigos, infancia, trabajo... a veces el billete ha sido bussines, otras no (para lo bueno y para lo malo, pero siempre ahí), todos y cada uno de vosotros tenéis y tendréis vuestro asiento en este viaje junto a nosotros (en busssines, of course) en nuestro Airbus A380-800 (el más grande del mundo) por siempre.'
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            'Ahora hablamos de otro viaje, el vuelo más importante de nuestra vida, porque...'
                                        )}
                                        <strong>{t(' NOS CASAMOS')}</strong>
                                        {t(
                                            '!!!! Siiiii!!!! Así que, abróchense los cinturones, porque en nombre de la tripulación;  Raquel y Andrei, les deseamos un feliz viaje y una experiencia única, por compartir este momento tan especial con nosotros, el cual nos llena de honor poder contar con vuestra presencia (Check In necesario).'
                                        )}
                                    </p>
                                </div>
                            </PersonCard>
                        </div>
                    );
                }}
            />
        </>
    );
}

// you can even declare fragment
export const fragment = graphql`
    fragment PersonImage on File {
        childImageSharp {
            fluid(maxHeight: 125) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
        extension
        publicURL
    }
`;
