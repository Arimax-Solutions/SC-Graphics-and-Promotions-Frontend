import React from 'react';
import wallp from '../assets/wall.jpeg';
import design from '../assets/SCicon.png';
import ThemeProvider from '../components/box';
import Item from '../components/item';
import BrowseCategories from '../components/categorie';
import Topdeal from '../components/topdeal';
import Button from '@mui/material/Button';
import { LuPhoneCall } from "react-icons/lu";
import Item1 from '../assets/item1.jpeg';
import Item2 from '../assets/item2.jpeg';

const Welcome = () => {
  return (
    <>
      <div className="relative w-full h-96">
        {/* Background image */}
        <img className="h-full w-full object-cover" src={wallp} alt="Background" />

        {/* Text and Image content */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 flex items-center justify-between px-8">
          <div className="text-left text-white">
            <h1 className="font-bold text-base sm:text-lg lg:text-4xl mb-2">
              Seeking Experts in Graphics & Promotions?
            </h1>
            <h2 className="font-normal text-sm sm:text-md lg:text-3xl">
              Let’s Make Your Vision Come Alive!
            </h2>
          </div>
          <div>
            <img
              src={design}
              alt="Design Overlay"
              style={{
                height: '315px',
                width: '436px',
              }}
            />
          </div>
        </div>
      </div>
      
      <div>
        <ThemeProvider />
      </div>
      
      <div className="flex flex-col lg:flex-row m-4 px-4 lg:px-0">
        {/* Center the BrowseCategories component on mobile */}
        <div className="lg:w-1/4 lg:mr-6 mb-6 lg:mb-0 flex justify-center lg:justify-start">
          <BrowseCategories />
        </div>
        
        {/* Items grid with padding on the right and left sides */}
        <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:pl-6 lg:pr-6">
          <Item img={Item1} price="Rs.120.00" text="Key tags wooden" />
          <Item img={Item2} price="Rs.150.00" text="Leather Key Holder" />
          <Item img={Item1} price="Rs.200.00" text="Custom Mug" />
          <Item img={Item2} price="Rs.120.00" text="Key tags wooden" />
          <Item img={Item1} price="Rs.150.00" text="Leather Key Holder" />
          <Item img={Item2} price="Rs.200.00" text="Custom Mug" />
          <Item img={Item1} price="Rs.120.00" text="Key tags wooden" />
          <Item img={Item2} price="Rs.150.00" text="Leather Key Holder" />
          <Item img={Item1} price="Rs.200.00" text="Custom Mug" />
          <Item img={Item2} price="Rs.120.00" text="Key tags wooden" />
          <Item img={Item1} price="Rs.150.00" text="Leather Key Holder" />
          <Item img={Item2} price="Rs.200.00" text="Custom Mug" />
          {/* Add more items as needed */}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 pt-10 pl-5">Top Deals</h1>
        <Topdeal />
      </div>

      <h1 className="text-center text-3xl">Your Vision, Our Expertise  —  Let's Connect Today!</h1>
      <div className="flex items-center justify-center h-20">
        <Button className="text-center" variant="contained" disableElevation>
        <LuPhoneCall className="mr-2" />
          Contact Us
        </Button>
      </div>
    </>
  );
};

export default Welcome;
