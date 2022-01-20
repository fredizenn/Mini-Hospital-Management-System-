import './App.css';
import Sidebar from './components/sidebar/SideBar';
import * as ReactDOM from "react-dom";
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newPage/NewUser';
import OPDStaff from './pages/staffOPD/OPDStaff';
import IPDStaff from './pages/staffIPD/IPDStaff';


function App() {
  return (
    <div><Topbar />
    <div className='container'>
      
      <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<App />}/>
      <Route index element={<Home />}/>      
     <Route path="users" element={<UserList />}/>
     <Route path="user" element={<User />}/>
     <Route path="newUser" element={<NewUser />}/>
     <Route path="opdStaff" element={<OPDStaff />} /> 
     <Route path="ipdStaff" element={<IPDStaff />} />

      </Routes>  
      </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
