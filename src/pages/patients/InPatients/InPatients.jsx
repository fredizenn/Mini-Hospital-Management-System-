import React, { useEffect } from 'react'
import './InPatients.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";

export default function InPatients() {

  //  const handleDelete = (id) => {
  //   setTableData(tableData.filter(item=>item.id !== id));

  //    };

  const columns = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'patientCode', headerName: 'Patient Code', width: 180},
    {field: 'age', headerName: 'Age', width: 100},
    {field: 'address', headerName: 'Address', width: 160},
    {field: 'gender', headerName: 'Gender', width: 140},
    {field: 'phoneNumber', headerName: 'Phone Number', width: 160},
    {field: 'emailAddress', headerName: 'Email', width: 160}


  ]


    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:51955/api/patients/getInPatients").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList' style={{height: 500}}>
          <div className='listHeading'>IN-PATIENTS
          <br/><span className='subHeading'>All In-Patients</span>
         
                  </div>
         
           <DataGrid getRowId={row => row.id} rows={tableData} 
                   disableSelectionOnClick   
                   rowsPerPageOptions={[5, 10, 20]}                 
                   columns={columns} 
                   checkboxSelection />

         </div>

    );
    
}
