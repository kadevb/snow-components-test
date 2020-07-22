import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';
import Sidenavlinks from './Sidenavlinks.component';

export default props => {
	const [query, setQuery] = useState('');

	return (
		<Nav
			className='flex-column'
			style={{ borderRight: '1px solid black', height: '90vh' }}
		>
			<div className='input-group'>
				<div
					className='input-group'
					style={{ minWidth: '100%' }}
				>
					<input
						className='form-control'
						type='text'
						placeholder='Filter navigator'
						aria-label='Filter navigator'
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
			</div>
            <Sidenavlinks {...props} query={query} />
		</Nav>
	);
};
