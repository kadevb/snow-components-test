import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Navbar from './components/Navbar/Navbar';
import Sidenav from './components/Sidenav/Sidenav';
import Authorization from './components/Authorization/Authorization';

import Home from './pages/Home';
import Table from './pages/Table';
import Portals from './pages/Portals';

const sideNavLinks = [
	{
		label: 'Home',
		to: '/'
	},
	{
		label: 'Portals',
		to: '/portals'
	},
	{
		label: 'Tables',
		items: [
			{
				label: 'Incidents',
				to: '/table/incident'
			},
			{
				label: 'Script Includes',
				roles: ['admin'],
				to: '/table/sys_script_include'
			}
		]
	}
];

export default () => (
  <Router basename='x_472589_snow_comp_react_components_test.do'>
    <Navbar />
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol lg='3'>
          <Sidenav links={sideNavLinks} />
        </MDBCol>
        <MDBCol lg='9'>
          <Route exact path='/' component={Home} />
          <Route path='/table/:name' component={Table} />
          <Authorization roles={['admin']}>
            <Route path='/portals' component={Portals} />
          </Authorization>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Router>
);;
