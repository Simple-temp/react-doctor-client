import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';

const AppointmentsDate = ({appointmentDate}) => {
    console.log(appointmentDate)
    return (
        <div>
            {
                appointmentDate.length ? 
                <AppointmentList key={appointmentDate._id} appointment={appointmentDate}></AppointmentList>
                :
                <p className='text-center text-secondary'>No appointments at this date ..</p>
            }
        </div>
    );
};

export default AppointmentsDate;