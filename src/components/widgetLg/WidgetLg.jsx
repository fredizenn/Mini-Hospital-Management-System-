import "./widgetLg.css"
import React, { useEffect } from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import {Visibility} from "@mui/icons-material";


export default function WidgetLg() {

    const [newAppointments, setNewAppointments] = useState([]);
    
    
    useEffect(() => {
        fetch("http://localhost:51955/api/totals/getCurrentAppointments")
        .then((data)=> data.json())
        .then((data)=> setNewAppointments(data))
    }, [])
    // const Button = ({type}) => {
    //     return <button className={"widgetLgButton " + type}>{type}</button>
    // };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Today's Appointments</h3>
            <Link to="/appointments">
            <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/>
                       View All
                       </button>
                       </Link>
            <table className="widgetLgTable">
                <thead>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Appointment Code</th>
                    <th className="widgetLgTh">Patient</th>
                    <th className="widgetLgTh">Doctor</th>
                </tr>
                </thead>
                <tbody> 
                    {newAppointments.map((item, i) => (
                        <tr className="widgetLgTr" key={i}>
                    <td className="widgetLgUser">
                        <span className="widgetLgName">{item.code}</span>
                    </td>
                    <td className="widgetLgUser">
                        <span className="widgetLgName">{item.patientName}</span>
                    </td>
                    <td className="widgetLgUser">
                        <span className="widgetLgName">{item.doctorName}</span>
                    </td>
                </tr>
                    ))}
                
                {/* <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Frederick Akuffo</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgStatus Declined"><Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">George Osei</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgStatus Approved"><Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Hubert Boafo</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgStatus "><Button type="Pending"/>
                    </td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )
}