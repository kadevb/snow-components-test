import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Navbar, Sidenav, NowApp, Router, Route, Btn, Loader} from './lib/index';

import Home from './pages/Home';
import Table from './pages/Table';
import Portals from './pages/Portals';

const sideNavLinks = [
	{
		label: 'Home',
		to: '?'
	},
	{
		label: 'Portals',
		to: '?id=portals'
	},
	{
		label: 'Tables',
		items: [
			{
				label: 'Incidents',
				to: '?id=table&name=incident'
			},
			{
				label: 'Script Includes',
				roles: ['admin'],
				to: '?id=table&name=sys_script_include'
			}
		]
	}
];

export default () => (
	<div>
		<NowApp>
			<Router basename='x_472589_snow_comp_react_components_test.do'>
				<Navbar variant='dark' bg='primary' />
				<Container fluid>
				<Row>
					<Col lg='3' xs='0'>
						<Sidenav links={sideNavLinks} />
					</Col>
					<Col lg='9'>
						<Btn roles={['admin']}>I am admin button!</Btn>
						<Btn>I am public button!</Btn>
						<Route path='/' component={Home} />
						<Route path='?id=table' component={Table} />
						<Route path='?id=portals' roles={['admin']} component={Portals} />
					</Col>
				</Row>
				</Container>
			</Router>
		</NowApp>
		
						<Btn>I am public button!</Btn>
	</div>
);;
