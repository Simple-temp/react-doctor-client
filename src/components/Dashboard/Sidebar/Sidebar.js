import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='pt-5'>
                <li> <i class="fas fa-chart-line"></i> <Link to="/dashboard/alldashboard" className='li'> Dashboard </Link> </li>
                <li> <i class="fas fa-columns"></i> <Link to="/dashboard/appoinment" className='li'> Appointment </Link> </li>
                <li> <i class="fas fa-users"></i><Link to="/dashboard/allpatients" className='li'> Patients </Link> </li>
                <li> <i class="far fa-file-alt"></i><Link to="/dashboard/prescription" className='li pl-2'> Prescription </Link> </li>
                <li> <i class="fas fa-cog"></i><Link to="/dashboard/settings" className='li'> Setting </Link> </li>
            </ul>
        </div>
    );
};

export default Sidebar;