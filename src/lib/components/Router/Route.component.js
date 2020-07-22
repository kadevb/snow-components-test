import React from 'react';
import qs from 'query-string';
import history from 'history/browser';
import { RouterContext } from './RouterContext';
import { withAuth } from '../index';

const Route = props => {
    const {path, component = null} = props;
    const Component = component;

    return (
        <RouterContext.Consumer>
            {({ state, dispatch }) => {
                const { routes = {} } = state;
                const { show = false } = routes[path] || {};
                const { location } = history;

                const params = qs.parse(location.search);

                !routes[path] && dispatch({type: 'add_route', payload: {path, component}});

                if(!show) {
                    return null;
                }

                const routeProps = Object.assign({}, props, { match: { params } });
                
                return <Component {...routeProps} />;
            }}
        </RouterContext.Consumer>
    );
}

export default ({roles = [], ...props}) => withAuth(roles)(Route, props);