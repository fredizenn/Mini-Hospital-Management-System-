import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, AttachMoney, ShoppingBag, Group,
         ManageAccounts, Assessment, Mail, Feedback, Forum, Healing, MedicalServicesIcon, MedicalServices } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function sidebar() {
    return (
        <div className='sidebar'>
           <div className='sidebarWrapper'>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className='sidebarList'>
                       <Link to="/" className='link'>
                       <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon' />
                            Home
                       </li>
                       </Link>
                       <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Bills
                       </li>
                       <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                       </li>
                       <Link to="/users" className='link'>
                       <li className='sidebarListItem'>
                            <Group className='sidebarIcon' />
                            Users
                       </li>
                       </Link>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">OPD Management</h3>
                                                               
                   <ul className='sidebarList'>
                       <Link to="opdStaff" className='link'>
                   <li className='sidebarListItem'>
                            <MedicalServices className='sidebarIcon'/>
                            Staff
                       </li>
                       </Link>
                       <li className='sidebarListItem'>
                            <Healing className='sidebarIcon'/>
                            Patients
                       </li>
                       <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon'/>
                            Billing
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">IPD Management</h3>
                                                         
                   <ul className='sidebarList'>
                   <Link to="ipdStaff" className='link'> 
                   <li className='sidebarListItem'>
                            <MedicalServices className='sidebarIcon'/>
                            Staff
                       </li>
                       </Link> 
                       <li className='sidebarListItem'>
                            <Healing className='sidebarIcon'/>
                            Patients
                       </li>
                       <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon'/>
                            Billing
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff Management</h3>
                   <ul className='sidebarList'>
                       <li className='sidebarListItem'>
                            <ManageAccounts className='sidebarIcon' />
                            Manage
                       </li>
                       <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                       </li>
                       <li className='sidebarListItem'>
                            <Assessment className='sidebarIcon' />
                            Reports
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className='sidebarList'>
                       <li className='sidebarListItem'>
                            <Mail className='sidebarIcon' />
                            Mail
                       </li>
                       <li className='sidebarListItem'>
                            <Feedback className='sidebarIcon' />
                            Feedback
                       </li>
                       <li className='sidebarListItem'>
                            <Forum className='sidebarIcon' />
                            Messages
                       </li>
                   </ul>
               </div>
           </div>
        </div>
    )
}
