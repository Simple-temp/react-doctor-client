import React from 'react';
import "./Services.css"
import s1 from "../../../img/s1.png";
import s2 from "../../../img/s2.png";
import s3 from "../../../img/s3.png";
import ServicesData from '../ServicesData/ServicesData';

const Services = () => {

    const servicesData = [
        {
            img : s1,
            title : "Fluoride Treatment"
        },
        {
            img : s2,
            title : "Cavity Filling"
        },
        {
            img : s3,
            title : "Teeth Whitening"
        }
    ]

    return (
        <section className='services'>
            <div className='container mt-3 pt-5 p'>
                <p className='text-center'>Our Services</p>
                <h4 className='text-center'>Services We Provide</h4>
            </div>
            <div className="container text-center">
                <div className="row">
                    {
                        servicesData.map( data => <ServicesData data={data}></ServicesData> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;