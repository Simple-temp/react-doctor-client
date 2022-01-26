import React from 'react';
import "./BlogInfo.css"

const BlogInfo = ({ blog }) => {
    return (
        <div className='col-lg-4'>
            <div className="blog-box">
                <div className="blog-head  d-flex align-items-center">
                    <img src={blog.img} alt="" style={{ width: "55px", height: "auto", borderRadius: "50px" }} />
                    <div className="b-head-info">
                        <p>{blog.name}</p>
                        <span>{blog.date}</span>
                    </div>
                </div>
                <div className="blog-body">
                    <h5>{blog.title}</h5>
                </div>
                <div className="blog-footer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ea dolore deleniti aperiam in mollitia sed voluptatem esse hic magnam.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;