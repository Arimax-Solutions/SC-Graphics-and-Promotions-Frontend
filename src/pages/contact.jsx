import React from "react";
import Form from '../components/form'
import FormBar from '../components/formbar'
import Location from '../components/location'


const Contact = () =>{

return (

    <div >
        <Form/>

        <FormBar/>
        <div>
 <div className="bg-gray-800 mt-24 py-16 px-6 sm:px-12 lg:px-20 text-white">
        <h2 className="text-center text-4xl font-bold mb-12">Get In Touch</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Location />
          <div className="sm:ml-12 mt-6 sm:mt-0">
            <p className="text-lg font-medium">SC Graphics and Promotions</p>
            <p className="text-base mt-2">123 Main Street, Colombo, Sri Lanka</p>
            <p className="text-base mt-2">Email: contact@scgraphics.com</p>
            <p className="text-base mt-2">Phone: +94 11 234 5678</p>
          </div>
        </div>
      </div>
        </div>
    </div>



);




};


export default Contact;
