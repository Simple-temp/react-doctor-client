import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import PatientInfo from '../PatientInfo/PatientInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Care></Care>
            <Appoinment></Appoinment>
            <PatientInfo></PatientInfo>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;