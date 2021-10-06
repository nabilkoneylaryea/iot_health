import {React, useEffect, useState} from 'react';
import { Container, Grid, Stack, Typography, Link} from '@mui/material';
import NameBasedAvatar from './NameBasedAvatar';
import Header from './Header';
import axios from 'axios';
import { Router } from 'react-router-dom';

const LandingPage = () => {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/patients')
            .then((response) => {setPatients(response.data)})
            .catch((error) => {console.log(error)});
        axios.get('http://localhost:5000/api/doctors')
            .then((response) => {setDoctors(response.data)})
            .catch((error) => {console.log(error)});
    });

    const users = [...patients,...doctors];
    // console.log(users);
    const usersNames = users.map((user) => {
        return user.name;
    });
    // console.log(usersNames);

    const userAvatars = users.map((user) => {
        let link = user.patientIDs ? "/doctors" : "/patients";
        // console.log(link);
        link += `/${user._id}`;
        // console.log(link);
        return (
            <Grid item>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Link href={link} underline="none">
                        <NameBasedAvatar name={user.name}/>
                    </Link>
                    <Typography>
                        {user.name}
                    </Typography>
                </Stack>
            </Grid>
        );
    });
    // console.log(userAvatars);

    return (
        <>
            <Header />
            <Container>
                <Grid
                    container
                    direction="row"
                    rowSpacing={{ xs: 1}}
                    columnSpacing={{ xs: 5}}
                    justifyContent="center"
                    alignItems="center"
                    sx={{minHeight: '50vh'}}
                >
                    {userAvatars}
                </Grid>
            </Container>
        </>
    )
}

export default LandingPage
