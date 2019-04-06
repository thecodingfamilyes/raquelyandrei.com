import netlifyIdentity from 'netlify-identity-widget';
import React, { Component, createContext } from 'react';
import once from 'lodash.once';

const AuthContext = createContext({
    isLoggedIn: false,
    currentUser: null,
    login: () => {},
});

class Auth extends Component {
    constructor(props) {
        super(props);

        this.identity = null;

        this.state = {
            isLoggedIn: false,
            currentUser: null,
            login: () => {
                this.login();
            },
            logout: () => {
                this.logout();
            },
        };

        this.initIdentity = once(() => {
            this.identity.init();
        });
    }

    componentDidMount() {
        if (!this.identity) {
            this.identity = netlifyIdentity;
        }

        this.identity.on('init', user => this.setUser(user));
        this.identity.on('login', user => this.setUser(user));
        this.identity.on('logout', () => this.setLoggedOut());

        this.initIdentity();
    }

    componentWillUnmount() {
        this.identity = null;
    }

    setUser(user = null) {
        if (user && user.email) {
            this.setState({
                currentUser: user.user_metadata.full_name,
                isLoggedIn: true,
            });

            return user.user_metadata.full_name;
        }

        this.setState({
            currentUser: null,
            isLoggedIn: false,
        });

        return null;
    }

    setLoggedOut() {
        this.setState({
            currentUser: null,
            isLoggedIn: false,
        });
    }

    login() {
        this.identity.open();
    }

    logout() {
        this.identity.logout();
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
