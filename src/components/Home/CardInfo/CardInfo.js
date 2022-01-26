import React from 'react';
import Info from '../Info/Info';

const CardInfo = () => {

    const cardInfo = [
        {
            icon: <i class="fas fa-clock"></i>,
            title: "Opening Hours",
            description: "Lorem ipsum dolor sit amet consectetur.",
            background: "primary"
        },
        {
            icon: <i class="fas fa-phone"></i>,
            title: "Call Us Now",
            description: "Lorem ipsum dolor sit amet consectetur.",
            background: "dark"
        },
        {
            icon: <i class="fas fa-map-marker-alt"></i>,
            title: "Visit Our Location",
            description: "Lorem ipsum dolor sit amet consectetur.",
            background: "primary"
        }
    ]

    return (
        <div className='container'>
            <div className="row">
                {
                    cardInfo.map(info => <Info info={info} ></Info>)
                }
            </div>
        </div>
    );
};

export default CardInfo;