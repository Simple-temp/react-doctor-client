import React from 'react';
import BookForm from '../BookForm/BookForm';
import "./BookInfo.css"

const BookInfo = ({book , date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
  
    return (
        <div className='col-lg-4'>
            <div className="book-box text-center p-4 m-4">
                <h4>{book.subject}</h4>
                <h5>{book.time}</h5>
                <p>{book.sit}</p>
                <button onClick={openModal} className='btn btn-primary mt-2'>BOOK APPOINTMENT</button>
                <BookForm modalIsOpen={modalIsOpen} closeModal={closeModal} bookSubject={book.subject} date={date}></BookForm>
            </div>
        </div>
    );
};

export default BookInfo;