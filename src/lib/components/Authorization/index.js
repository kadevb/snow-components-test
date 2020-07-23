import React from 'react';
import _Authorization from './Authorization.component';

export const Authorization = _Authorization;

export const withAuth = (roles = []) => {
    if(roles.length === 0) {
        return (Component = null, props = {}) => <Component {...props} />
    }

    return (Component = null, props = {}) => (
        <_Authorization roles={roles}>
            <Component {...props} />
        </_Authorization>
    );
}