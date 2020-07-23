import React, {useState, useEffect, Fragment} from 'react';
import {flatten} from 'lodash';
import {Loader, httpRequest, Col} from '../lib/index';
import PortalCard from '../components/PortalCard/PortalCard';

export default props => {
    const [isLoading, setLoading] = useState(true);
    const [portals, setPortals] = useState([]);

    useEffect(() => {
        setLoading(true);

        httpRequest.get('/api/now/table/sp_portal?sysparm_display_value=true')
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
        <Fragment>
            <h1>Portals</h1>
            {portals.map(({logo, url_suffix, title}, index) => (
                <Col xs='12' sm='6' md='3' key={index}>
                    <PortalCard logo={logo} url_suffix={url_suffix} title={title} />
                </Col>
            ))}
        </Fragment>
    );
};