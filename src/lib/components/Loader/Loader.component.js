import React, {Fragment} from 'react';
import {Spinner} from 'react-bootstrap';
import {withAuth} from '../index';

const Loader = props => {
	const { animation = 'grow', variant = 'primary', role = 'status' } = props;

	return (
		<Fragment>
			<Spinner {...props} variant={variant} animation={animation} role={role} />
		</Fragment>
	);
}

export default ({ roles = [], ...props }) => withAuth(roles)(Loader, props);