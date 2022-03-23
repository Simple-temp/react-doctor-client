import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ShowPrescription from '../ShowPrescription/ShowPrescription';

const Prescription = () => {

    const [getdata, setGetdata] = useState([])

    useEffect(() => {
        fetch(`https://react-doctors-client.herokuapp.com/getallpatientsdata`)
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
                    <h5 className='py-3 h5'>Prescription</h5>
                    <ShowPrescription getdata={getdata}></ShowPrescription>
                </div>
            </div>
        </div>
    );
};

export default Prescription;