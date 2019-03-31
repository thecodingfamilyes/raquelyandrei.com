import netlifyIdentity from 'netlify-identity-widget';
import React, { Component, createContext } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    currentUser: null,
    login: () => {},
});

class Auth extends Component {
    constructor(props) {
        super(props);

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
    }

    componentDidMount() {
        netlifyIdentity.on('init', user => this.setUser(user));
        netlifyIdentity.on('login', user => this.setUser(user));
        netlifyIdentity.on('logout', () => this.setLoggedOut());

        netlifyIdentity.init();
    }

    setUser(user = null) {
        if (user && user.email) {
            this.setState({
                currentUser: user.user_metadata.full_name,
                isLoggedIn: true,
            });

            return this.state.currentUser;
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
        netlifyIdentity.open();
    }

    logout() {
        netlifyIdentity.logout();
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
