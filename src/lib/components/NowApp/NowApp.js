import React, {useReducer} from 'react';
import {cloneDeep} from 'lodash';
import {UserContext, userReducer} from '../../contexts/UserContext/UserContext';
import {Authorization} from '../../components/index';

const { glideUser = {} } = window;
const { displayName = 'Guest', roles = [], token = '', email = '', locale = 'en', theme = 'light' } = glideUser;

const initialState = cloneDeep({
    theme,
    locale,
    user: {
        displayName,
        roles,
        token,
        email,
    }
});

export default props => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const {children = null, roles = []} = props;

    return (
        <UserContext.Provider {...props} value={state}>
            <Authorization {...props} roles={roles}>
                {children}
            </Authorization>
        </UserContext.Provider>
    );
};