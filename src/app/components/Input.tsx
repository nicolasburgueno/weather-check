import React from "react";

const Input: React.FC = () => {
  return (
    <div className="relative flex items-center text-center justify-center text-gray-600  max-h-[85px] ">
      <input
        className=" w-full bg-dpColor py-6 px-5 pr-16 rounded-lg text-sm focus:outline-none "
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-[1rem] mr-[6%]"
      >
        🔍
      </button>
    </div>
  );
};

export default Input;
