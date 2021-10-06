import {React, useEffect, useState} from 'react';
import { Container, Grid, Stack, Typography} from '@mui/material';
import NameBasedAvatar from './NameBasedAvatar';
// import Header from './Header';
import axios from 'axios';

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
    console.log(users);
    const usersNames = users.map((user) => {
        return user.name;
    });
    console.log(usersNames);

    const userAvatars = usersNames.map((name) => {
        return (
            <Grid item>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <NameBasedAvatar name={name}/>
                    <Typography>
                        {name}
                    </Typography>
                </Stack>
            </Grid>
        );
    });
    console.log(userAvatars);

    return (
        <>
            {/* <Header /> */}
            <Container>
                <Grid
                    container
                    columns={4}
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    {userAvatars}
                </Grid>
            </Container>
        </>
    )
}

export default LandingPage
