import React, {useState, useEffect} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';
import {flatten} from 'lodash';
import axios from 'axios';
import {Loader} from '../lib/index';
import PortalCard from '../components/PortalCard/PortalCard';

export default () => {
    const [isLoading, setLoading] = useState(true);
    const [portals, setPortals] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios.get('/api/now/table/sp_portal?sysparm_display_value=true')
            .then(res => res.data.result)
            .then(flatten)
            .then(setPortals)
            .catch(() => setPortals([]))
            .finally(() => setLoading(false))
    }, []);

    if(isLoading) {
        return <Loader />;
    }

    return (
        <MDBContainer>
            <MDBRow>
                {portals.map(({logo, url_suffix, title}, index) => (
                    <MDBCol xs='12' sm='6' md='3' key={index}>
                        <PortalCard logo={logo} url_suffix={url_suffix} title={title} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
};