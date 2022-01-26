import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <section className='contact mt-5 pt-5'>
            <div className="container">
                <div className="row">
                    <h4 className='text-center'>contact us</h4>
                    <p className='text-center c'>Always Contact with us</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="col-lg-8 mx-auto">
                    <form action="">
                        <input type="text" name="" id="email" placeholder='Email*' className='w-100 d-block' />
                        <input type="text" name="" id="subject" placeholder='Subject*' className='w-100 d-block' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message*' className='w-100 d-block'></textarea>
                        <input type="submit" value="SUBMIT" className='d-block mx-auto mt-4 btn btn-primary' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;