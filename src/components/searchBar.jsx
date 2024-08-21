import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form className="w-[300px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="text-sm w-full p-2 rounded-lg bg-slate-800"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          <AiOutlineSearch />
        </button>
      </div>
      {/* <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl flex flex-col gap-2"></div> */}
    </form>
  );
};

export default SearchBar;
