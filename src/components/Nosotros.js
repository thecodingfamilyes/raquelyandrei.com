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

    console.log(
        t([
            'verle y ya',
            'Y allí estaba ella... detrás de la barra del restaurante, unos metros más abajo de donde yo trabajaba por aquel entonces (2006). Cada vez que Raquel recuerda ese momento, te va a decir lo mismo que a todo el que se lo cuenta; \\"fue verle y ya!!\\"',
        ])
    );

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
                                        {t([
                                            'verle y ya',
                                            'Y allí estaba ella... detrás de la barra del restaurante, unos metros más abajo de donde yo trabajaba por aquel entonces (2006). Cada vez que Raquel recuerda ese momento, te va a decir lo mismo que a todo el que se lo cuenta; "fue verle y ya!!"',
                                        ])}
                                    </p>

                                    <p>
                                        {t([
                                            'unos cafes',
                                            'Unos cuantos cafés a la salida, cenas, cine, el retiro... fueron más que suficientes.',
                                        ])}
                                    </p>

                                    <p>
                                        {t([
                                            'siempre positiva',
                                            'Siempre positiva, me encanta esto en ella, no existe el lado malo, y si lo hubiera, siempre tiene la solución para arreglarlo.',
                                        ])}
                                    </p>

                                    <p>
                                        {t([
                                            'pisciana',
                                            'Como pisciana que es, sorprende su intuición y amabilidad para con todo el mundo, a veces se hace la dura, pero le dura minutos.',
                                        ])}
                                    </p>

                                    <p>
                                        {t([
                                            'hombre afortunado',
                                            '¡Que más decir! Que soy el hombre más afortunado por tenerla, que sin ella, nada tendría sentido.',
                                        ])}
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
                                        {t([
                                            'nacido en piatra',
                                            'Nacido en Piatra Neamt (Rumania) en 1983, el destino quiso que su vida diera un giro de 360 grados al llegar a España, a veces fue fácil, otras no tanto, pero siempre adelante con esa fortaleza interior que le caracteriza.',
                                        ])}
                                    </p>
                                    <p>
                                        {t([
                                            'amigo de sus amigos',
                                            'Amigo de sus amigos, con un corazón que no le cabe, el cual intenta esconder tras una apariencia de duro, que problablemente sorprenda una vez le conoces, comprometedor a tope, siempre tratará de sacarte una sonrisa en los dias grises, aunque con él no funcione, pues como buen Libra que es, no le sacarás tan fácilmente de la cabeza su opinión.',
                                        ])}
                                    </p>
                                    <p>
                                        {t([
                                            'no puedo vivir',
                                            'No puedo vivir sin él, no hay manera...',
                                        ])}
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
                                        {t([
                                            'una mirada',
                                            'Allá por el 2006. Una mirada bastó, los dos sentimos algo tan especial que no se puede describir (we swear!!!).',
                                        ])}
                                    </p>
                                    <p>
                                        {t([
                                            'viaje de nuestras vidas',
                                            'Hace ya 12 años que emprendimos el viaje de nuestras vidas , un billete de embarque llamado destino, hizo que nos encontráramos y que desde entonces no podamos estar el uno sin el otro.',
                                        ])}
                                    </p>
                                    <p>
                                        {t([
                                            'nuevo viaje',
                                            'Y ahora... ¡Hemos decidido embarcarnos en un nuevo viaje! Dentro de nuestra maleta hemos guardado un gran hueco para que podáis compartir con nosotros esta gran aventura.',
                                        ])}
                                    </p>
                                </div>

                                <div className="since-then mt-1 text-right">
                                    <H2 className="text-red-700 text-3xl mb-3">
                                        {t('Desde entonces...')}
                                    </H2>
                                    <p>
                                        {t([
                                            'en las nubes',
                                            'los dos estamos en las nubes, colgados el uno del otro',
                                        ])}{' '}
                                        <strong>
                                            {t('LOVE IS IN THE AIR!!!')}
                                        </strong>
                                    </p>
                                    <p>
                                        {t([
                                            'la tripulacion',
                                            'En este viaje nos ha acompañado la mejor tripulación con la que se puede contar: VOSOTROS, porque habéis estado en los pasajes de nuestras vidas, familia, amigos, infancia, trabajo... a veces el billete ha sido bussines, otras no (para lo bueno y para lo malo, pero siempre ahí), todos y cada uno de vosotros tenéis y tendréis vuestro asiento en este viaje junto a nosotros.',
                                        ])}
                                    </p>
                                    <p>
                                        {t([
                                            'presentaros el vuelo',
                                            'Queremos presentaros el vuelo más importante de nuestra vida...',
                                        ])}{' '}
                                        <strong>
                                            {t('NOS CASAMOS')}
                                            !!
                                        </strong>{' '}
                                        {t([
                                            'los cinturones',
                                            '!!!! Siiiii!!!! Así que, haced ya el Check In, y abrocharos los cinturones que despegamos!!! Será un gran honor poder contar con vuestra presencia.',
                                        ])}
                                    </p>

                                    <div className="bg-gray-200 p-8 text-sm text-left border-l-4 border-blue-900 mt-6">
                                        <p className="mb-4">
                                            {t([
                                                'momentos especiales',
                                                'Hay momentos en la vida que son especiales por si solos. Compartirlos con las personas que queremos los convierte en momentos inolvidables.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'la lluvia no moja',
                                                'Ahora no sentiréis que la lluvia os moja porque cada uno de vosotros será el amparo del otro.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'no hay frio',
                                                'Ahora no sentiréis el frío porque cada uno de vosotros será el abrigo del otro.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'una sola',
                                                'Ahora vosotros sois dos personas pero a partir de ahora seréis una sola.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'id ahora',
                                                'Id ahora a vuestro hogar para comenzar los días de vuestra vida juntos. Y quizás sus días sean largos y buenos sobre la tierra.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'trataos con respeto',
                                                'Trataros a vosotros mismos y al otro con respeto y recordad a menudo qué os ha unido.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'la mayor prioridad',
                                                'Dad la mayor prioridad a la ternura, gentileza y bondad que vuestra unión merece.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'frustracion',
                                                'Cuando la frustración, la dificultad y el temor asalten la relacion, como aquello que amenaza todo tarde o temprano, recordad centraros en lo positivo, no solamente en la parte que se ve equivocada.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'en este camino',
                                                'En este camino, podéis cabalgar lejos de las tormentas cuando las nubes oculten la cara del sol en vuestras vidas, recordad que aunque lo perdáis de vista por un instante, el sol aún sigue ahí.',
                                            ])}
                                        </p>

                                        <p className="italic">
                                            {t([
                                                'cada uno se responsabiliza',
                                                'Y si cada uno de vosotros se responsabiliza por vuestra calidad de vida juntos, seréis bendecidos con la abundancia y la felicidad.',
                                            ])}
                                        </p>

                                        <p className="text-right font-bold mt-4">
                                            {t([
                                                'bendicion nativoamericana',
                                                'Bendición Nativo americana (Apache) del matrimonio',
                                            ])}
                                        </p>
                                    </div>
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
