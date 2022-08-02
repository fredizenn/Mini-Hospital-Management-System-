import React from 'react'
import './topbar.css';
import { NotificationsNone, Group, Settings } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className="logo">HOMASYS</span>
                </div>
                {/* <div className='topRight'> 
                    <div className='topbarIconContainer'>
                    <NavLink to="/users" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                            <Group className='sidebarIcon' />
                       </NavLink>
                       </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                </div> */}
                </div>
        </div>
    )
}
