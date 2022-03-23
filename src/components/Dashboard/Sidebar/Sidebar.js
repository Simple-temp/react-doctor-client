import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import "./Sidebar.css"

const Sidebar = () => {

    const [loggedInuser,setloggedInuser] = useContext(UserContext);
    const [ doctor , setDoctor ] = useState(false)

    useEffect(() => {
        fetch(`https://react-doctors-client.herokuapp.com/isDoctor`, {
            method: 'POST',
            body: JSON.stringify({ email: loggedInuser.email }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    return (
        <div className='sidebar'>
            <ul className='pt-5'>
                <li> <i class="fas fa-home"></i> <Link to="/" className='li'> Home </Link> </li>
                <li> <i class="fas fa-columns"></i> <Link to="/dashboard/appoinment" className='li'> Appointment </Link> </li>
                {
                   doctor && <div>
                       <li> <i class="fas fa-chart-line"></i> <Link to="/dashboard/alldashboard" className='li'> Dashboard </Link> </li>
                        <li> <i class="fas fa-users"></i><Link to="/dashboard/allpatients" className='li'> Patients </Link> </li>
                        <li> <i class="far fa-file-alt"></i><Link to="/dashboard/prescription" className='li pl-2'> Prescription </Link> </li>
                        <li> <i class="fas fa-user-plus"></i><Link to="/dashboard/doctor" className='li'> Add Doctor </Link> </li>
                        <li> <i class="fas fa-cog"></i><Link to="/dashboard/settings" className='li'> Setting </Link> </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;

/**isDoctor */