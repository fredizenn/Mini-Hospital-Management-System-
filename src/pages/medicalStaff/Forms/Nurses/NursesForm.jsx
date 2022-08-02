import { MenuItem } from '@mui/material';
import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import "./NursesForm.css";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Button from "@material-ui/core/button";

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

export default function NursesForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [nurseCode, setNurseCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('0');
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const nurse = { name, age, address, nurseCode,
    phoneNumber, email, gender };

    setIsPending(true);
    
    fetch('http://localhost:51955/api/nurses/createNurse', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(nurse)
  }).then(() => {
    console.log("New nurse added");
    setIsPending(false);
  });
}
  

  return (
    <div className='newNurse'>
      <h1 className='newNurseTitle'>New Nurse</h1>

      <Box className='newNurseForm'
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
          <TextField id="filled-basic" label="Nurse Code"
          value={nurseCode}
          onChange={(e) => setNurseCode(e.target.value)} variant="filled" />
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
            label="Select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            helperText="Please select gender"
            variant="filled"
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className='button-section'>
          <div className='newNurseButton'>
          { !isPending && <Button variant="contained"
          type="submit"
           color="primary">
            Save
            </Button>}
            { isPending && <Button variant="contained" color="primary">
            Saving...
            </Button>} 
            </div>
            <div className='newNurseButton'>
              <Link to="/nurses">
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
