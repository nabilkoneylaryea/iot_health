import React from 'react'
import Header from './Header';
import { Container } from '@mui/material';
import HealthInfo from './HealthInfo';

const PatientPage = () => {
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    return (
        <div>
            <Header />
            <Container>
                <HealthInfo patientID={id}/>
            </Container>
        </div>
    )
}

export default PatientPage;