import React from 'react';
import "./Info.css"

const Info = (props) => {
    const { title, icon, description, background } = props.info
    return (
        <div className='col-lg-4 text-white'>
            <div className={`info-wrapper d-flex justify-content-center info-${background}`}>
                <div className="icon-box">
                    <p>{icon}</p>
                </div>
                <div className="info-box">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Info;