import React, { useState } from 'react';
import "./Main.css";
import chair from "../../../img/chair.png"
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Main = () => {

    return (
        <main className='main d-flex align-items-center'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5">
                        <h1>Your New Smile  <br /> Start Here </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, tempore! Sed, at! Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
                        <Link to="/appoinment"><button className='btn btn-primary mt-4'>Get Appointment</button></Link>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <img src={chair} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;