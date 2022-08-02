import React, { useEffect } from 'react'
import './Prescription.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";

export default function Prescriptions() {

    const handleChangeStatus = () => {
        <button className="ostaffListEditRed">Edit</button>

      };

  const columns = [
    {field: 'refNo', headerName: 'Reference Number', width: 200},
    {field: 'medications', headerName: 'Medication and Dosage', width: 200},
    {field: 'consultationCode', headerName: 'Consultation Code', width: 160},
    {field: 'dateIssued', headerName: 'Date', width: 160},
    

    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return(

            <>
            <button className="ostaffListEdit" onClick={() => handleChangeStatus()}>Edit</button>
            
                {/* <DeleteOutline className="ostaffListDelete" onClick={() => handleDelete(params.row.doctorId)}/> */}
            </>
          );
        }
      }
  ]


    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:51955/api/prescriptions/getPrescriptions").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList' style={{height: 500}}>
          <div className='listHeading'>PRESCRIPTION HISTORY
          <br/><span className='subHeading'>All Prescriptions</span>
         
                  </div>
         
           <DataGrid getRowId={row => row.id} rows={tableData} 
                   disableSelectionOnClick   
                   rowsPerPageOptions={[5, 10, 20]}                 
                   columns={columns} 
                   checkboxSelection />

         </div>

    );
    
}
