import React from 'react';
import {some} from 'lodash';
import glideUser from '../../glideUser';

export default props => {
    const userRoles = glideUser.roles || [];
    const { roles = [], children = undefined } = props; 

    //component does not require permissions
    if(roles.length === 0) {
        return <div>{children}</div>;
    }

    return some(roles, role => userRoles.includes(role)) ? <div>{children}</div> : null;
};