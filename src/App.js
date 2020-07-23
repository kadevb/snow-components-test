import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Sidenav, NowApp, Router, Route, Btn} from './lib/index';
import {Navbar} from './lib/components/Navbar/index';
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
				to: '?id=list&table=incident'
			},
			{
				label: 'Script Includes',
				roles: ['admin'],
				to: '?id=list&table=sys_script_include'
			}
		]
	}
];

export default () => (
	<NowApp themes={{
		light: {
			variant: 'light',
			bg: 'success',
			name: 'light'
		},
		dark: {
			variant: 'dark',
			bg: 'warning',
			name: 'dark'
		}
	}}>
		<Router basename='x_472589_snow_comp_react_components_test.do' >
			<Navbar />
			<Container fluid>
			<Row>
				<Col lg='3' xs='0'>
					<Sidenav links={sideNavLinks} />
				</Col>
				<Col lg='9'>
					<Btn roles={['admin']}>I am admin button!</Btn>
					<Btn>I am public button!</Btn>
					<Route path='/' component={Home} />
					<Route page='list' component={Table} />
					<Route path='?id=portals' component={Portals} />
				</Col>
			</Row>
			</Container>
		</Router>
	</NowApp>
);;
