import React, {useReducer, Fragment} from 'react';
import {cloneDeep} from 'lodash';
import axios from 'axios';
import {UserContext, userReducer} from '../../contexts/UserContext/UserContext';
import {withAuth} from '../index';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';

const { glideUser = {} } = window;
const { displayName = 'Guest', roles = [], token = '', email = '', locale = 'en', theme = 'light' } = glideUser;

const initialState = cloneDeep({
    theme,
    locale,
    displayName,
    roles,
    token,
    email
});

export default ({ children = null, roles = [] }) => {
    const [state] = useReducer(userReducer, initialState);

    axios.defaults.headers['X-userToken'] = state.token || '';

    return (
        <UserContext.Provider value={state}>
            {withAuth(roles)(() => <Fragment>{children}</Fragment>)}
        </UserContext.Provider>
    );
};