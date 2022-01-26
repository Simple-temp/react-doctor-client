import React from 'react';

const AppointmentList = ({ appointment }) => {
    console.log(appointment)
    return (
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Gender</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Subject</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointment.map((appointment, index) =>
                        <tr>
                            <td>{appointment.name}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.service}</td>
                        </tr>
                    )

                }
            </tbody>
        </table>
    );
};

export default AppointmentList;