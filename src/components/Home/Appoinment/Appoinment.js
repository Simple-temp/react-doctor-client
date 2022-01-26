import React from 'react';
import "./Appoinment.css"
import doctor from "../../../img/doctor.png"

const Appoinment = () => {
    return (
        <section className='app'>
            <div className="container bg">
                <div className='appoinment'>
                    <div className="row">
                        <div className="col-lg-5 d-flex justify-content-center">
                            <img src={doctor} alt="" className='img' />
                        </div>
                        <div className="col-lg-7 text-white">
                            <div className="ap-box">
                                <p className='ap my-3'>Appoinment</p>
                                <h3 className='mb-4'>Make an appoinment <br /> Today</h3>
                                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam iure, perspiciatis hic culpa impedit. Necessitatibus optio accusantium eum?</p>
                                <button className='btn btn-primary mt-4'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;