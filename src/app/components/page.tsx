import Button from "./Button";
import NavBar from "./NavBar";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="flex flex-col justify-center  text-center w-screen h-screen bg-gray-700">
      {/* <Button /> */}
      <NavBar />
    </div>
  );
};

export default page;
