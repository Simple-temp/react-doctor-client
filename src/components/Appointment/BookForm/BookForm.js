import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import "./BookForm.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const BookForm = ({ modalIsOpen, closeModal, bookSubject, date }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
            data.service = bookSubject;
            data.BookingDate = date;
            data.createdDate = new Date()

            fetch(`http://localhost:4000/postappointment`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' }
            })
                .then((res) => res.json())
                .then((success) => {
                    alert("Appointment book successfully")
                    console.log(success)
                    closeModal()
                });
    };

    return (
        <div className='bookform'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 className='text-center h4'>{bookSubject}</h4>
                <p className='text-center'>On, {date.toDateString()}</p>
                {/* <button onClick={closeModal}>close</button> */}
                <form onSubmit={handleSubmit(onSubmit)} className='px-5'>

                    <select {...register("gender")} name="gender" className='w-100 fields'>

                        <option value="">Seclect Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">Others</option>

                    </select>

                    <input {...register("name", { required: true })} name="name" placeholder='Your Name' className='w-100 fields' />
                    {errors.name && <span>This field is required</span>}

                    <input {...register("phone", { required: true })} name="phone" placeholder='Phone Number' className='w-100 fields' />
                    {errors.phone && <span>This field is required</span>}

                    <input {...register("email", { required: true })} name="email" placeholder='Email' className='w-100 fields' />
                    {errors.email && <span>This field is required</span>}

                    <input type="submit" value="Send" className='btn btn-primary mt-3' />
                </form>
            </Modal>
        </div>
    );
};

export default BookForm;