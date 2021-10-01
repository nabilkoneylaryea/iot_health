import * as React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [patientView, setPatientView] = React.useState(false);
  const [doctorView, setDoctorView] = React.useState(!patientView);
  

  return (
    <div className="App">
      <Header
        patientView={patientView}
        setPatientView={setPatientView}
        doctorView={doctorView}
        setDoctorView={setPatientView}
      ></Header>
    </div>
  );
}

export default App;
