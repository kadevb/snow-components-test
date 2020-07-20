import React from 'react';
import Sidenav from './Sidenav.component';
import {Authorization} from '../index';

export default props => {
    const { roles = [] } = props;

    return (
        <Authorization roles={roles}>
            <Sidenav {...props} />
        </Authorization>
    );
};