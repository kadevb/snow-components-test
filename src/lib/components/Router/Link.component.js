import React from 'react';
import NavLink from 'react-bootstrap/NavLink';
import { NowRouterContext } from '../../contexts/NowRouterContext/NowRouterContext';

export default ({ to, children, ...props }) => (
	<NowRouterContext.Consumer>
		{({ dispatch }) => (
			<NavLink {...props} onClick={e => {
				e.preventDefault();

				dispatch({ type: 'go', payload: to })
			}}>
				{children}
			</NavLink>
		)}
	</NowRouterContext.Consumer>
);
