import React, {useContext, Fragment} from 'react';
import {some} from 'lodash';
import {UserContext} from '../../contexts/UserContext/UserContext';

export default props => {
    const user = useContext(UserContext);
    const userRoles = user.roles || [];
    const { roles = [], children = undefined } = props;
    
    //component does not require permissions
    if(roles.length === 0) {
        return <Fragment>{children}</Fragment>;
    }

    return some(roles, role => userRoles.includes(role)) ? <Fragment>{children}</Fragment> : null;
};
