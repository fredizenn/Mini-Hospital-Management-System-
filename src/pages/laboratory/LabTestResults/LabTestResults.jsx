import React, { useEffect } from 'react'
import './LabTestResults.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";

export default function TestResult() {

   const handleDelete = (id) => {
    setTableData(tableData.filter(item=>item.id !== id));

     };

  const columns = [
    {field: 'resultDetails', headerName: 'Results', width: 180},
    {field: 'testRequestCode', headerName: 'Test Request Code', width: 150},
    {field: 'labTechnicianCode', headerName: 'Lab Technician Code', width: 160},
    {field: 'labTechnicianName', headerName: 'Issued By', width: 160},





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
      fetch("http://localhost:51955/api/labTestResults/getLabResults").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList' style={{height: 500}}>
          <div className='listHeading'>LAB TEST REQUESTS
          <br/><span className='subHeading'>Lab Test Results History</span></div>
          <div className='buttons-container'>
            <ul> 
              <li className='btn-item'>
                <Link to="/testRequest" className="btn-link">
          <Button variant="contained">
          Lab Results
          </Button>
          </Link>
          </li>
          
          
          </ul>

         
          </div>
          <div className='button-right'>
            <Link to="/testResultForm" className='btn-link'>
          <Button variant="contained" color="primary">
ISSUE LAB RESULTS     
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
