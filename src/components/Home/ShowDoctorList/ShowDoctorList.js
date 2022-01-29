import React from 'react';
import "./ShowDoctorList.css"

const ShowDoctorList = ({ doctors }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="doctor-box">
                <div className="doctor-head">
                    <img src={`http://localhost:4000/${doctors.img}`} alt="" style={{ width: "400px",height: "400px", display: "block" }} />
                </div>
                <div className="doctor-body text-center mt-3">
                    <p>{doctors.title}</p>
                    <span><i class="fas fa-phone-alt"></i>+52 415 15155</span>
                </div>
            </div>
        </div>
    );
};

export default ShowDoctorList;

