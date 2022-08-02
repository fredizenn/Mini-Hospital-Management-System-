import './App.css';
import Sidebar from './components/sidebar/SideBar';
import * as ReactDOM from "react-dom";
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newPage/NewUser';
import Doctors from './pages/medicalStaff/Doctors';
import Patients from './pages/patients/Patients';
import Nurses from './pages/medicalStaff/Nurses';
import LabTechnicians from './pages/medicalStaff/LabTechnician';
import DoctorsForm from './pages/medicalStaff/Forms/Doctors/DoctorsForm';
import LabTechniciansForm from './pages/medicalStaff/Forms/LabTechnicians/LabTechniciansForm';
import NursesForm from './pages/medicalStaff/Forms/Nurses/NursesForm';
import PatientForm from './pages/patients/Forms/PatientForm';
import Appointments from './pages/appointments/Appointments';
import AppointmentForm from './pages/appointments/Forms/AppointmentForm';
import OutPatients from './pages/patients/OutPatients/OutPatients';
import TestRequest from './pages/laboratory/LabTestRequest/TestRequest';
import InPatients from './pages/patients/InPatients/InPatients';
import Prescriptions from './pages/pharmacy/Prescriptions';
import Consultations from './pages/consultations/Consultations';
import ConsultationsForm from './pages/consultations/forms/ConsultationsForm';
import LabTestResults from './pages/laboratory/LabTestResults/LabTestResults';
import TestResultsForm from './pages/laboratory/Forms/TestResultForm/TestResultsForm';
import TestRequestForm from './pages/laboratory/Forms/TestRequestForm/TestRequestForm';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Topbar />
      <div className='container'>

      <Sidebar />
      <Routes>
        <Route path="/" element={<App />}/>
      <Route index element={<Home />}/>      
     <Route path="users" element={<UserList />}/>
     <Route path="user" element={<User />}/>
     <Route path="newUser" element={<NewUser />}/>
     <Route path="medicalStaff" element={<Doctors />} /> 
     <Route path="patients" element={<Patients />} />
     <Route path='nurses' element={<Nurses />} />
     <Route path='labTechnicians' element={<LabTechnicians />}/>
     <Route path='newDoctor' element={<DoctorsForm />}/>
     <Route path='newLabTechnician' element={<LabTechniciansForm />}/>
     <Route path='newNurse' element={<NursesForm />} />
     <Route path='newPatient' element={<PatientForm />} />
     <Route path='appointments' element={<Appointments />}/>
     <Route path='appointmentForm' element={<AppointmentForm />}/>
     <Route path='outpatients' element={<OutPatients />} />
     <Route path='inpatients'element={<InPatients />} />
     <Route path='testRequest' element={<TestRequest />} />
     <Route path='prescriptions' element={<Prescriptions />} />
     <Route path='consultations' element={<Consultations />} />
     <Route path='newConsultation' element={<ConsultationsForm />} />
     <Route path='labTestResults' element={<LabTestResults />} />
     <Route path='/updateConsultation/:id' element={<ConsultationsForm />} />
     <Route path="testRequestForm" element={<TestRequestForm />} />
     <Route path="testResultForm" element={<TestResultsForm />} />

      </Routes>  
      </div>
      </BrowserRouter>
        </div>
   
  );
}



export default App;
