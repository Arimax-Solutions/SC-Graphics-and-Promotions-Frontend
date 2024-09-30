import React from "react";
import BrowseCategories from '../components/catgry'
import Item from '../components/item'
import Item1 from '../assets/item1.jpeg'
import Item2 from '../assets/item2.jpeg'

const Shop = () => {
  return (
    <div className="pt-24">
      <div className="m-4 px-4 lg:px-0">
        <BrowseCategories />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
          <Item img={Item1} price="Rs.520.00" text="Key tags wooden" />
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
