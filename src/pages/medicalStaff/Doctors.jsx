import React, { useEffect } from 'react'
import './ostaff.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Doctors() {

   const handleDelete = (id) => {
    setTableData(tableData.filter(item=>item.id !== id));

     };

  const columns = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'age', headerName: 'Age', width: 100},
    {field: 'address', headerName: 'Address', width: 160},
    {field: 'gender', headerName: 'Gender', width: 140},
    {field: 'phoneNumber', headerName: 'Phone Number', width: 180},
    {field: 'email', headerName: 'Email', width: 160},
    {field: 'address', headerName: 'Address', width: 160},
    {field: 'doctorCode', headerName: 'Doctor Code', width: 160},
    {field: 'dateRegistered', headerName: 'Date Registered', width: 160},





    {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params) => {
                return(
    
                  <>
                  {/* <Link to={"/staff/"+params.row.id}>
                  <button className="ostaffListEdit">Edit</button>
                  </Link> */}
                      <DeleteOutline className="ostaffListDelete" onClick={() => handleDelete(params.row.doctorId)}/>
                  </>
                );
              }
            }
  ]


    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:51955/api/doctors/getdoctors").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList' style={{height: 500}}>
          <div className='listHeading'>MEDICAL STAFF
          <br/><span className='subHeading'>Registered Doctors</span></div>
          <div className='buttons-container'>
            <ul> 
              <li className='btn-item'>
                <Link to="/medicalStaff" className="btn-link">
          <Button variant="contained">
          Doctors
          </Button>
          </Link>
          </li>
          <li className='btn-item'>
            <Link to="/nurses" className='btn-link'>
          <Button variant="contained">
          Nurses
          </Button>
          </Link>
          </li>
          <li className='btn-item'>
            <Link to="/labTechnicians" className='btn-link'>
          <Button variant="contained">
          Lab Technicians
          </Button>
          </Link>
          </li>
          </ul>

         
          </div>
          <div className='button-right'>
            <Link to="/newDoctor" className='btn-link'>
          <Button variant="contained" color="primary">
          ADD DOCTOR
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
