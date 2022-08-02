import { MenuItem } from '@mui/material';
import React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import "./TestRequestForm.css";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";








export default function TestRequestForm() {
 
  // const [value, setValue] = React.useState(new Date());
  const [date, setDate] = useState(new Date());

  const [testRequestCode, setCode] = useState('');
  // const [date, setDate] = useState('');
  const [testDetails, setDetails] = useState('');
  const [testType, setType] = useState('');
  const [consultationId, setConsultationId] = useState('');
  const [consultationCodes, setConsultationCodes] = useState([]);
  
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const testRequest = {testRequestCode, testDetails, testType, consultationId};

    
    setIsPending(true);
    

    fetch('http://localhost:51955/api/labTestRequests/createTestRequest', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(testRequest)
  }).then(() => {
    console.log("New consultation recorded");
    setIsPending(false);
    
  });
}

useEffect(() => {
  fetch('http://localhost:51955/api/consultations/getConsultations')
  .then((data) => data.json())
  .then((data) => setConsultationCodes(data))
  }, [])





const handleConsultations = (event) => {
  setConsultationId(event.target.value)
};



// const handleDepartments = (event) => {
//   setStatus(event.target.value)
// };

  return (
    <div className='newPatient'>
      <h1 className='newPatientTitle'>Lab Test Request</h1>

      <Box className='newPatientForm'
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
        }}
      >
        <div>
          <TextField id="filled-basic" label="Test Request Code" 
          value={testRequestCode} 
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
          onChange={handleConsultations}
          helperText="Please Select Respective Consultation"
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {consultationCodes.map((item, i) => (
            <option key={i} value={item.id}>
              {item.code}
            </option>
          ))}
        </TextField>
        <div>
          <TextField id="filled-basic" label="Test Details" 
          value={testDetails} 
          onChange={(e) => setDetails(e.target.value)}
          variant="filled" />
          <TextField id="filled-basic" label="Test Type" 
          value={testType} 
          onChange={(e) => setType(e.target.value)}
          variant="filled" />

     </div>
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
