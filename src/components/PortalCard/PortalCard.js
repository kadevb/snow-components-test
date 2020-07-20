import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBBtn
} from 'mdbreact';

export default ({logo, title, url_suffix}) => (
    <MDBCard style={{maxWidth: '22rem'}}>
        {logo ? <MDBCardImage className='img-fluid' src={`/${logo}`} alt='Portal Logo' /> : null}
        <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBBtn onClick={() => window.open(`/${url_suffix}`, '_blank')}>Visit</MDBBtn>
        </MDBCardBody>
    </MDBCard>
);