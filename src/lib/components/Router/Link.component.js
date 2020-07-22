import React from 'react';
import NavLink from 'react-bootstrap/NavLink';
import { RouterContext } from './RouterContext';
import { withAuth } from '../index';

const Link = ({ to, children, ...props }) => (
	<RouterContext.Consumer>
		{({ dispatch }) => (
			<NavLink {...props} onClick={e => {
				e.preventDefault();

				dispatch({ type: 'go', payload: to })
			}}>
				{children}
			</NavLink>
		)}
	</RouterContext.Consumer>
);

export default ({ roles = [], ...props }) => withAuth(roles)(Link, props);