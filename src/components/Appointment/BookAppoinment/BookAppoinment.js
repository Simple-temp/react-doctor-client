import React from 'react';
import BookInfo from '../BookInfo/BookInfo';
import "./BookAppoinment.css"

const BookAppoinment = ({date}) => {

    const availableBook = [
        {
            id : "1",
            subject : "Teeth Cleaning",
            time : "8:00 AM - 9:00 AM",
            sit : "10 space available",
        },
        {
            id : "2",
            subject : "Cosmetic Dentisry",
            time : "8:00 AM - 9:00 AM",
            sit : "10 space available",
        },
        {
            id : "3",
            subject : "Teeth Orthodontics",
            time : "8:00 AM - 9:00 AM",
            sit : "10 space available",
        },
        {
            id : "4",
            subject : "Cavity Protection",
            time : "8:00 AM - 9:00 AM",
            sit : "10 space available",
        },
        {
            id : "5",
            subject : "Teeth Cleaning",
            time : "8:00 AM - 9:00 AM",
            sit : "10 space available",
        },
        {
            id : "6",
            subject : "Teeth Cleaning",
            time : "8:00 AM - 9:00 AM",
            sit : "10 space available",
        },

    ]

    return (
        <section className='bookappointment'>
            <h4 className='text-center'>Available Appointments on {date.toDateString() }</h4>
            <div className="container mt-5">
                <div className="row">
                    {
                        availableBook.map(book => <BookInfo book={book} date={date}></BookInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppoinment;