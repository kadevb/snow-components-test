import React, {useContext, Fragment} from 'react';
import {some} from 'lodash';
import {UserContext} from '../../contexts/UserContext/UserContext';

export default ({ roles = [], children = null }) => {
    const user = useContext(UserContext);

    if(!user) {
        return null;
    }
    
    const userRoles = user.roles || [];
    //component does not require permissions
    if(roles.length === 0) {
        return <Fragment>{children}</Fragment>;
    }

    return some(roles, role => userRoles.includes(role)) ? <Fragment>{children}</Fragment> : null;
};