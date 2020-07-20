import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, MDBIcon } from 'mdbreact';
import Authorization from '../Authorization/Authorization';

export default ({ label, items, query = ''}) => {
    const [isOpen, setOpen] = useState(false);
    
	return (
		<div>
			<p onClick={() => setOpen(!isOpen)}>
                {label}
                <MDBIcon icon={isOpen ? 'chevron-up' : 'chevron-down'} style={{marginLeft: '5px'}}/>
            </p>
			<Collapse isOpen={isOpen}>
				{items
					.filter(({ label }) =>
						label.toLowerCase().includes(query.toLowerCase())
					)
					.map(({ label, to, roles }, index) => (
						<Authorization key={index} roles={roles}>
							<Link to={to} style={{ marginLeft: '1em' }}>
								{label}
							</Link>
						</Authorization>
					))}
			</Collapse>
		</div>
	);
};
