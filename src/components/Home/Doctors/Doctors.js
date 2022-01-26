import React from 'react';
import doctor from "../../../img/doctor-small.png"
import "./Doctors.css"

const Doctors = () => {
    return (
        <section className='doctors'>
            <div className='container mt-5 py-5'>
                <h4 className='text-center'>Our Doctors</h4>
                <div className="container mt-5 pt-5 d-flex justify-content-center w-75">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="doctor-box">
                                <div className="doctor-head">
                                    <img src={doctor} alt="" style={{ width: "400px", height: "auto", width: "100%", display: "block" }} />
                                </div>
                                <div className="doctor-body text-center mt-3">
                                    <p>Dr. caudi</p>
                                    <span><i class="fas fa-phone-alt"></i>+52 415 15155</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="doctor-box">
                                <div className="doctor-head">
                                    <img src={doctor} alt="" style={{ width: "400px", height: "auto", width: "100%", display: "block" }} />
                                </div>
                                <div className="doctor-body text-center mt-3">
                                    <p>Dr. caudi</p>
                                    <span><i class="fas fa-phone-alt"></i>+52 415 15155</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="doctor-box">
                                <div className="doctor-head">
                                    <img src={doctor} alt="" style={{ width: "400px", height: "auto", width: "100%", display: "block" }} />
                                </div>
                                <div className="doctor-body text-center mt-3">
                                    <p>Dr. caudi</p>
                                    <span><i class="fas fa-phone-alt"></i>+52 415 15155</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;