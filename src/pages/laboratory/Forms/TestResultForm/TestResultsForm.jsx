import { MenuItem } from '@mui/material';
import React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import "./TestResultForm.css";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";








export default function TestResultForm() {
 
  // const [value, setValue] = React.useState(new Date());
  const [date, setDate] = useState(new Date());
  const [resultDetails, setResultDetails] = useState('');
  const [testRequestId, setTestRequestId] = useState('');
  const [labTechnicianId, setLabTechnicianId] = useState('');
  const [labTechnicianCodes, setLabTechnicianCodes] = useState([]);
  const [testRequestCode, setCode] = useState([]);
  // const [date, setDate] = useState('');
  
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const testRequest = {date, resultDetails, testRequestId, labTechnicianId };

    
    setIsPending(true);
    

    fetch('http://localhost:51955/api/labTestResults/createResult', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(testRequest)
  }).then(() => {
    console.log("New result recorded");
    setIsPending(false);
    
  });
}

useEffect(() => {
  fetch('http://localhost:51955/api/labtechnicians/getLabTechnicians')
  .then((data) => data.json())
  .then((data) => setLabTechnicianCodes(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:51955/api/labTestRequests/getTestRequests')
    .then((data) => data.json())
    .then((data) => setCode(data))
    }, [])




const handleTechnicians = (event) => {
  setLabTechnicianId(event.target.value)
};

const handleTestRequests = (event) => {
    setTestRequestId(event.target.value)
};



// const handleDepartments = (event) => {
//   setStatus(event.target.value)
// };

  return (
    <div className='newPatient'>
      <h1 className='newPatientTitle'>Lab Test Results</h1>

      <Box className='newPatientForm'
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
        }}
      >
        <div>
          <TextField id="filled-basic" label="Results" 
          value={resultDetails} 
          onChange={(e) => setResultDetails(e.target.value)}
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
          onChange={handleTechnicians}
          helperText="Issued By: Select Lab Technician Code"
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {labTechnicianCodes.map((item, i) => (
            <option key={i} value={item.id}>
              {item.labTechCode}
            </option>
          ))}
        </TextField>
        <div>
        <TextField
          id="filled-select-currency-native"
          select
          // value={doctorId}
          onChange={handleTestRequests}
          helperText="Select Corresponding Test Request Code By"
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {testRequestCode.map((item, i) => (
            <option key={i} value={item.id}>
              {item.testRequestCode}
            </option>
          ))}
        </TextField>

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
