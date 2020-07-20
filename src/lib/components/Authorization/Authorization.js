import {useContext} from 'react';
import {some} from 'lodash';
import {UserContext} from '../../contexts/UserContext/UserContext';

export default props => {
    const user = useContext(UserContext);
    const userRoles = user.roles || [];
    const { roles = [], children = undefined } = props;
    
    //component does not require permissions
    if(roles.length === 0) {
        return children;
    }

    return some(roles, role => userRoles.includes(role)) ? children : null;
};
