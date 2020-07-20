import React, { useState } from 'react';
import { MDBNav } from 'mdbreact';
import Sidenavlinks from './Sidenavlinks.component';

export default props => {
	const [query, setQuery] = useState('');

	return (
		<MDBNav
			className='flex-column'
			style={{ borderRight: '1px solid black', height: '90vh' }}
		>
			<div className='input-group md-form form-sm form-1 pl-0'>
				<div
					className='input-group-append'
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
		</MDBNav>
	);
};
