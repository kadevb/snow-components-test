import React from 'react';
import { NowRouterContext } from '../../contexts/NowRouterContext/NowRouterContext';

export default ({ to, children, ...props }) => (
	<NowRouterContext.Consumer>
		{({ dispatch }) => (
			<a {...props} onClick={e => {
				e.preventDefault();

				dispatch({ type: 'go', payload: to })
			}}>
				{children}
			</a>
		)}
	</NowRouterContext.Consumer>
);
