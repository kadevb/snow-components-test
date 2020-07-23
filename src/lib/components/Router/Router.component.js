import React, {useState, useEffect} from 'react';
import {RouterContext} from './RouterContext';
import browserHistory from 'history/browser';
import { withAuth } from '../index';

const Router = ({basename = '', children = null, history = browserHistory}) => {
    const [location, setLocation] = useState(history.location);
    const [_isMounted, setMounted] = useState(false);
    const [_pendingLocation, setPendingLocation] = useState(null);

    const unlisten = history.listen(data => {
        if(_isMounted) {
            setLocation(_pendingLocation || data.location);
            setPendingLocation(null);
        } else {
            setPendingLocation(data.location);
        }
    });

    useEffect(() => {
        setMounted(true);

        return () => {
            unlisten();
            setMounted(false);
            setPendingLocation(null);
        }
    }, []);

    return (
        <RouterContext.Provider value={{history, location, basename}}>
            {children}
        </RouterContext.Provider>
    );
};

export default ({ roles = [], ...props }) => withAuth(roles)(Router, props);