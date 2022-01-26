import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllDashboard = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-10">
                    <h1>AllDashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default AllDashboard;