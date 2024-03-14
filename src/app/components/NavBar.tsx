import Button from "./Button";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="p-2 smobileF:bg-red-400  smobileM:bg-green-400 ssm:bg-yellow-600 smd:bg-blue-500 text-white text-[0.8rem] sm:text-[2.4vmin] w-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-8 md:grid-cols-12 ">
      <div className="flex justify-start items-center row-start-1 sm:row-auto sm:col-span-1 md:col-span-2">
        <h1 className=""> Icon </h1>
      </div>
      <div className="flex pt-4 sm:pt-0 w-full justify-center items-center text-center col-span-2 sm:col-span-5 md:col-span-7 ">
        <ul className="flex gap-10 sm:flex-row md:flex-row sm:gap-10 md:gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download App</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-end items-center row-start-1 sm:row-auto sm:col-span-2 md:col-span-3 ">
        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
