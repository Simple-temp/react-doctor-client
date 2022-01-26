import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentMain from '../AppoinmentMain/AppoinmentMain';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appointment = () => {

    const [selected, setSelected] = useState(new Date());

    const onChange = data =>{
        setSelected(data)
    }

    return (
        <div>
            <Navbar></Navbar>
            <AppoinmentMain onChange={onChange}></AppoinmentMain>
            <BookAppoinment date={selected}></BookAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;