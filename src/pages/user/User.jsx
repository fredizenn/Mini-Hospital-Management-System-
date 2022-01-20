import React from 'react';
import "./user.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, PhoneAndroid, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
   
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">
                <button className='userAddButton'>Create</button>
                </Link>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Kwame</span>
                                <span className="userShowUserTitle">Software Engineer</span>

                            </div>
                        </div>
                        <div className="userShowBottom">
                
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">kwam32</span>
                            </div>
                            <div className="userShowInfo">
                            <CalendarToday className='userShowIcon'/>
                            <span className="userShowInfoTitle">11.09.1998</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="userShowInfoTitle">024 444 9981</span>
                            </div>
                            <div className="userShowInfo">
                            <LocationSearching className='userShowIcon'/>
                            <span className="userShowInfoTitle">Accra | Ghana</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input type="text" 
                                    placeholder="kwam32" 
                                    className='updateUserInput'/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Fullname</label>
                                    <input type="text" 
                                    placeholder="11.09.1998" 
                                    className='updateUserInput'/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input type="text" 
                                    placeholder="024 444 9981" 
                                    className='updateUserInput'/>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Location</label>
                                    <input type="text"
                                    placeholder="Accra | Ghana" 
                                    className='updateUserInput'/>
                                </div>
                                <div className='userUpdateUpload'>
                                    <button className='userUpdateButton'>Update</button>
                                </div>
                            </div>
                             <div className='userUpdateRight'>
                                
                            </div> 
                        </form>
                    </div>
                </div>

        </div>
    )
}
