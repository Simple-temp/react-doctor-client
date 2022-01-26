import React from 'react';
import "./PatientInfo.css"
import people1 from "../../../img/people-1.png";
import people2 from "../../../img/people-2.png";
import people3 from "../../../img/people-3.png";
import Patients from '../Patients/Patients';

const PatientInfo = () => {

    const patients = [
        {
            img: people1,
            name: "Winson Harry",
            from: "California"
        },
        {
            img: people2,
            name: "Winson Harry",
            from: "California"
        },
        {
            img: people3,
            name: "Winson Harry",
            from: "California"
        },
    ]

    return (
        <section className='patientInfo mt-5 py-5'>

            <div className="container">
                <h4>Testimonial</h4>
                <p className='testimonial-p'>What's Our Patients <br /> Says</p>
            </div>
            <div className="container d-flex justify-content-center mt-5">
                <div className="row w-75">
                    {
                        patients.map(patient => <Patients patientsInfo={patient} ></Patients>)
                    }
                </div>
            </div>

        </section>
    );
};

export default PatientInfo;