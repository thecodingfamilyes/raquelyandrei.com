import React, { Component, createContext } from 'react';
import {
    login,
    logout,
    handleAuthentication,
    isAuthenticated,
    silentAuth,
    user,
} from './auth0';

const AuthContext = createContext({
    isLoggedIn: isAuthenticated(),
    currentUser: null,
    currentUserData: null,
    login,
    logout: () => {},
    handleAuth: () => {
        handleAuthentication();
    },
});

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: isAuthenticated(),
            currentUser: null,
            currentUserData: null,
            login,
            logout: () => {
                this.setState({
                    isLoggedIn: false,
                    currentUser: null,
                    currentUserData: {},
                });

                logout();
            },
            handleAuth: () => {
                this.handleAuth();
            },
        };
    }

    componentDidMount() {
        user.subscribe({
            next: userData => {
                this.setUser(userData);
            },
        });

        silentAuth(() => {});
    }

    setUser(data) {
        this.setState({
            currentUserData: data,
            currentUser: data.name,
            isLoggedIn: true,
        });
    }

    handleAuth() {
        handleAuthentication();
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export { Auth, AuthContext };
