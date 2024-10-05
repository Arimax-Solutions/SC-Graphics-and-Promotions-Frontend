import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from "../assets/form.png";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zwvnv1l', 'template_mxp7d3b', form.current, '5CPq4hoYCUP2SOPnZ')
            .then((result) => {
                console.log(result.text);
                alert("Message successfully sent!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's get in touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input 
                            type="text" 
                            name="first_name"
                            placeholder="First Name" 
                            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input 
                            type="text" 
                            name="contact_number"
                            placeholder="Contact Number" 
                            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <input 
                        type="email" 
                        name="user_email"
                        placeholder="Your Email Address" 
                        className="border rounded-lg p-2 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input 
                        type="text" 
                        name="subject"
                        placeholder="Subject" 
                        className="border rounded-lg p-2 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea 
                        name="message"
                        placeholder="Message" 
                        className="border rounded-lg p-2 w-full mt-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white font-bold p-2 w-full mt-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="hidden sm:flex items-center justify-center bg-blue-50 rounded-lg shadow-lg w-1/2 ml-8">
                <img 
                    src={Form}
                    alt="Contact Us" 
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}

export default ContactForm;
