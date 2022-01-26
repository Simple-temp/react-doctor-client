import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import people1 from "../../../img/people-1.png";
import people2 from "../../../img/people-2.png";
import people3 from "../../../img/people-3.png";
import "./Blog.css"

const Blog = () => {

    const blog = [
        {
            img : people1,
            name : "Dr. caudi",
            date : "23 April 2019",
            title : "2 times of brush in a can keep you healthy"
        },
        {
            img : people2,
            name : "Dr. caudi",
            date : "23 April 2019",
            title : "2 times of brush in a can keep you healthy"
        },
        {
            img : people3,
            name : "Dr. caudi",
            date : "23 April 2019",
            title : "2 times of brush in a can keep you healthy"
        }
    ]


    return (
        <section className='blog mt-5 py-5'>
            <div className="container">
                <h4 className='text-center'>Our Blog</h4>
                <p className='text-center b'>From Our Blog News</p>
            </div>
            <div className="container mt-5 pt-2 d-flex justify-content-center w-75">
                <div className="row">
                    {
                        blog.map( blog => <BlogInfo blog={blog}></BlogInfo> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;