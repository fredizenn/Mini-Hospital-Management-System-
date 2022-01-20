import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] =  useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 160, renderCell: (params) =>{
            return (
                <div>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'lastName', headerName: 'Last name', width: 160 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
              params.getValue(params.id, 'lastName') || ''
            }`,
        },

        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return(

              <>
              <Link to={"/user/"+params.row.id}>
              <button className="userListEdit">Edit</button>
              </Link>
                  <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
              </>
            );
          }
        }
      ];
      
   
    return (
        <div className="userList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} checkboxSelection />
        </div>
    )
}
