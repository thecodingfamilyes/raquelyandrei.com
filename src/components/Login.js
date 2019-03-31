import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './styled/Button';
import { AuthContext } from '../auth/Auth';

function Login() {
    const { t } = useTranslation();

    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, currentUser, login, logout }) => {
                if (isLoggedIn) {
                    return (
                        <>
                            estoy logged in, soy {currentUser}!!
                            <Button onClick={() => logout()}>
                                {t('Logout')}
                            </Button>
                        </>
                    );
                }

                return <Button onClick={() => login()}>{t('Login!')}</Button>;
            }}
        </AuthContext.Consumer>
    );
}

export default Login;
