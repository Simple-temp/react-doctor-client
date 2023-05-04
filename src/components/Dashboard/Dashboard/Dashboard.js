import React, { useContext, useEffect, useState } from 'react';
import AppointmentsDate from '../AppointmentsDate/AppointmentsDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Dashboard.css"
import { UserContext } from '../../../App';

const Dashboard = () => {

    const [loggedInuser,setloggedInuser] = useContext ( UserContext )

    const [selected, setSelected] = useState(new Date());

    const [appointmentDate , setappointmentDate] = useState([])

    const onChange = date =>{
        setSelected(date)
    }

    useEffect(()=>{
        
        fetch(`https://doctor-ve5p.onrender.com/postappointmentbydate`, {
            method: 'POST',
            body: JSON.stringify({ date:selected, email : loggedInuser.email }),
            headers: { 'Content-type': 'application/json' }
        })
            .then((res) => res.json())
            .then((success) => setappointmentDate(success));

    },[selected])

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-5 px-5">
                    <h5 className='py-5 h5'>Appointments</h5>
                        <Calendar className="w-100 calender"
                            onChange={onChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-lg-5 third pt-5">
                        <AppointmentsDate appointmentDate={appointmentDate}></AppointmentsDate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;