import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import HealthInfo from '../components/HealthInfo';

// import patients from '../patients';

const PatientsDropdown = (patients) => {
  console.log("Patients dropdown");
  const [expanded, setExpanded] = useState(false);

  // TODO: look up how this doubel arrow function thing works
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const dropdown = patients.map((patient) => {

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
            <HealthInfo patientID={patient._id}/>
          </Typography>
        </AccordionDetails>
    </Accordion>);
  });
  
  return (
    <>{dropdown}</>
  );
}

const PatientInfo = ({doctorID}) => {
    console.log("Patient info");
    const [patients, setPatients] = useState([]);
    const [doctor, setDoctor] = useState({});
    
    const doctorRequestURI = `http://localhost:5000/api/doctors/${doctorID}`;
    const patientsRequestURI = `http://localhost:5000/api/doctors/${doctorID}/patients`;
    useEffect(() => {
        console.log("Request to API");
        axios.get(doctorRequestURI)
          .then((response) => {setDoctor(response.data)})
          .catch((error) => {console.log(error)});
        axios.get(patientsRequestURI)
            .then((response) => {setPatients(response.data)})
            .catch((error) => {console.log(error)});
    });

    return (
        <div>
            <Typography
                gutterBottom
                variant="h3"
            >
                {doctor.name}'s Patients
            </Typography>
            <>{PatientsDropdown(patients)}</>
        </div>
    )
}

export default PatientInfo;
