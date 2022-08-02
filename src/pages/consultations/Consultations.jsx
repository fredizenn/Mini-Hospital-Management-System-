import React, { useEffect } from 'react'
import './Consultations.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";
export default function Patients() {

    const handleDelete = (id) => {
        setTableData(tableData.filter(item=>item.id !== id));
    };

 

    const columns = [
        {field: 'code', headerName: 'Consultation Code', width: 150},
        {field: 'dCode', headerName: 'Doctor Code', width: 170},
        {field: 'doctorName', headerName: 'Doctor', width: 160},
        {field: 'pCode', headerName: 'Patient Code', width: 160},
        {field: 'patientName', headerName: 'Patient', width: 160},
        {field: 'nCode', headerName: 'Nurse Code', width: 160},
        {field: 'nurseName', headerName: 'Nurse', width: 160},
        {field: 'remarks', headerName: 'Remarks', width: 160},
        {field: 'diagnoses', headerName: 'Diagnoses', width: 160},
        {field: 'testRequestCode', headerName: 'Lab Test Code', width: 160},
        {field: 'date', headerName: 'Date', width: 150},

        // {field: 'doctorName', headerName: 'Doctor', width: 160},

       
{
            field: "action",
            headerName: "Action", 
            width: 150,
                    renderCell: (params) => {
                return(
                    <>
                              <Link to={"/updateConsultation/"+params.row.id}>
                                <button className="ostaffListEdit">Edit</button>
                              </Link>
                    <DeleteOutline className='patientDelete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                );
            }
        }
        
    ]

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:51955/api/consultations/getConsultations")
        .then((data)=> data.json())
        .then((data)=> setTableData(data))
    }, [])
  

    return (
        <div className='patientList' style={{height: 500}}>
        <div className='listHeading'>CONSULTATIONS
        <br/><span className='subHeading'>Data recorded from consulting room</span>
        </div>
        <div className='buttons-container'>
            <ul> 
              <li className='btn-item'>
                <Link to="/appointments" className="btn-link">
          <Button variant="contained">
            APPOINTMENTS
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
            <Link to="/newConsultation" className='btn-link'>
          <Button variant="contained" color="primary">
          RECORD CONSULTATION
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
