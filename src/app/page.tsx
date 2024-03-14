"use client";

import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import Image from "next/image";
import Input from "./components/Input";
import NavBar from "./components/NavBar";
import Sun from "../assets/icons/Sun.png";

let array = ["", "", ""];
export default function Home() {
  return (
    <main className="home-container mobileF:overflow-scroll lg:overflow-hidden">
      <div className="w-11/12 mx-auto h-screen flex flex-col items-center">
        <NavBar />
        <div className="max-w-[778px] max-h[130px] flex items-center justify-center text-center text-[4vmin] font-medium mt-[20px] mb-2 text-white">
          <h1>
            Seeing the weather of the whole world <br /> with{" "}
            <span className="text-blue-400">Dark Weather!</span>
          </h1>
        </div>
        {/* start input search filtros */}
        <div className="items-center w-full max-h-[105px] flex flex-col mb-80 gap-6 mobileL:mb-44 md:flex-row md:pt-2 lg:justify-between lg:mb-12 md:mb-24">
          <div className="w-full sm:max-w-[358px]">
            <Input />
          </div>
          <div className="w-full grid grid-rows-2 rounded-3xl px-6 bg-dtColor py-3 text-center items-center lg:flex lg:justify-between lg:w-[581px]">
            <p className="text-2xl text-white row-span-1 lg:flex lg:justify-start">
              Filters
            </p>
            <div className="sm:flex sm:justify-between row-span-1 lg:justify-end lg:gap-8">
              <select className=" rounded-2xl max-w-[154px] max-h-[75px] bg-dtColor border border-gray-400 text-xl text-white px-1 py-4">
                <option
                  className="bg-red-300 text-green-400"
                  value=""
                  selected
                  hidden
                >
                  Select
                </option>
                <option value="">Coldest</option>
                <option value="">Coldest</option>
                {/* <option value="">Select a filter 2</option> */}
              </select>
              <select className="rounded-2xl max-w-[154px] max-h-[75px] bg-dtColor border border-gray-400 text-xl text-white px-1 py-4">
                <option
                  className="bg-red-300 text-green-400"
                  value=""
                  selected
                  hidden
                >
                  Select
                </option>
                <option value="">10°c - 20°c</option>
                <option value="">Coldest</option>
                {/* <option value="">Select a filter 2</option> */}
              </select>
              <select className=" rounded-2xl max-w-[154px] max-h-[75px] bg-dtColor border border-gray-400 text-xl text-white px-1 py-4">
                <option
                  className="bg-red-300 text-green-400"
                  value=""
                  selected
                  hidden
                >
                  Select
                </option>
                <option value="">Rainy</option>
                <option value="">Coldest</option>
                {/* <option value="">Select a filter 2</option> */}
              </select>
            </div>
          </div>
        </div>
        {/* end input search filtros */}
        {/* start card container */}
        <div className="w-full h-auto mt-10 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-cols-auto mobileM:gap-2 sm:gap-2 md:gap-10 pb-4">
          {array.map((e: any, i: any) => (
            <div
              key={i}
              className="flex justify-center pt-2 w-full h-fullgrid-rows-1 relative"
            >
              <div className="w-[90%] max-w-[358px] lg:h-[380px] text-white pt-52 flex-col justify-center items-center text-center bg-dpColor rounded-lg rounded-tr-[2rem] relative lg:pt-44">
                <div className="inline-block text-start lg:w-auto mobileM:w-[17rem] sm:w-[14rem]">
                  <h1 className="text-4xl font-bold mb-4 lg:mb-2">
                    Tehran 35°C
                  </h1>
                  <p className="text-2xl mb-4 lg:mb-2">wind speed : 11 km</p>
                  <p className="text-2xl mb-4 lg:mb-2">Tuesday : 19:52</p>
                  <p className="text-2xl mb-4 lg:mb-2">Cloudy </p>
                </div>
                <div className="absolute -top-[120px] -right-[5.6rem] xl:-top-[120px] text-white xl:-right-[100px]">
                  <Image
                    className="w-[24rem] h-[20rem]  xl:w-[420px] xl:h-[340px]"
                    src={Sun}
                    alt=""
                    width={400}
                    height={50}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* <div className="flex pt-10 w-[355px] h-full items-end col-start-2  col-span-3 relative">
            <div className="w-full h-full text-white flex flex-col items-start pt-52 pl-16 justify-start bg-dpColor rounded-lg ">
              <h1 className="text-4xl font-bold">Tehran 35°C</h1>
              <p className="text-2xl">wind speed : 11 km</p>
              <p className="text-2xl">Tuesday : 19:52</p>
              <p className="text-2xl text-left">Cloudy </p>
            </div>
            <div className="absolute -top-[80px] text-white -right-[84px]">
              <Image
                className="w-[340px] h-[326px]"
                src={Sun}
                alt=""
                width={400}
                height={50}
              />
            </div>
          </div>
          <div className="flex pt-10 w-[355px] h-full items-end col-start-2  col-span-3 relative">
            <div className="w-full h-full text-white flex flex-col items-start pt-52 pl-16 justify-start bg-dpColor rounded-lg ">
              <h1 className="text-4xl font-bold">Tehran 35°C</h1>
              <p className="text-2xl">wind speed : 11 km</p>
              <p className="text-2xl">Tuesday : 19:52</p>
              <p className="text-2xl text-left">Cloudy </p>
            </div>
            <div className="absolute -top-[80px] text-white -right-[84px]">
              <Image
                className="w-[340px] h-[326px]"
                src={Sun}
                alt=""
                width={400}
                height={50}
              />
            </div> */}
          {/* </div> */}
        </div>
        {/* end card container */}
      </div>
    </main>
  );
}
