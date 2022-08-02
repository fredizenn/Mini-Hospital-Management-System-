// import "./widgetSm.css"
// import {Visibility} from "@mui/icons-material"
// import { useEffect, useState } from "react";

// export default function WidgetSm() {

//  const [newDoctors, setNewDoctors] = useState([]);

//  useEffect(() => {
//     fetch("http://localhost:51955/api/totals/getNewDoctors")
//     .then((data) => data.json())
//     .then((data) => setNewDoctors(data))
// }, [])
//     return (
//         <div className="widgetSm">
//             <span className="widgetSmTitle">New Doctors<button className="widgetSmButton">
//                         <Visibility className="widgetSmIcon"/>
//                         View All
//                         </button> </span>
//            <table className="widgetSmTable">
//             <thead>
//                 <tr className="widgetSmTr">
//                     <th className="widgetSmTh">Doctor Code</th>
//                     <th className="widgetSmTh">Doctor Name</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {newDoctors.map((item,i) => {
//                     <tr className="widgetSmTr" key={i}>
//                 <td className="widgetSmName">{item.doctorCode}</td>
//                 <td className="widgetSmName">{item.name}</td>
//                 </tr>
//                 })}
                
//             </tbody>
//             </table> 
//             </div>
//     )
// }