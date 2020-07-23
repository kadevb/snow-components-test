import React from 'react';
import {Button} from 'react-bootstrap';
import {withAuth, withTheme} from '../index';

const _Btn = props => {
    return <Button {...props} />;
};

const Btn = props => withTheme(_Btn, props);

export default ({ roles = [], ...props }) => withAuth(roles)(Btn, props);