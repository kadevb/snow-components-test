import React, { createElement } from 'react';
import { RouterContext } from './RouterContext';
import { withAuth, matchPath } from '../index';

const Route = ({component = null, page = '', path = `?id=${page}`, render = null, ...props}) => (
    <RouterContext.Consumer>
        {context => {
            let { location = context.location } = props;

            const match = matchPath(path, location);

            const routeProps = { 
                ...context,
                ...props,
                match,
                location
            };

            return (
                <RouterContext.Provider value={routeProps}>
                    {
                        routeProps.match 
                            ? component
                                ? createElement(component, routeProps)
                                : render
                                    ? render(routeProps)
                                    : null
                                : null
                    }
                </RouterContext.Provider>
            );
        }}
    </RouterContext.Consumer>
);

export default ({roles = [], ...props}) => withAuth(roles)(Route, props);