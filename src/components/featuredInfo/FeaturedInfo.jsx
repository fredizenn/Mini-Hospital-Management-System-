import React, { useEffect, useState } from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export default function FeaturedInfo() {

    const [totalConsultations, setTotalConsultations] = useState([]);
    const [totalPatients, setTotalPatients] = useState([]);
    const [totalAppointments, setTotalAppointments] = useState();

    useEffect(() => {
        fetch("http://localhost:51955/api/totals/getTotalConsultations")
        .then((data)=> data.json())
        .then((data) => setTotalConsultations(data))
    });

    useEffect(() => {
        fetch("http://localhost:51955/api/totals/getTotalPatients")
        .then((data) => data.json())
        .then((data) => setTotalPatients(data))
    });

    useEffect(() => {
        fetch("http://localhost:51955/api/totals/getTotalAppointments")
        .then((data) => data.json())
        .then((data) => setTotalAppointments(data))
    });



    return (
        <div className='featured'>
           <div className='featuredItem'>
               <span className="featuredTitle">Completed Consultations</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">{totalConsultations}</span>
                   {/* <span className="featuredMoneyRate">-11.4
                   <ArrowDownward className='featuredIcon negative' />
                   </span> */}
               </div>
               <span className="featuredSub">Patients got assistance from physicians successfully</span>
               </div> 
               <div className='featuredItem'>
               <span className="featuredTitle">Registered Patients</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">{totalPatients}</span>
                   {/* <span className="featuredMoneyRate">-3.2
                   <ArrowDownward className='featuredIcon negative'/>
                   </span> */}
               </div>
               <span className="featuredSub">Total number of registered patients</span>
               </div> <div className='featuredItem'>
               <span className="featuredTitle">Appointments</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">{totalAppointments}</span>
                   {/* <span className="featuredMoneyRate">+10.5
                   <ArrowUpward className='featuredIcon positive'/>
                   </span> */}
               </div>
               <span className="featuredSub">Medical appointments</span>
               </div> 
        </div>
    )
}
