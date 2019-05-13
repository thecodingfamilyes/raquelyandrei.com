import auth0 from 'auth0-js';
import { ReplaySubject } from 'rxjs';
import { navigate } from 'gatsby';

const isBrowser = typeof window !== 'undefined';
const auth = isBrowser
    ? new auth0.WebAuth({
        domain: process.env.GATSBY_AUTH0_DOMAIN,
        clientID: process.env.GATSBY_AUTH0_CLIENTID,
        redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
        responseType: 'token id_token',
        scope: 'openid profile email',
    })
    : {};

const tokens = {
    accessToken: false,
    idToken: false,
    expiresAt: false,
};

let user = new ReplaySubject(1);

export const isAuthenticated = () => {
    if (!isBrowser) {
        return;
    }

    return localStorage.getItem('isLoggedIn') === 'true';
};

export const login = () => {
    if (!isBrowser) {
        return;
    }

    auth.authorize();
};

export const logout = () => {
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('userData', null);

    auth.logout();
    user.next({});
};

const setSession = (cb = () => {}) => (err, authResult) => {
    if (err) {
        navigate('/firmas');
        cb();
        return;
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        tokens.accessToken = authResult.accessToken;
        tokens.idToken = authResult.idToken;
        tokens.expiresAt = expiresAt;

        user.next(Object.assign({}, authResult.idTokenPayload));

        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userData', authResult);

        //navigate('/firmas');
        cb();
    }
};

export const handleAuthentication = () => {
    if (!isBrowser) {
        return;
    }

    auth.parseHash(setSession());
};

export const silentAuth = callback => {
    if (!isAuthenticated()) return callback();
    auth.checkSession({}, setSession(callback));
};

export const getProfile = () => {
    return user;
};

export { user };
