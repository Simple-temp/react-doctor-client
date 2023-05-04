import React, { useEffect, useState } from 'react';
import ShowDoctorList from '../ShowDoctorList/ShowDoctorList';
import loading from "../../../img/loading.gif"
import "./Doctors.css"

const Doctors = () => {

    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        fetch(`https://doctor-ve5p.onrender.com/doctorscollection`)
        .then( res => res.json())
        .then( data => setDoctors(data))
    },[])


    return (
        <section className='doctors'>
            <div className='container mt-5 py-5'>
                <h4 className='text-center'>Our Doctors</h4>
                <div className="container mt-5 w-100">
                    <div className="row">
                        {
                            doctors.length === 0 ? <img style={{width:'270px'}} className='mx-auto' src={loading} alt="" /> : 
                            doctors.map( doctor => <ShowDoctorList doctors={doctor}></ShowDoctorList>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;