import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Setting = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-10 second">
                    <h4 className='text-center d-flex align-items-center justify-content-center text-secondary'>No settings are available</h4>
                </div>
            </div>
        </div>

    );
};

export default Setting;