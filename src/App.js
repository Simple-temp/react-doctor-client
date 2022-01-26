import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllDashboard from "./components/AllDashboard/AllDashboard/AllDashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Prescription from "./components/Prescription/Prescription/Prescription";
import Setting from "./components/Setting/Setting/Setting";

export const UserContext = createContext()

function App() {

  const [loggedInUser, setloggedInUser] = useState({})


  return (
    <div className="App">

      <UserContext.Provider value={[loggedInUser, setloggedInUser]}>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard/alldashboard" element={<AllDashboard/>} />
            <Route path="/dashboard/appoinment" element={<Dashboard/>} />
            <Route path="/dashboard/allpatients" element={<AllPatients/>} />
            <Route path="/dashboard/prescription" element={<Prescription/>} />
            <Route path="/dashboard/settings" element={<Setting/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
