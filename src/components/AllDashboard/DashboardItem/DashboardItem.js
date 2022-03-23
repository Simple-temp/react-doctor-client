import React from 'react';
import "./DashboardItem.css"

const DashboardItem = ({ getdata }) => {
    return (
        <div>
            <div className="container pt-4 inner-width">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-box bg-danger p-3 m-2 d-flex">
                            <span>09</span>
                            <p>Pending <br /> Appointments</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-box bg-primary p-3 m-2 d-flex">
                            <span>19</span>
                            <p>Today's <br /> Appointments</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-box bg-success p-3 m-2 d-flex">
                            <span>34</span>
                            <p>Total <br /> Appointments</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-box bg-warning p-3 m-2 d-flex">
                            <span>78</span>
                            <p>Total <br /> Patients</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-4 mt-4">
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                            <th scope='col'>Sl</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Contact</th>
                            <th scope='col'>Prescription</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map((getdata, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{new Date(getdata.createdDate).toDateString()}</td>
                                    <td>{getdata.name}</td>
                                    <td>{getdata.phone}</td>
                                    <td><button className='btn btn-primary'>View</button></td>
                                    <td>
                                        <button className='btn btn-info mr text-white'>Pending</button>
                                        <button className='btn btn-warning'><i class="fas fa-pencil-alt"></i></button>
                                    </td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardItem;