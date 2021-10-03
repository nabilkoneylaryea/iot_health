import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const TemperatureCard = ({temperature}) => {
  console.log(temperature);
  let temperatureIcon = <></>;
  if(temperature < 98.6){
    temperatureIcon = <AcUnitIcon />;
  } else if (temperature > 98.6) {
    temperatureIcon = <LocalFireDepartmentIcon />;
  }

  return(
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* icon */}
          <Grid item>
            <ThermostatIcon />
          </Grid>

          {/* information */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Temperature
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{display: 'inline', mx: 2}} variant="h1">
                  {temperature} {/* Find a better way to put degrees symbol in*/}
                </Typography>

                <Typography sx={{display: 'inline', color: 'text.secondary'}} variant="h5">
                  ℉ {/* Find a better way to put degrees symbol in*/}
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" component="div">
                {temperatureIcon}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
    </Paper>
  )
}

export default TemperatureCard;
