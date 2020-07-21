import React, { useState, useContext } from 'react';
import BSNavbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import {
    NavbarBrand,
    Nav,
    NavItem
} from 'react-bootstrap';
import {Link} from '../index';
import {UserContext} from '../../contexts/UserContext/UserContext';
import Navlinks from './Navlinks';

export default () => {
	const [isOpen, setOpen] = useState(false);
    const {displayName} = useContext(UserContext);

	return (
		<BSNavbar color='primary-color' dark expand='md'>
			<NavbarBrand>
				<strong className='white-text'>Nav</strong>
			</NavbarBrand>
			<NavbarToggle onClick={() => setOpen(!isOpen)} />
			<NavbarCollapse isOpen={isOpen} navbar>
				<Navlinks />
                <Nav right>
                    <NavItem>
                        <Link
                            to='/'
                            className='waves-effect waves-light'
                        >
                            {displayName}
                        </Link>
                    </NavItem>
                </Nav>
			</NavbarCollapse>
		</BSNavbar>
	);
};
