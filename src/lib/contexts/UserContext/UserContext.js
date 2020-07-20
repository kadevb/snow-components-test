import {createContext} from 'react';

export const UserContext = createContext();

export const userReducer = (state, {type, payload}) => {
    const { assign } = Object;

    switch(type) {
        case 'set_theme': 
            return assign({}, state, { theme: payload });
        default:
            return assign({}, state);
    }
};