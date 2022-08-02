import { MenuItem } from '@mui/material';
import React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import "./patientForm.css";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/button";


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

const genders =  [
  {
    value: '0',
    label: 'Male'
  },
  {
    value: '1',
    label: 'Female'
  }


]

export default function PatientForm() {
 
  // const [value, setValue] = React.useState(new Date());

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [patientCode, setPatientCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [gender, setGender] = useState('0');
  const [status, setStatus] = useState('0');
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const patient = { name, age, address, patientCode,
    phoneNumber, emailAddress, gender, status};

    
    setIsPending(true);
    
    fetch('http://localhost:51955/api/patients/createPatient', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(patient)
  }).then(() => {
    console.log("New patient added");
    setIsPending(false);
    
  });
}


const handleChange = (event) => {
  setGender(event.target.value)
};

const handleDepartments = (event) => {
  setStatus(event.target.value)
};

  return (
    <div className='newPatient'>
      <h1 className='newPatientTitle'>New Patient</h1>

      <Box className='newPatientForm'
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
        }}
      >
        <div>
          <TextField id="filled-basic" label="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          variant="filled" />
          <TextField type="number" id="filled-basic" label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)} 
          variant="filled" />
        </div>

        <div>
          <TextField id="filled-basic" label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)} variant="filled" />
          <TextField id="filled-basic" label="Patient Code"
          value={patientCode}
          onChange={(e) => setPatientCode(e.target.value)} variant="filled" />
        </div>
        <div>
          <TextField id="filled-basic" label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          variant="filled" />
          <TextField id="filled-basic" label="Email"
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)} variant="filled" />
        </div>
        <div>
        <TextField
          id="filled-select-currency-native"
          select
          label="Select gender"
          value={gender}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {genders.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Select patient department"
          value={status}
          onChange={handleDepartments}
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {departments.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
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
              <Link to="/patients" className='btn-link'>
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
