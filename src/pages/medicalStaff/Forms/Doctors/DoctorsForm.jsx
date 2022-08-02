import { MenuItem } from '@mui/material';
import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import "./DoctorsForm.css";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";

import Button from "@material-ui/core/button";
import { BrowserRouter as router } from "react-router-dom";

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

export default function DoctorsForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [doctorCode, setDoctorCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('0');
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = { name, age, address, doctorCode,
    phoneNumber, email, gender };

    setIsPending(true);
    
    fetch('http://localhost:51955/api/doctors/createDoctor', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(doctor)
  }).then(() => {
    console.log("New doctor added");
    setIsPending(false);
  });
}
  

const handleChange = (event) => {
  setGender(event.target.value)
};
  return (
    <div className='newDoctor'>
      <h1 className='newDoctorTitle'>New Doctor</h1>

      <Box className='newDoctorForm'
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
          <TextField id="filled-basic" label="Doctor Code"
          value={doctorCode}
          onChange={(e) => setDoctorCode(e.target.value)} variant="filled" />
        </div>
        <div>
          <TextField id="filled-basic" label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          variant="filled" />
          <TextField id="filled-basic" label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} variant="filled" />
        </div>
        <div>
          <TextField
            id="filled-select-currency"
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
        </div>
        <div className='button-section'>
          <div className='newDoctorButton'>
          { !isPending && <Button variant="contained"
          type="submit"
           color="primary">
            Save
            </Button>}
            { isPending && <Button variant="contained" color="primary">
            Saving...

            </Button>} 
            </div>
            
            <div className='newDoctorButton'>
              <Link to="/medicalStaff">
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
