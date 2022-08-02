import React from 'react';
import "./newUser.css";
import TextField from '@mui/material/TextField';
export default function NewUser() {
    return (
        <div className='newUser'>
           <h1 className="newUserTitle">New User</h1> 
           <form className="newUserForm">
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='john'/>
               </div>
               <div className="newUserItem">
                   <label>Full Name</label>
                   <TextField id="filled-basic" label="Filled" variant="filled" />               </div>
               <div className="newUserItem">
                   <label>Email</label>
                   <input type="email" placeholder='johnsmith@gmail.com'/>
               </div>
               <div className="newUserItem">
                   <label>Password</label>
                   <input type="password" placeholder='password'/>
               </div>
               <div className="newUserItem">
                   <label>Phone Number</label>
                   <input type="password" placeholder='+1 123 456 78'/>
               </div>
               <div className="newUserItem">
                   <label>Address</label>
                   <input type="password" placeholder='address'/>
               </div>
               <div className="newUserItem">
                   <div className='newUserGender'>
                   <label>Gender</label>
                   <input type="radio" name='gender' id='male' value='male'/>
                   <label htmlFor="Male"></label>
                   <input type="radio" name='gender' id='female' value='female'/>
                   <label htmlFor="Female"></label>
                   <input type="radio" name='gender' id='other' value='other'/>
                   <label htmlFor="Other"></label>
                   </div>
                   <div className="newUserItem">
                       <label>Active</label>
                       <select className='newUserSelect' name='active' id='active'>
                           <option value="yes">Yes</option>
                           <option value="no">No</option>

                           </select> 
                   </div>
                   <button className="newUserButton">Create</button>

               </div>
           </form>
        </div>
    )
}
