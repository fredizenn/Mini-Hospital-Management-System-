import React, { useEffect } from 'react'
import './ostaff.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  DeleteOutline } from "@mui/icons-material";

export default function OPDStaff() {

   const handleDelete = (id) => {
    setTableData(tableData.filter(item=>item.id !== id));

     };

  const columns = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'age', headerName: 'Age', width: 100},
    {field: 'position', headerName: 'Position', width: 160},

    {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params) => {
                return(
    
                  <>
                  <Link to={"/staff/"+params.row.doctorId}>
                  <button className="ostaffListEdit">Edit</button>
                  </Link>
                      <DeleteOutline className="ostaffListDelete" onClick={() => handleDelete(params.row.doctorId)}/>
                  </>
                );
              }
            }
  ]


    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:61114/api/doctors/getalldoctors").then((data) => data.json())
      .then((data)=> setTableData(data))


    }, [])
  
  

  
           
    return (
        <div className='staffList'>
          <div className='listHeading'>Out-Patients' Department
          <br/><span className='subHeading'>Medical Staff</span></div>
                   <DataGrid getRowId={row => row.doctorId} rows={tableData} 
                   disableSelectionOnClick                    
                   columns={columns} 
                   checkboxSelection />

         </div>

    );
    
}
