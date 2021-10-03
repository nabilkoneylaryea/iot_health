import * as React from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default TemperatureCard = ({tempurature}) => {
  let temperatureIcon = <></>;
  if(temperature > 98.6){
    temperatureIcon = <AcUnitIcon />;
  } else if (temperature < 98.6) {
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
                <Typography variant="h1">
                  {temperature}℉ {/* Find a better way to put degrees symbol in*/}
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
