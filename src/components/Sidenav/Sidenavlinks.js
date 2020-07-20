import React from 'react';
import { some } from 'lodash';
import { MDBNavItem, MDBNavLink } from 'mdbreact';
import SidenavDropdown from './SidenavDropdown';
import Authorization from '../Authorization/Authorization';

export default ({ query, links }) => (
	<div>
		{links
			.filter(
				({ label, items = [] }) =>
					label.toLowerCase().includes(query.toLowerCase()) ||
					some(items, ({ label }) =>
						label.toLowerCase().includes(query.toLowerCase())
					)
			)
			.map(({ label, to = '/', roles = [], items = [] }, index) => {
				if (items.length === 0) {
					return (
						<Authorization key={index} roles={roles}>
							<MDBNavItem>
								<MDBNavLink
									to={to}
									className='waves-effect waves-light'
								>
									{label}
								</MDBNavLink>
							</MDBNavItem>
						</Authorization>
					);
				}

				const dropdownRoles = some(
					items,
					({ roles = [] }) => roles.length === 0
				)
					? []
					: items
							.reduce(
								(allRoles, { roles = [] }) =>
									allRoles.concat(roles),
								roles
							)
							.filter(
								(role, index, self) =>
									self.indexOf(role) === index
							);

				return (
					<Authorization key={index} roles={dropdownRoles}>
						<MDBNavItem>
                            <div className='nav-link Ripple-parent waves-effect waves-light active'>
                                <SidenavDropdown label={label} items={items} />
                            </div>
						</MDBNavItem>
					</Authorization>
				);
			})}
	</div>
);