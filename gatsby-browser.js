import './src/css/style.css';
import 'animate.css/animate.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import SessionCheck from './src/auth/SessionCheck';
import { Auth } from './src/auth/Auth';

export const wrapRootElement = ({ element }) => {
    return (
        <SessionCheck>
            <Auth>{element}</Auth>
        </SessionCheck>
    );
};
