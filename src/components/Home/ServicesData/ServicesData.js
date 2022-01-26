import React from 'react';

const ServicesData = (props) => {
    const {img,title} = props.data
    return (
        <div className='col-lg-4 mt-5'>
            <img src={img} alt="" style={{width:"56px"}} />
            <h5 className='my-3' style={{color:"#3A4256"}}>{title}</h5>
            <p className='mt-2 px-5' style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis harum quae! Lorem, ipsum dolor.</p>
        </div>
    );
};

export default ServicesData;