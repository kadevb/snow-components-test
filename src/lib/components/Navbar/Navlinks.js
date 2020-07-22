import React from 'react';
import {Link} from '../index';	
import {
	Nav,
	NavDropdown,
	NavItem
} from 'react-bootstrap';
import {some} from 'lodash';
import {Authorization} from '../index';


const links = [
   
];

export default () => (
	<Nav right>
		{links.map(({ label = null, to = '?', roles = [], items = []}, index) => {
			if (items.length === 0) {
				return (
					<Authorization key={index} roles={roles}>
						<NavItem>
							<Link
								to={to}
								className='waves-effect waves-light'
							>
								{label}
							</Link>
						</NavItem>
					</Authorization>
				);
			}

			const dropdownRoles = some(items, ({roles = []}) => roles.length === 0) ? [] : items
				.reduce((allRoles, { roles = [] }) => allRoles.concat(roles), roles)
                .filter((role, index, self) => self.indexOf(role) === index);
                
			return (
				<Authorization key={index} roles={dropdownRoles}>
					<NavItem>
						<NavDropdown>
							{items.map(({ label, to, roles = [] }, index) => (
								<Authorization key={index} roles={roles}>
									<NavDropdown.Item>
										<Link to={to}>{label}</Link>
									</NavDropdown.Item>
								</Authorization>
							))}
						</NavDropdown>
					</NavItem>
				</Authorization>
			);
		})}
	</Nav>
);
