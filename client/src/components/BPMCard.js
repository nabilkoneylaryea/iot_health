import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

const BPMCard = ({bpm}) => {
  console.log(bpm);
  let bpmIcon = <></>;
  if(bpm < 90){
    bpmIcon = <>Slow<TrendingDownOutlinedIcon /></>;
  } else if (bpm > 120) {
    bpmIcon = <>Fast<TrendingUpOutlinedIcon /></>;
  } else {
    bpmIcon = <>Average<TrendingFlatOutlinedIcon /></>;
  }

  return(
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* icon */}
          <Grid item>
            <FavoriteBorderOutlinedIcon />
          </Grid>

          {/* information */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  BPM
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{display: 'inline', mx: 2}} variant="h1">
                  {bpm} {/* Find a better way to put degrees symbol in*/}
                </Typography>
                {/* <Typography sx={{color: 'text.secondary'}} variant="caption">
                    beats per minute
                </Typography> */}
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" component="div">
                {bpmIcon}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
    </Paper>
  )
}

export default BPMCard;
