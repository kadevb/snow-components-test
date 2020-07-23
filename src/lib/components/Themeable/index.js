import React, { useContext, Fragment } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { withAuth } from '../index';

const _Themeable = ({variant, bg, ...props}) => {
    const {state} = useContext(UserContext);

    if(!state) {
        return (
            <Fragment>
                { null }
            </Fragment>
        )
    }
console.log(state);
    return (
        <Fragment>
            { null }
        </Fragment>
    )
};

export const Themeable = ({ roles = [], ...props }) => withAuth(roles)(_Themeable, props);

export const withTheme = (component = null, props) => {
    const Component = component || Fragment;

    return (
        <Themeable {...props}>
            <Component {...props} />
        </Themeable>
    );
};