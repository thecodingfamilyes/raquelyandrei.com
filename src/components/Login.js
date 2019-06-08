import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './styled/Button';
import { AuthContext } from '../auth/Auth';

function Login({ text }) {
    const { t } = useTranslation();

    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, currentUser, login, logout }) => {
                if (isLoggedIn) {
                    return (
                        <>
                            {t('Te has identificado como')}
                            {` ${currentUser}`}{' '}
                            <a
                                href="#"
                                className="text-red-700"
                                onClick={() => logout()}
                            >
                                {t('Haz click aquí para salir')}
                            </a>
                        </>
                    );
                }

                return (
                    <Button onClick={() => login()}>
                        {text || t('Identificarme')}
                    </Button>
                );
            }}
        </AuthContext.Consumer>
    );
}

export default Login;
