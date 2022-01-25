import React from 'react'
import './istaff.css';
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function IPDStaff() {

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
                      <button className="istaffListEdit">Edit</button>
                      </Link>
                          <DeleteOutline className="istaffListDelete" onClick={() => handleDelete(params.row.doctorId)}/>
                      </>
                    );
                  }
                }
      ]
    
    
        const [tableData, setTableData] = useState([]);
    
        useEffect(() => {
          fetch("http://localhost:61114/api/doctors/getalloutdoctors").then((data) => data.json())
          .then((data)=> setTableData(data))
    
    
        }, [])
      
      
       
               
        return (
            <div className='staffList'>
              <div className='listHeading'>In-Patients' Department
              <br/><span className='subHeading'>Medical Staff</span></div>
                       <DataGrid getRowId={row => row.doctorId} rows={tableData} 
                       disableSelectionOnClick 
                       columns={columns} 
                        pageSize={12}
                       checkboxSelection />
    
             </div>
    
        );
}
  