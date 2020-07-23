import React, {useReducer, Fragment} from 'react';
import {cloneDeep} from 'lodash';
import axios from 'axios';
import {UserContext, userReducer, defaultThemes} from '../../contexts/UserContext/UserContext';
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
    email,
});

export default ({ children = null, roles = [], themes = defaultThemes }) => {
    const [state, dispatch] = useReducer(
        userReducer, 
        Object.assign(
            {}, 
            initialState, 
            { themes, theme: themes[initialState.theme] }
        )
    );

    axios.defaults.headers['X-userToken'] = state.token || '';

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {withAuth(roles)(() => <Fragment>{children}</Fragment>)}
        </UserContext.Provider>
    );
};