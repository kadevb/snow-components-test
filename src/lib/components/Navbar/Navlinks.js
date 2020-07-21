import React from 'react';
import {Link} from '../index';
import {
	MDBNavbarNav,
	MDBNavItem,
	MDBDropdownMenu,
	MDBDropdown,
	MDBDropdownToggle,
    MDBDropdownItem,
    MDBIcon
} from 'mdbreact';
import {some} from 'lodash';
import Authorization from '../Authorization/Authorization';


const links = [
   
];

export default () => (
	<MDBNavbarNav right>
		{links.map(({ label = null, to = '?', roles = [], items = [], icon = null}, index) => {
			if (items.length === 0) {
				return (
					<Authorization key={index} roles={roles}>
						<MDBNavItem>
							<Link
								to={to}
								className='waves-effect waves-light'
							>
                                {icon ? <MDBIcon icon={icon} /> : null}
								{label}
							</Link>
						</MDBNavItem>
					</Authorization>
				);
			}

			const dropdownRoles = some(items, ({roles = []}) => roles.length === 0) ? [] : items
				.reduce((allRoles, { roles = [] }) => allRoles.concat(roles), roles)
                .filter((role, index, self) => self.indexOf(role) === index);
                
			return (
				<Authorization key={index} roles={dropdownRoles}>
					<MDBNavItem>
						<MDBDropdown>
							<MDBDropdownToggle nav caret>
								<span className='mr-2'>
                                    {icon ? <MDBIcon fab icon={icon} /> : null}
                                    {label}
                                </span>
							</MDBDropdownToggle>
							<MDBDropdownMenu>
								{items.map(({ label, to, roles = [] }, index) => (
									<Authorization key={index} roles={roles}>
										<MDBDropdownItem>
											<Link to={to}>{label}</Link>
										</MDBDropdownItem>
									</Authorization>
								))}
							</MDBDropdownMenu>
						</MDBDropdown>
					</MDBNavItem>
				</Authorization>
			);
		})}
	</MDBNavbarNav>
);
