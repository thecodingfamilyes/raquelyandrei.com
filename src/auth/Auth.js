import React, { Component, createContext } from 'react';
import {
    login,
    handleAuthentication,
    getProfile,
    isAuthenticated,
} from './auth0';

const AuthContext = createContext({
    isLoggedIn: isAuthenticated(),
    currentUser: null,
    currentUserData: getProfile(),
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
            currentUserData: getProfile(),
            login,
            logout: () => {
                this.setState({
                    isLoggedIn: false,
                    currentUser: null,
                    currentUserData: {},
                });

                localStorage.setItem('isLoggedIn', false);
            },
            handleAuth: () => {
                this.handleAuth();
            },
        };
    }

    handleAuth() {
        const user = handleAuthentication();

        console.log('user', user);

        this.setState({
            currentUserData: getProfile(),
            isLoggedIn: true,
        });
    }

    componentWillUpdate(newState) {
        console.log(newState);
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
