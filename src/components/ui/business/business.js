import React from "react";
import { VscProject } from "react-icons/vsc";
import { BsBoxSeam } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiUserStarLine } from "react-icons/ri";

import style from "./business.module.css";

const Business = () => {
  return (
    <div className="sm:h-[550px] h-[1350px] bg-blue-100 mt-24">
      <h1 className="text-xl font-bold pt-24 text-center">CortexSof</h1>
      <h1 className="text-5xl font-bold mt-2 text-center">
        {" "}
        <span className={style.animatetext}>At a Glance</span>{" "}
      </h1>
      <div className="flex justify-between flex-col sm:flex-row items-center w-full max-w-[1200px] mx-auto mt-16">
        <div
          className={`border w-[190px] h-[160px] bg-white  ${style.card} shadow-lg mb-4 sm:mb-0`}
        >
          <VscProject className="text-5xl m-auto my-3 text-cyan-600" />
          <h1 className="text-4xl text-center font-bold">30+</h1>
          <h1 className="text-center text-lg mt-2">Projects</h1>
        </div>
        <div
          className={`border w-[190px] h-[160px] bg-white  ${style.card} shadow-lg mb-4 sm:mb-0`}
        >
          <BsBoxSeam className="text-5xl m-auto my-3 text-cyan-600" />
          <h1 className="text-4xl text-center font-bold">10+</h1>
          <h1 className="text-center text-lg mt-2">Products</h1>
        </div>
        <div
          className={`border w-[190px] h-[160px] bg-white  ${style.card} shadow-lg mb-4 sm:mb-0`}
        >
          <FaUserTie className="text-5xl m-auto my-3 text-cyan-600" />
          <h1 className="text-4xl text-center font-bold">40+</h1>
          <h1 className="text-center text-lg mt-2">Experts</h1>
        </div>
        <div
          className={`border w-[190px] h-[160px] bg-white  ${style.card} shadow-lg mb-4 sm:mb-0`}
        >
          <BsGlobeCentralSouthAsia className="text-5xl m-auto my-3 text-cyan-500" />
          <h1 className="text-4xl text-center font-bold">6+</h1>
          <h1 className="text-center text-lg mt-2">Countries</h1>
        </div>
        <div
          className={`border w-[190px] h-[160px] bg-white  ${style.card} shadow-lg mb-4 sm:mb-0`}
        >
          <HiOutlineUserGroup className="text-5xl m-auto my-3 text-cyan-500" />
          <h1 className="text-4xl text-center font-bold">25+</h1>
          <h1 className="text-center text-lg mt-2">Happy Clients</h1>
        </div>
        <div
          className={`border w-[190px] h-[160px] bg-white  ${style.card} shadow-lg mb-4 sm:mb-0`}
        >
          <RiUserStarLine className="text-5xl m-auto my-3 text-cyan-500" />
          <h1 className="text-4xl text-center font-bold">10+</h1>
          <h1 className="text-center text-lg mt-2">Year Experienced</h1>
        </div>
      </div>
    </div>
  );
};

export default Business;
