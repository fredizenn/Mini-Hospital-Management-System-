import { MenuItem } from '@mui/material';
import React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import "./ConsultationForm.css";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const departments = [
  {
    value: '0',
    label: 'Out-Patient'
  },
  {
    value: '1',
    label: 'In-Patient'
  }
]






export default function ConsultationsForm() {
 
  // const [value, setValue] = React.useState(new Date());
  const [date, setDate] = useState(new Date());

  const [code, setCode] = useState('');
  // const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [doctorCodes, setDoctorCodes] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [patientCodes, setPatientCodes] = useState([]);
  const [nurseId, setNurseId] = useState('');
  const [nurseCodes, setNurseCodes] = useState([]);
  const [remarks, setRemarks] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnoses, setDiagnoses] = useState('');
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const consultation = { code, date, doctorId, patientId, nurseId,
    remarks, symptoms, diagnoses };

    
    setIsPending(true);
    

    fetch('http://localhost:51955/api/consultations/createConsultation', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(consultation)
  }).then(() => {
    console.log("New consultation recorded");
    setIsPending(false);
    
  });
}

useEffect(() => {
  fetch('http://localhost:51955/api/doctors/getDoctorIds')
  .then((data) => data.json())
  .then((data) => setDoctorCodes(data))
  }, [])


useEffect(() => {
  fetch('http://localhost:51955/api/nurses/getNurseIds')
  .then((data) => data.json())
  .then((data) => setNurseCodes(data))
}, [])

useEffect(() => {
  fetch('http://localhost:51955/api/patients/getPatientIds')
  .then((data) => data.json())
  .then((data) => setPatientCodes(data))
}, [])

const handlePatients = (event) => {
  setPatientId(event.target.value)
};

const handleNurses = (event) => {
  setNurseId(event.target.value)
}

const handleDoctors = (event) => {
  setDoctorId(event.target.value)
};

// const handleDepartments = (event) => {
//   setStatus(event.target.value)
// };

  return (
    <div className='newPatient'>
      <h1 className='newPatientTitle'>Consulting Room Session</h1>

      <Box className='newPatientForm'
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
        }}
      >
        <div>
          <TextField id="filled-basic" label="Consultation Code" 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
          variant="filled" />
          {/* <TextField id="filled-basic" label="Date"
          value={date}
          variant="filled" /> */}

     </div>
        <div>
        <TextField
          id="filled-select-currency-native"
          select
          // value={doctorId}
          onChange={handleDoctors}
          helperText="Please Select Doctor By Doctor Code"
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {doctorCodes.map((item, i) => (
            <option key={i} value={item.id}>
              {item.doctorCode}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          // value={patientId}
          onChange={handlePatients}
          helperText="Please Select Patient By Patient Code"
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {patientCodes.map((item, i) => (
            <option key={i} value={item.id}>
              {item.patientCode}
            </option>
          ))}
        </TextField>
      </div>
      <div>
      <TextField
          id="filled-select-currency-native"
          select
          // value={nurseId}
          onChange={handleNurses}
          helperText="Please Select Nurse By Nurse Code"
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {nurseCodes.map((item, i) => (
            <option key={i} value={item.id}>
              {item.nurseCode}
            </option>
          ))}
        </TextField>
        <TextField id="filled-basic" label="Remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          variant="filled" />
      </div>
      <div>
      <TextField id="filled-basic" label="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          variant="filled" />
          <TextField id="filled-basic" label="Diagnoses"
          value={diagnoses}
          onChange={(e) => setDiagnoses(e.target.value)}
          variant="filled" />
      </div>
      <div>
      <DatePicker className='date-area' selected={date} onChange={(e) => setDate(date)} />

      </div>
      
        

         
        <div className='button-section'>
          <div className='newPatientButton'>
          { !isPending && <Button variant="contained"
          type="submit"
           color="primary">
            Save
            </Button>}
            { isPending && <Button variant="contained" color="primary">
            Saving...
            </Button>} 
            </div>
            <div className='newPatientButton'>
              <Link to="/consultations" className='btn-link'>
            <Button  
            variant="contained">
            Cancel
            </Button>
            </Link>
            </div>
        </div>
      </Box>
    </div>
  )
}
