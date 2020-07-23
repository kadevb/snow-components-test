import React, { useState } from 'react';
import _Navbar from 'react-bootstrap/Navbar';
import {NavbarBrand, Nav, NavItem, Form} from 'react-bootstrap';
import {Link, withAuth} from '../index';
import {
    UserContext
} from '../../index';

const Navbar = props => {
	const [isOpen, setOpen] = useState(false);

	return (
		<UserContext.Consumer>
            {(({state, dispatch}) => {
                const { theme = {}, displayName = '' } = state;
                const { variant = 'dark', bg = 'dark', name} = theme;

                return (
                    <_Navbar variant={variant} bg={bg} {...props} >
                        <NavbarBrand>
                            <strong>Nav</strong>
                        </NavbarBrand>
                        <_Navbar.Toggle onClick={() => setOpen(!isOpen)} />
                        <_Navbar.Collapse isOpen={isOpen}>
                            <Nav style={{float: 'right'}}>
                                <NavItem>
                                    <Link
                                        to='/'
                                    >
                                        {displayName}
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Form>
                                        <Form.Switch type='switch' onClick={() => {
                                            dispatch({type: 'set_theme', payload: name === 'dark' ? 'light' : 'dark'})
                                        }} />
                                    </Form>
                                </NavItem>
                            </Nav>
                        </_Navbar.Collapse>
                    </_Navbar>
                );
            })}
        </UserContext.Consumer>
	);
};

export default ({ roles = [], ...props }) => withAuth(roles)(Navbar, props);