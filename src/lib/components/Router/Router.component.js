import React, {useReducer, useEffect} from 'react';
import {routerReducer, NowRouterContext} from '../../contexts/NowRouterContext/NowRouterContext';

const initialState = {
    url: window.location.href,
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

    const { url = '' } = state;

    useEffect(() => {
        dispatch({type: 'location_change'});
    }, [url]);

    return (
        <NowRouterContext.Provider value={{state, dispatch}}>
            {children}
        </NowRouterContext.Provider>
    );
};