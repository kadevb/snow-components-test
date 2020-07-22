import React, { useState, useContext } from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import {
    NavbarBrand,
    Nav,
    NavItem
} from '../index';
import {Link} from '../index';
import {UserContext} from '../../contexts/UserContext/UserContext';
import Navlinks from './Navlinks';

const BSNavbar = props => {
	const [isOpen, setOpen] = useState(false);
    const {displayName} = useContext(UserContext);
    
	return (
		<BootstrapNavbar {...props}>
			<NavbarBrand>
				<strong>Nav</strong>
			</NavbarBrand>
			<BootstrapNavbar.Toggle onClick={() => setOpen(!isOpen)} />
			<BootstrapNavbar.Collapse isOpen={isOpen}>
				<Navlinks />
                <Nav style={{float: 'right'}}>
                    <NavItem>
                        <Link
                            to='/'
                        >
                            {displayName}
                        </Link>
                    </NavItem>
                </Nav>
			</BootstrapNavbar.Collapse>
		</BootstrapNavbar>
	);
};

export default BSNavbar;