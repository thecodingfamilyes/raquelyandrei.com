import React, { useState } from 'react';
import { AuthContext } from '../auth/Auth';
import Button from '../components/styled/Button';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function Form({ onSubmit = () => {} }) {
    const [message, setMessage] = useState('');

    let buttonEnabled = !message || message.length <= 3;

    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, currentUserData, currentUser }) => {
                if (!isLoggedIn) {
                    return <>Necesitas estar identificado</>;
                }

                return (
                    <div className="m-auto w-2/3 text-left">
                        <SimpleMDE
                            label="Message"
                            onChange={msg => {
                                setMessage(msg);
                            }}
                            options={{
                                autofocus: true,
                            }}
                        />
                        <Button
                            disabled={buttonEnabled}
                            onClick={() => {
                                onSubmit({
                                    user: currentUserData,
                                    name: currentUser,
                                    email: currentUserData.email,
                                    msg: message,
                                });
                            }}
                        >
                            Enviar
                        </Button>
                    </div>
                );
            }}
        </AuthContext.Consumer>
    );
}
