import React, { useEffect } from 'react'
import './TestRequest.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";
import Button from "@material-ui/core/button";

export default function TestRequest() {

   const handleDelete = (id) => {
    setTableData(tableData.filter(item=>item.id !== id));

     };

  const columns = [
    {field: 'testRequestCode', headerName: 'Test Request Code', width: 180},
    {field: 'testType', headerName: 'Test Type', width: 150},
    {field: 'testDetails', headerName: 'Test Details', width: 160},
    {field: 'consultationCode', headerName: 'Consultation Code', width: 220},
    {field: 'resultDetails', headerName: 'Result', width: 180},
    {field: 'testStatus', headerName: 'Test Status', width: 160},





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
      fetch("http://localhost:51955/api/labTestRequests/getTestRequests").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList' style={{height: 500}}>
          <div className='listHeading'>LAB TEST REQUESTS
          <br/><span className='subHeading'>Lab Test History</span></div>
          <div className='buttons-container'>
            <ul> 
              <li className='btn-item'>
                <Link to="/labTestResults" className="btn-link">
          <Button variant="contained">
          Lab Results
          </Button>
          </Link>
          </li>
          
          
          </ul>

         
          </div>
          <div className='button-right'>
            <Link to="/testRequestForm" className='btn-link'>
          <Button variant="contained" color="primary">
REQUEST LAB TEST     
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
