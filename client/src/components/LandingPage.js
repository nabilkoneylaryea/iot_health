import {React, useEffect} from 'react';
import { Container, Grid } from '@mui/material';
import nameBasedAvatar from './Avatar';
// import Header from './Header';
import axios from 'axios';

const LandingPage = () => {
    let patients;
    let doctors;
    useEffect(() => {
        axios.get('/api/patients').then((response) => {patients = response}).catch((error) => {console.log(error)});
        axios.get('/api/doctors').then((response) => {doctors = response}).catch((error) => {console.log(error)});
    });

    const users = [...patients,...doctors];
    const usersNames = users.map((user) => {
        return user.name;
    });
    console.log(usersNames);

    const userAvatars = usersNames.map((name) => {
        <Grid item>
            <nameBasedAvatar name={name}/>
        </Grid>
    });

    return (
        <>
            {/* <Header /> */}
            <Container>
                <Grid container columns={4} spacing={3}>
                    {userAvatars}
                </Grid>
            </Container>
        </>
    )
}

export default LandingPage
