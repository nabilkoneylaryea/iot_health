import React from 'react'
import Header from './Header';
import PatientInfo from './PatientInfo';
import { Container } from '@mui/material';

const DoctorPage = () => {
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1]
    return (
        <div>
           <Header />
            <Container>
                <PatientInfo doctorID={id}/>
            </Container> 
        </div>
    )
}

export default DoctorPage;
