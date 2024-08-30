import React from "react";
import Photo1 from '../assets/caft.png';
import Box from '../components/box';
import Tero from '../components/tero';
import Gallery from '../components/gallery';
import Location from '../components/location'

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${Photo1})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-extrabold text-5xl sm:text-6xl mb-4">About Us</h1>
          <p className="font-medium text-xl sm:text-2xl max-w-xl mx-auto">Delivering high-quality promotional products with advanced printing technologies.</p>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Who We Are</h2>
            <p className="font-serif text-gray-600 text-lg leading-relaxed">
              SC Graphics and Promotions has been at the forefront of product printing services for over eleven years. We proudly serve leading advertising firms, production companies, and promotion agencies across Sri Lanka. Our expertise lies in delivering high-quality promotional products using advanced printing technologies such as UV, Pad, Eco, and Screen printing.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">What We Do</h2>
            <p className="font-serif text-gray-600 text-lg leading-relaxed">
              In recent years, we've expanded our offerings by creating our own line of corporate gifts, which we now offer directly to both the end-user market and corporate clients. At SC Graphics and Promotions, we are committed to delivering unmatched quality and ensuring timely production for all our customers.
            </p>
          </div>
        </div>
      </div>
      <Box />
      <div className="pl-0">
        <Tero />
      </div>
      <Gallery />

    </>
  );
};

export default AboutUs;
