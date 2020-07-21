import React, {useReducer} from 'react';
import {cloneDeep} from 'lodash';
import axios from 'axios';
import {UserContext, userReducer} from '../../contexts/UserContext/UserContext';
import {Authorization} from '../index';

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

export default props => {
    const [state] = useReducer(userReducer, initialState);
    const {children = null, roles = []} = props;

    axios.defaults.headers['X-userToken'] = state.token || '';

    return (
        <UserContext.Provider value={state}>
            <Authorization roles={roles}>
                {children}
            </Authorization>
        </UserContext.Provider>
    );
};