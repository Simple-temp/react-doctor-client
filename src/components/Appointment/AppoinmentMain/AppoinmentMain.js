import React from 'react';
import chair from "../../../img/chair.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppoinmentMain = ({onChange}) => {
    return (
        <main className='main d-flex align-items-center'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5">
                        <h1 className='pb-3'>Appointment</h1>
                        <Calendar
                            onChange={onChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <img src={chair} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppoinmentMain;