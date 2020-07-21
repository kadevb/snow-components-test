import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Navbar, Sidenav, Authorization, NowApp, Router, Route} from './lib/index';

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
	<NowApp>
		<Router basename='x_472589_snow_comp_react_components_test.do'>
			<Navbar />
			<Container fluid>
			<Row>
				<Col lg='3' xs='0'>
					<Sidenav links={sideNavLinks} />
				</Col>
				<Col lg='9'>
					<Route path='/' component={Home} />
					<Route path='?id=table' component={Table} />
					<Authorization roles={['admin']}>
						<Route path='?id=portals' component={Portals} />
					</Authorization>
				</Col>
			</Row>
			</Container>
		</Router>
	</NowApp>
);;
