import React from 'react';

const ShowPrescription = ({ getdata }) => {
    return (
        <div>
            <table className='table table-borderless'>
                <thead>
                    <tr>
                        <th scope='col'>Sl</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Prescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getdata.map((getdata, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{getdata.createdDate}</td>
                                <td>{getdata.name}</td>
                                <td>{getdata.phone}</td>
                                <td><button className='btn btn-primary'>View</button></td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowPrescription;