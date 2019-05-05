import React, { useState } from 'react';
import { AuthContext } from '../auth/Auth';
import { useTranslation } from 'react-i18next';
import Button from '../components/styled/Button';
import IdentityWarning from '../components/IdentityWarning';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function Form({ onSubmit = () => {} }) {
    const [message, setMessage] = useState('');
    const { t } = useTranslation();

    let buttonEnabled = !message || message.length <= 3;

    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, currentUserData, currentUser, logout }) => {
                if (!isLoggedIn) {
                    return <IdentityWarning />;
                }

                return (
                    <div className="mx-auto mb-8 text-left">
                        <SimpleMDE
                            label={t('Escribe aquí tu mensaje')}
                            onChange={msg => {
                                setMessage(msg);
                            }}
                            options={{
                                autofocus: true,
                                status: false,
                            }}
                        />
                        <div className="flex my-2">
                            <Button
                                disabled={buttonEnabled}
                                className="mr-4"
                                onClick={() => {
                                    onSubmit({
                                        user: currentUserData,
                                        name: currentUser,
                                        email: currentUserData.email,
                                        msg: message,
                                    });
                                }}
                            >
                                {t('Publicar firma')}
                            </Button>

                            <button onClick={logout} className="text-gray-600">
                                {t('Cancelar')}
                            </button>
                        </div>
                    </div>
                );
            }}
        </AuthContext.Consumer>
    );
}
