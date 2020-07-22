import React, {useReducer, useEffect} from 'react';
import {routerReducer, RouterContext} from './RouterContext';
import history from 'history/browser';
import { withAuth } from '../index';

const initialState = {
    routes: {}
};

const Router = ({basename, children}) => {
    const [state, dispatch] = useReducer(
        routerReducer, 
        Object.assign(
            {}, 
            initialState, 
            { basename }
        )
    );

    useEffect(() => {
        dispatch({type: 'location_change'});

        history.listen(() => {
            dispatch({type: 'location_change'});
        });
    }, []);

    return (
        <RouterContext.Provider value={{state, dispatch}}>
            {children}
        </RouterContext.Provider>
    );
};

export default ({ roles = [], ...props }) => withAuth(roles)(Router, props);