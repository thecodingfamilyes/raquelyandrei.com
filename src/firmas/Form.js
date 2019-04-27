import React from 'react';
import { AuthContext } from '../auth/Auth';
import Button from '../components/styled/Button';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function Form() {
    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, currentUser }) => {
                if (!isLoggedIn) {
                    return <>Necesitas estar identificado</>;
                }

                return (
                    <div className="m-auto w-2/3 text-left">
                        <SimpleMDE
                            label="Message"
                            onChange={(...args) => {
                                console.log(args);
                            }}
                            options={{
                                autofocus: true,
                            }}
                        />
                        <Button>Enviar</Button>
                    </div>
                );
            }}
        </AuthContext.Consumer>
    );
}
