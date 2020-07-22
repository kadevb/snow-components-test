import React, { useState } from 'react';
import {Collapse} from 'react-bootstrap';
import {Authorization, Link} from '../index';

export default ({ label, items, query = ''}) => {
    const [isOpen, setOpen] = useState(false);
    
	return (
		<div>
			<p onClick={() => setOpen(!isOpen)}>
                {label}
                <span className={`fa fa-${isOpen ? 'chevron-up' : 'chevron-down'}`} style={{marginLeft: '5px'}}/>
            </p>
			<Collapse in={isOpen}>
				<div>
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
				</div>
			</Collapse>
		</div>
	);
};
