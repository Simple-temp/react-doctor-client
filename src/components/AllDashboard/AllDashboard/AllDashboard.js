import React, { useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import DashboardItem from '../DashboardItem/DashboardItem';

const AllDashboard = () => {

    const [getdata, setGetdata] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/getallpatientsdata`)
            .then(res => res.json())
            .then(data => setGetdata(data))
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-10 second">
                    <h5 className='py-3 h5'>Dashboard</h5>
                    <DashboardItem getdata={getdata}></DashboardItem>
                </div>
            </div>
        </div>
    );
};

export default AllDashboard;