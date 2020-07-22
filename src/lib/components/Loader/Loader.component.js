import React, {Fragment} from 'react';
import {Spinner} from 'react-bootstrap';

export default props => {
	const { animation = 'grow', variant = 'primary', role = 'status' } = props;

	return (
		<Fragment>
			<Spinner {...props} variant={variant} animation={animation} role={role} />
		</Fragment>
	);
}
