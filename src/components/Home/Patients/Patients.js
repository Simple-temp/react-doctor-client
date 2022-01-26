import React from 'react';
import "./Patients.css"

const Patients = (props) => {
    const { name, img, from } = props.patientsInfo;
    return (
        <div className='col-lg-4'>
            <div className="patinetsBox">
                <div className="patientBody">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero officiis illum, velit cum asperiores similique eveniet itaque mollitia facere vitae dolor odio eos </p>
                </div>
                <div className="footer d-flex align-items-center">
                    <img src={img} alt="" style={{ width: "55px", height: "auto", borderRadius: "50px" }} />
                    <div className="p-info">
                        <p>{name}</p>
                        <span>{from}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;