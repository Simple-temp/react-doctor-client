import React from 'react';
import "./ShowAllData.css"

const ShowAllData = ({ getdata }) => {
    return (
        <div>
            <table className='table table-borderless'>
                <thead>
                    <tr>
                        <th scope='col'>Sl</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Booking Date</th>
                        <th scope='col'>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getdata.map((getdata, index) =>
                            <tr>
                                <td>{index+1}</td>
                                <td>{getdata.name}</td>
                                <td>{getdata.gender}</td>
                                <td>{getdata.phone}</td>
                                <td>{getdata.service}</td>
                                <td>{getdata.email}</td>
                                <td>{new Date(getdata.BookingDate).toDateString()}</td>
                                <td>{new Date(getdata.createdDate).toDateString()}</td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllData;