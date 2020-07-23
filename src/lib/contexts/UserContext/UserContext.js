import {createContext} from 'react';

export const UserContext = createContext();

export const defaultThemes = {
    light: {
        variant: 'dark',
        bg: 'primary',
        name: 'light'
    },
    dark: {
        variant: 'dark',
        bg: 'dark',
        name: 'dark'
    }
};

export const userReducer = (state, {type, payload}) => {
    const { assign } = Object;

    switch(type) {
        case 'set_theme':
            const { themes = defaultThemes } = state;

            return assign({}, state, { theme: themes[payload] || themes.dark });
        default:
            return assign({}, state);
    }
};