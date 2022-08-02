import React, { useEffect } from 'react'
import './Appointments.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";

export default function Appointments() {

   const handleDelete = (id) => {
    setTableData(tableData.filter(item=>item.id !== id));

     };

  const columns = [
    {field: 'code', headerName: 'Appointment Code', width: 150},
    {field: 'patientName', headerName: 'Patient Name', width: 160},
    {field: 'pCode', headerName: 'Patient Code', width: 160},
    {field: 'doctorName', headerName: 'Doctor Name', width: 180},
    {field: 'dCode', headerName: 'Doctor Code', width: 180},
    {field: 'date', headerName: 'Date', width: 160},





    {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params) => {
                return(
    
                  <>
                 
                      <DeleteOutline className="ostaffListDelete" onClick={() => handleDelete(params.row.doctorId)}/>
                  </>
                );
              }
            }
  ]


    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:51955/api/appointments/getAppointments").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList' style={{height: 500}}>
          <div className='listHeading'>APPOINTMENTS
          <br/><span className='subHeading'>All Appointments</span>                  </div>

          <div className='buttons-container'>
            <ul> 
              <li className='btn-item'>
                <Link to="/consultations" className="btn-link">
          <Button variant="contained">
            CONSULTATIONS
          </Button>
          </Link>
          </li>
          <li className='btn-item'>
            <Link to="/patients" className='btn-link'>
          <Button variant="contained">
          BACK TO PATIENTS
          </Button>
          </Link>
          </li>
          </ul>

         
          </div>
          <div className='button-right'>
            <Link to="/appointmentForm" className='btn-link'>
          <Button variant="contained" color="primary">
          NEW APPOINTMENT
          </Button>
          </Link>
          </div>
         
           <DataGrid getRowId={row => row.id} rows={tableData} 
                   disableSelectionOnClick   
                   rowsPerPageOptions={[5, 10, 20]}                 
                   columns={columns} 
                   checkboxSelection />

         </div>

    );
    
}
