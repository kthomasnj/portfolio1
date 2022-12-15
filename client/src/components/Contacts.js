import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "O2VAnYaVKsni-XN7U";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Please fill out the form and describe your project needs and I will contact you as soon as possible.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form describing your project needs and I will contact you as soon as possible.</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    id="name"
                                    type="text"
                                    className='form-control'
                                    placeholder='Name'
                                    name="name"
                                />
                                {/* ref={
                                        register({
                                            required: "Please enter your name.",
                                            maxLenght: {
                                                value: 20,
                                                message: "Please enter a name with fewer than 20 characters"
                                            }
                                        })
                                    } */}
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                                {errors.name && errors.name.message}
                            </span> */}
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    id="phone"
                                    type="text"
                                    className='form-control'
                                    placeholder='Phone Number'
                                    name="phone"
                                />
                                <div className="line"></div>
                            </div>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className='form-control'
                                    placeholder='Email'
                                    name="email"
                                />
                                <div className="line"></div>
                            </div>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className='form-control'
                                    placeholder='Subject'
                                    name="subject"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    id="description"
                                    type="text"
                                    className='form-control'
                                    placeholder='Please briefly describe your project...'
                                    name="description"
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
