import {createContext} from 'react';
import {mapValues} from 'lodash';
import qs from 'query-string';
import history from 'history/browser';

export const RouterContext = createContext();

export const routerReducer = (state, {type, payload}) => {
    const { assign } = Object;
    const { basename = '/' } = state;
    
    const {routes = {}} = state;

    switch(type) {
        case 'go':
            const newUrl = `${basename}${payload}`;
            
            history.push(newUrl);

            return assign({}, state);
        case 'add_route':
            const {path, component, show = false} = payload;

            const route = {};
            route[path] = { path, component, show };

            return assign({}, state, { routes: assign({}, routes, route) });
        case 'location_change':
            const params = qs.parse(qs.extract(history.location.search));
            const currentPage = params.id || null;

            const newRoutes = {};
            newRoutes.routes = mapValues(routes, route => {
                const { id = null } = qs.parse(qs.extract(route.path || ''));
                const show = currentPage === id;

                return assign({}, route, {show});
            });

            return assign({}, state, newRoutes);
        default:
            return assign({}, state);
    }
};