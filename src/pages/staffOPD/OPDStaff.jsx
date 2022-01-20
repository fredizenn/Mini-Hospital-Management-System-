import React from 'react'
import './ostaff.css';
import { DataGrid } from "@material-ui/data-grid";
import { ostaffRows } from "../../dummyData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

export default function OPDStaff() {
    const [data, setData] = useState(ostaffRows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
      };

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 160, renderCell: (params) =>{
            return (
                <div>
                    {params.row.name}
                </div>
            )
        } },
        { field: 'lastName', headerName: 'Last Name', width: 160 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
            field: 'position',
            headerName: 'Position',
    
            width: 140,
          },
        // {
        //   field: 'position',
        //   headerName: 'Position',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.getValue(params.id, 'position') || ''} ${
        //       params.getValue(params.id, 'lastName') || ''
        //     }`,
        // },

        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return(

              <>
              <Link to={"/staff/"+params.row.id}>
              <button className="ostaffListEdit">Edit</button>
              </Link>
                  <DeleteOutline className="ostaffListDelete" onClick={() => handleDelete(params.row.id)}/>
              </>
            );
          }
        }
      ];
      
    return (
        <div className='staffList'>
                  <DataGrid rows={data} 
                  disableSelectionOnClick 
                  columns={columns} 
                  checkboxSelection />

        </div>
    )
}
