import React, {useReducer, useEffect} from 'react';
import {routerReducer, NowRouterContext} from '../../contexts/NowRouterContext/NowRouterContext';
import history from 'history/browser';

const initialState = {
    routes: {}
};

export default ({basename, ...props}) => {
    const {children = null} = props;
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
        <NowRouterContext.Provider value={{state, dispatch}}>
            {children}
        </NowRouterContext.Provider>
    );
};