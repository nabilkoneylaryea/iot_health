import React from 'react'
import Header from './Header';
import PatientInfo from './PatientInfo';
import { Container } from '@mui/material';

const DoctorPage = () => {
    const path = window.location.pathname.split('/');
    const id = path[path.length]
    return (
        <div>
           <Header />
            <Container>
                <PatientInfo />
            </Container> 
        </div>
    )
}

export default DoctorPage;
