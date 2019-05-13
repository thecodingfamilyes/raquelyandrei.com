import React, { useState } from 'react';
import { Auth, AuthContext } from '../auth/Auth';
import { navigate } from 'gatsby';

const Callback = () => {
    const [authenticated, setAuthenticated] = useState(false);

    if (authenticated) {
        return (
            <Auth>
                <AuthContext.Consumer>
                    {() => {
                        return (
                            <>
                                <p
                                    ref={() => {
                                        navigate('/firmas');
                                    }}
                                >
                                    loading...
                                </p>
                            </>
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
                                handleAuth();
                                setAuthenticated(true);
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
