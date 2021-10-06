import React from 'react';
import { Grid, Typography } from '@mui/material';
import TemperatureCard from './TemperatureCard';
import BPMCard from './BPMCard';

function HealthInfo({patientID}) {
    // TODO make a variable patients with an axios get request to the api
    const patient = patients[patientID];
    return (
        <div>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h5">
                        {patient.name}'s Health Information
                    </Typography>
                </Grid>

                <Grid item container spacing={3}>
                <Grid item xs={6}>
                    <TemperatureCard temperature={patient.temp}/>
                </Grid>

                <Grid item xs={6}>
                <BPMCard bpm={patient.bpm}/>
                </Grid>
            </Grid>
            </Grid>
            
            
        </div>
    )
}

export default HealthInfo;
