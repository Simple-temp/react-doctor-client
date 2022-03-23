import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ShowAllData from '../ShowAllData/ShowAllData';
import "./AllPatients.css"

const AllPatients = () => {

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
                    <h5 className='py-3 h5'>Patients</h5>
                    <ShowAllData getdata={getdata}></ShowAllData>
                </div>
            </div>
        </div>
    );
};

export default AllPatients;
