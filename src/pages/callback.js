import React, { useState } from 'react';
import { Auth, AuthContext } from '../auth/Auth';

const Callback = ({ pageContext }) => {
    const [authenticated, setAuthenticated] = useState(false);

    if (authenticated) {
        return (
            <Auth>
                <AuthContext.Consumer>
                    {({ currentUserData }) => {
                        return (
                            <pre>
                                {JSON.stringify(currentUserData, null, 4)}
                            </pre>
                        );
                    }}
                </AuthContext.Consumer>
            </Auth>
        );
    }

    return (
        <Auth>
            <AuthContext.Consumer>
                {({ handleAuth }) => {
                    return (
                        <p
                            ref={() => {
                                setAuthenticated(true);
                                handleAuth();
                            }}
                        >
                            Loading...
                        </p>
                    );
                }}
            </AuthContext.Consumer>
        </Auth>
    );
};

export default Callback;
