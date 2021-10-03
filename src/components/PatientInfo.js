import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import HealthInfo from '../components/HealthInfo';

import patients from '../patients';
import doctors from '../doctors';

function PatientsDropdown(patients) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  let dropdown = [];
  dropdown = patients.map((patient) => {

    return (<Accordion 
        key={patient.name}
        expanded={expanded === patient.name}
        onChange={handleChange(patient.name)}
    >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {patient.name}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
                <Typography
                    sx={{display: 'inline', mx:3}}
                >
                    Age: {patient.age}
                </Typography>

                <Typography
                    sx={{display: 'inline', mx:3}}
                >
                    Weight: {patient.weight}
                </Typography>

                <Typography
                    sx={{display: 'inline', mx:3}}
                >
                    Height: {patient.height}
                </Typography>
          </Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Health info grid here
          </Typography>
        </AccordionDetails>
    </Accordion>);
  });
  
  return (
    <>{dropdown}</>
  );
}


function PatientInfo({doctorID}) {
    const doctorsPatientsIDs = doctors[doctorID].patientIDs;
    console.log(doctorsPatientsIDs);
    const doctorsPatients = doctorsPatientsIDs.map((patientID) => {
        return(
            patients[patientID]
        );
    });
    console.log(doctorsPatients);
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'inline' } }}
            >
                Patient Info
            </Typography>
            <>{PatientsDropdown(doctorsPatients)}</>
        </div>
    )
}

export default PatientInfo;
