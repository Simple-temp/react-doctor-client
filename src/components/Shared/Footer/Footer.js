import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer mt-5 pt-5'>
            <div className="container d-flex justify-content-center">
                <div className="row w-75">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ul>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ul>
                            <h6>Services</h6>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ul>
                            <h6>Oral health</h6>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ul>
                            <h6>Our Address</h6>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                            <li>Check up</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center pb-3'>Copyright {(new Date().getFullYear())} All Right Reserved</p>
        </footer>
    );
};

export default Footer;