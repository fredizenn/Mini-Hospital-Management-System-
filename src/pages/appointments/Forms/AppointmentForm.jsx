import { MenuItem } from '@mui/material';
import React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import "./AppointmentForm.css";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";








export default function AppointmentForm() {
 
  // const [value, setValue] = React.useState(new Date());
  const [date, setDate] = useState(new Date());

  const [code, setCode] = useState('');
  // const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [doctorCodes, setDoctorCodes] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [patientCodes, setPatientCodes] = useState([]);
  
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = { code, date, doctorId, patientId };

    
    setIsPending(true);
    

    fetch('http://localhost:51955/api/appointments/createAppointment', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(appointment)
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
  fetch('http://localhost:51955/api/patients/getPatientIds')
  .then((data) => data.json())
  .then((data) => setPatientCodes(data))
}, [])

const handlePatients = (event) => {
  setPatientId(event.target.value)
};



const handleDoctors = (event) => {
  setDoctorId(event.target.value)
};

// const handleDepartments = (event) => {
//   setStatus(event.target.value)
// };

  return (
    <div className='newPatient'>
      <h1 className='newPatientTitle'>Book Appointment</h1>

      <Box className='newPatientForm'
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
        }}
      >
        <div>
          <TextField id="filled-basic" label="Appointment Code" 
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
              <Link to="/appointments" className='btn-link'>
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
