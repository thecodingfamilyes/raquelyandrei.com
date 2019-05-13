import React, { useState } from 'react';
import { AuthContext } from '../auth/Auth';
import { useTranslation } from 'react-i18next';
import Button from '../components/styled/Button';
import { AvatarImg } from '../components/styled/Avatar';
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
                if (!isLoggedIn || !currentUserData) {
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
                        <div className="flex justify-between my-2">
                            <div className="flex items-center content-end">
                                <AvatarImg
                                    className="mr-2"
                                    src={currentUserData.picture}
                                    alt={currentUserData.name}
                                />

                                <div className="">{currentUserData.name}</div>
                            </div>
                            <div className="flex">
                                <button
                                    onClick={logout}
                                    className="text-gray-600 mr-4"
                                >
                                    {t('Cancelar')}
                                </button>
                                <Button
                                    disabled={buttonEnabled}
                                    onClick={() => {
                                        onSubmit({
                                            user: currentUserData,
                                            name: currentUser,
                                            email: currentUserData.email,
                                            msg: message,
                                            image:
                                                currentUserData.picture || null,
                                        });
                                    }}
                                >
                                    {t('Publicar firma')}
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            }}
        </AuthContext.Consumer>
    );
}
