import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import PatientInfo from './components/PatientInfo';
import HealthInfo from './components/HealthInfo';
import patients from './patients';

function App() {
  const [patientView, setPatientView] = React.useState(false);
  const [doctorView, setDoctorView] = React.useState(!patientView);
  
  let mainDisplay = <></>;
  if(doctorView){
    mainDisplay = 
      <PatientInfo
        doctorID={"d2"}
      />;
  } else {
    mainDisplay = 
      <HealthInfo
        patient={patients["p6"]}
      />;
  }

  return (
    <div className="App">
      <Header
        patientView={patientView}
        setPatientView={setPatientView}
        doctorView={doctorView}
        setDoctorView={setPatientView}
      />
      <Container>
        <>{mainDisplay}</>
      </Container>
    </div>
  );
}

export default App;
