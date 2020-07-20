import React from 'react';
import {Authorization} from '../index';
import Loader from './Loader.component';

export default props => {
    const { roles = [] } = props;

    return (
        <Authorization roles={roles}>
            <Loader {...props} />
        </Authorization>
    );
}