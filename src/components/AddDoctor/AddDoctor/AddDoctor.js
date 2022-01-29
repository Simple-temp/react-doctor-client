import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AddNow from '../AddNow/AddNow';

const AddDoctor = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-5 px-5">
                        <h5 className='py-5 h5'>Add a doctor</h5>
                        <AddNow></AddNow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;