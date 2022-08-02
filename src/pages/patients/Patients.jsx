import React, { useEffect } from 'react'
import './patients.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";
export default function Patients() {

    const handleDelete = (id) => {
        setTableData(tableData.filter(item=>item.id !== id));
    };

    const handleChangeStatus = () => {
        <button className="ostaffListEditRed">Edit</button>

      };

    const columns = [
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'patientCode', headerName: 'Patient Code', width: 150},
        {field: 'age', headerName: 'Age', width: 100},
        {field: 'address', headerName: 'Address', width: 160},
        {field: 'gender', headerName: 'Gender', width: 140},
        {field: 'phoneNumber', headerName: 'Phone Number', width: 160},
        {field: 'emailAddress', headerName: 'Email', width: 160},
        {field: 'patientStatus', headerName: 'Patient Status', width: 160},
        // {field: 'doctorName', headerName: 'Doctor', width: 160},

       
{
            field: "action",
            headerName: "Action", 
            width: 150,
                    renderCell: (params) => {
                return(
                    <>
                                <button className="ostaffListEdit" onClick={() => handleChangeStatus()}>Edit</button>

                    <DeleteOutline className='patientDelete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                );
            }
        }
        
    ]

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:51955/api/patients/getpatients")
        .then((data)=> data.json())
        .then((data)=> setTableData(data))
    }, [])
  

    return (
        <div className='patientList' style={{height: 500}}>
        <div className='listHeading'>PATIENTS
        <br/><span className='subHeading'>Registered Patients</span>
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
            <Link to="/consultations" className='btn-link'>
          <Button variant="contained">
          CONSULTATIONS
          </Button>
          </Link>
          </li>
          </ul>

         
          </div>
        <div className='button-right'>
            <Link to="/newPatient" className='btn-link'>
          <Button variant="contained" color="primary">
          REGISTER NEW PATIENT
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
