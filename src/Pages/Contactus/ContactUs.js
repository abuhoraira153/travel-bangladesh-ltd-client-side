import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className = "container">
            <h2 className = "text-primary mt-5">Contact us?</h2>
            <div className="row my-5">
                <div className="col-lg-7 col-12">
                 <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
            </div>
            <div className="col-lg-4 col-12 bg-info quick-contact contact-text">
                <h3 className = "mt-5">Contact</h3>
                <br />
                <h6>If you have any questions simply use the following contact details.</h6>
                <br />
                <h6>7/10 Gulshan, Dhaka, Bangladesh</h6>
                <br />
                <h6>Hot-line : +8801789-253647</h6>
                <br />
                <h6>Email : <a href="#">travelbd@gmail.com</a></h6>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;