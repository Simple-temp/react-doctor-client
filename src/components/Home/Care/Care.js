import React from 'react';
import care from "../../../img/care.png"
import "./Care.css"

const Care = () => {
    return (
        <section className='care py-5'>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-lg-5 d-flex justify-content-end pr-3">
                        <img src={care} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="care-box">
                            <h3 className='mb-4'>Exceptional Dental <br /> Care, On Your teams</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem cupiditate natus nesciunt placeat sit reprehenderit numquam harum ut porro enim cum dolorem quis fuga provident ipsum voluptates quos, fugiat earum quaerat tempore iste temporibus. Odio maxime, nisi voluptatem, vero expedita natus autem ratione eum non illum minus tenetur architecto optio repellat facilis quia necessitatibus labore beatae voluptates dicta numquam? Provident, eligendi vel in id quia dolorem? Quia quibusdam impedit nostrum alias perferendis ab excepturi fuga corrupti ipsum debitis. Ab, sequi praesentium tempore accusamus asperiores rerum dolore dolorem veritatis dolor molestias eveniet nemo ex ratione architecto id voluptas, nobis unde!</p>
                            <button className='btn btn-primary mt-4'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Care;