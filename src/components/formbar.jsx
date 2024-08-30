import React from 'react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.478 0 10s4.477 10 10 10 10-4.478 10-10S15.523 0 10 0zm2 15l-2-2-2 2V8h4v7zm0-9H8V4h4v2z"/>
        </svg>
        <h3 className="text-gray-900 font-semibold text-lg mt-4">SC Graphics and Promotions</h3>
        <p className="text-gray-600 mt-2">178/A, Palanwatta, Pannipitiya, Colombo, Sri Lanka 10230</p>
      </div>
      
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.478 0 10s4.477 10 10 10 10-4.478 10-10S15.523 0 10 0zm2 15l-2-2-2 2V8h4v7zm0-9H8V4h4v2z"/>
        </svg>
        <h3 className="text-gray-900 font-semibold text-lg mt-4">How can we help?</h3>
        <p className="text-gray-600 mt-2">scgraphics6@gmail.com</p>
      </div>

      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.478 0 10s4.477 10 10 10 10-4.478 10-10S15.523 0 10 0zm2 15l-2-2-2 2V8h4v7zm0-9H8V4h4v2z"/>
        </svg>
        <h3 className="text-gray-900 font-semibold text-lg mt-4">Contact Us Directly</h3>
        <p className="text-gray-600 mt-2">Mobile: +94 71 535 9284</p>
        <p className="text-gray-600">Shop: +94 11 284 0017</p>
      </div>

      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.478 0 10s4.477 10 10 10 10-4.478 10-10S15.523 0 10 0zm2 15l-2-2-2 2V8h4v7zm0-9H8V4h4v2z"/>
        </svg>
        <h3 className="text-gray-900 font-semibold text-lg mt-4">Business Hours</h3>
        <p className="text-gray-600 mt-2">Monday - Friday: 9am to 5pm</p>
        <p className="text-gray-600">Saturday: 9am to 2pm</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>
    </div>
  );
}

export default ContactInfo;
