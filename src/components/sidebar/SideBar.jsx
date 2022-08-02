import React from 'react'
import "./sidebar.css"
import { Home, Timeline, Medication, 
         ManageAccounts, Assessment, Mail, Feedback, Forum, Healing, MedicalServicesIcon, MedicalServices,
           Bookmark, Biotech } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
export default function SideBar() {
    return (
        <div className='sidebar'>
           <div className='sidebarWrapper'>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className='sidebarList'>
                       <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                            <Home className='sidebarIcon' />
                            Home
                       </li>
                       </NavLink>
                      <NavLink to="/patients" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                            <Healing className='sidebarIcon' />
                            All Patients
                       </li>
                       </NavLink>
                       <NavLink to="/testRequest" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                            <Biotech className='sidebarIcon' />
                            Laboratory
                       </li>
                       </NavLink>
                       {/* <NavLink to="/appointments" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                            <Bookmark className='sidebarIcon' />
                            Appointments
                       </li>
                       </NavLink> */}
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">OPD Management</h3>
                                                               
                   <ul className='sidebarList'>
                   <NavLink to="/outpatients" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                            <Healing className='sidebarIcon'/>
                            Out-Patients
                       </li>
                       </NavLink>
                       
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">IPD Management</h3>
                                                         
                   <ul className='sidebarList'>
                   <NavLink to="/inpatients" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                            <Healing className='sidebarIcon'/>
                            In-Patients
                       </li>
                       </NavLink>                       
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff Management</h3>
                   <ul className='sidebarList'>
                       <NavLink to="/medicalStaff" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                       <ManageAccounts className='sidebarIcon' />
                            Manage
                       </li>
                       </NavLink>
                            
              
                      
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Pharmacy</h3>
                   <ul className='sidebarList'>
                       <NavLink to="/prescriptions" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                       <li className='sidebarListItem'>
                       <Medication className='sidebarIcon' />
                            Dispensary
                       </li>
                       </NavLink>
                            
              
        
                   </ul>
               </div>
              
              
           </div>
        </div>
    )
}
