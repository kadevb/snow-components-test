import React from 'react';
import { MDBBtn } from 'mdbreact';
import { NowRouterContext } from '../../contexts/NowRouterContext/NowRouterContext';

export default ({ to, ...props }) => (
	<NowRouterContext.Consumer>
		{({ dispatch }) => (
			<MDBBtn {...props} onClick={() => dispatch({ type: 'go', payload: to })} />
		)}
	</NowRouterContext.Consumer>
);
