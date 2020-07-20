import React, { useState, useContext } from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
	MDBNavbarBrand,
	MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink
} from 'mdbreact';
import {UserContext} from '../../contexts/UserContext/UserContext';
import Navlinks from './Navlinks';

export default () => {
	const [isOpen, setOpen] = useState(false);
    const {displayName} = useContext(UserContext);

	return (
		<MDBNavbar color='primary-color' dark expand='md'>
			<MDBNavbarBrand>
				<strong className='white-text'>Nav</strong>
			</MDBNavbarBrand>
			<MDBNavbarToggler onClick={() => setOpen(!isOpen)} />
			<MDBCollapse isOpen={isOpen} navbar>
				<Navlinks />
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink
                            to='/'
                            className='waves-effect waves-light'
                        >
                            {displayName}
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	);
};
