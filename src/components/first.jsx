import React from 'react';

const Header = ({ title, imageSrc, description }) => {
  return (
    <div >
      <h1 className="text-2xl font-bold font-serif pb-4 ">{title}</h1>
      <div className="flex flex-col md:flex-row items-start md:justify-between bg-white ">
        <div className="md:w-1/2">
          <img src={imageSrc} alt="Graphic Design" className="w-4/5 h-auto"/>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg  text-gray-500 leading-loose md:text-lg md:leading-loose">
            {description}
          </p>
          <div className="flex mt-6 space-x-4">
            <button className="bg-blue-800 text-white px-6 py-2 rounded">Contact Us</button>
            <button className="bg-orange-600 text-white px-6 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
