import {createContext} from 'react';
import {mapValues} from 'lodash';
import qs from 'query-string';
import history from 'history/browser';

export const NowRouterContext = createContext();

export const routerReducer = (state, {type, payload}) => {
    const { assign } = Object;
    const { basename = '/' } = state;
    
    const {routes = {}, url} = state;

    switch(type) {
        case 'go':
            const newUrl = `${basename}${payload}`;
            
            return assign({}, state, { url: newUrl });
        case 'add_route':
            const {path, component, show = false} = payload;

            const route = {};
            route[path] = { path, component, show };

            return assign({}, state, { routes: assign({}, routes, route) });
        case 'location_change':
            const params = qs.parse(qs.extract(url));
            const currentPage = params.id || null;

            const newRoutes = {};
            newRoutes.routes = mapValues(routes, route => {
                const { id = null } = qs.parse(qs.extract(route.path || ''));
                const show = currentPage === id;

                return assign({}, route, {show});
            });

            history.push(url);

            return assign({}, state, newRoutes);
        default:
            return assign({}, state);
    }
};