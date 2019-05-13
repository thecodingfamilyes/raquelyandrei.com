import React, { Component } from 'react';
import { silentAuth } from './auth0';

class SessionCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    handleCheckSession() {
        this.setState({ loading: false });
    }

    componentDidMount() {
        silentAuth(this.handleCheckSession.bind(this));
    }

    render() {
        return this.state.loading === false && <>{this.props.children}</>;
    }
}

export default SessionCheck;
