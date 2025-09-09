import React from "react";
import style from "./serve.module.css";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { RiApps2Line } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { GrMultimedia } from "react-icons/gr";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { AiOutlineDatabase } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { SiMicrosoftazure } from "react-icons/si";
import { IoCloudUploadOutline } from "react-icons/io5";

import { TfiMicrosoft } from "react-icons/tfi";

const Serve = () => {
  return (
    <div>
      <div className="sm:h-[700px] h-full pb-12  bg-blue-100 mt-24">
        <h1 className="text-xl font-bold sm:pt-24 pt-12 text-center">
          Bridge Your Business with <br /> the Virtual World
        </h1>
        <h1 className="sm:text-5xl text-4xl font-bold mt-2 text-center">
          {" "}
          <span className={style.animatetext}>Industry We Serve</span>{" "}
        </h1>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-auto w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] mt-16 sm:gap-10 gap-5">
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M53.7,-62C68.8,-51.3,79.7,-33.6,80.1,-16.3C80.5,1,70.4,17.9,60.1,33.7C49.8,49.4,39.2,64,24.6,70.5C10.1,77,-8.4,75.4,-26,69.7C-43.6,64.1,-60.4,54.3,-71.8,39.2C-83.3,24.1,-89.5,3.6,-84.4,-13.1C-79.3,-29.8,-63,-42.7,-47,-53.2C-31.1,-63.8,-15.5,-72,1.9,-74.3C19.3,-76.5,38.6,-72.7,53.7,-62Z"
                transform="translate(100 100)"
              />
            </svg>
            <HiOutlinePresentationChartBar
              className={`${style.icon} text-rose-600`}
            />
            <h1 className="text-center text-xl">Software</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M49.3,-36.1C64.3,-20.5,77.2,0.1,75.7,21.5C74.2,43,58.2,65.4,36.1,76.6C14.1,87.8,-14.1,87.8,-36.6,76.7C-59.1,65.6,-76,43.4,-80,20C-83.9,-3.4,-74.9,-28,-59.4,-43.8C-44,-59.6,-22,-66.6,-2.4,-64.6C17.1,-62.7,34.3,-51.8,49.3,-36.1Z"
                transform="translate(100 100)"
              />
            </svg>

            <RiApps2Line className={`${style.icon} text-pink-600`} />
            <h1 className="text-center text-xl">Mobile Apps</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M47.3,-46.2C62.2,-32.5,75.6,-16.2,76.6,1C77.5,18.2,66.1,36.4,51.2,49.3C36.4,62.3,18.2,70,-2.1,72.2C-22.4,74.3,-44.9,70.8,-55.9,57.9C-67,44.9,-66.7,22.4,-65.2,1.4C-63.8,-19.6,-61.3,-39.2,-50.3,-52.9C-39.2,-66.6,-19.6,-74.4,-1.7,-72.7C16.2,-71,32.5,-59.9,47.3,-46.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <VscTools className={`${style.icon} text-violet-700`} />
            <h1 className="text-center text-xl">Development Tools</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M45.3,-75.7C58.9,-70.6,70.3,-58.9,78.4,-45.2C86.4,-31.4,91.1,-15.7,89.8,-0.8C88.4,14.2,81.1,28.4,73.5,42.8C65.9,57.2,57.9,71.8,45.6,80.8C33.3,89.8,16.6,93.2,1,91.4C-14.6,89.6,-29.2,82.7,-40.7,73.3C-52.3,63.9,-60.9,52,-70.2,39.4C-79.5,26.7,-89.6,13.4,-88.9,0.4C-88.3,-12.6,-76.9,-25.2,-68.5,-39.5C-60.2,-53.9,-54.9,-70,-44,-76.6C-33.1,-83.3,-16.6,-80.7,-0.4,-80C15.8,-79.4,31.7,-80.9,45.3,-75.7Z"
                transform="translate(100 100)"
              />
            </svg>
            <GrMultimedia className={`${style.icon} text-indigo-700`} />
            <h1 className="text-center text-xl">Multimedia Software</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M61.1,-52.1C73.4,-33.2,73.9,-8.1,67.9,14.4C61.8,36.8,49.4,56.7,29.8,68.8C10.2,80.8,-16.4,85.1,-37.9,75.8C-59.4,66.6,-75.9,43.8,-78.5,21.2C-81,-1.5,-69.8,-24.1,-54.4,-43.8C-39,-63.5,-19.5,-80.2,2.4,-82.1C24.3,-84.1,48.7,-71.1,61.1,-52.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <LiaDigitalTachographSolid
              className={`${style.icon}  text-lime-400`}
            />
            <h1 className="text-center text-xl">Digital Marketing</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>

            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M53.4,-33.8C62.7,-14.8,59.1,8.6,48,30.8C37,53,18.5,74,-0.2,74.1C-18.9,74.2,-37.9,53.5,-51.3,29.9C-64.7,6.4,-72.6,-20.1,-63.2,-39.2C-53.7,-58.3,-26.8,-70.1,-2.4,-68.7C22.1,-67.3,44.2,-52.8,53.4,-33.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <AiOutlineDatabase className={`${style.icon} text-purple-600`} />
            <h1 className="text-center text-xl">Database Management</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M32.8,-56.1C41.5,-51.8,46.9,-41,55.8,-30.5C64.8,-20.1,77.4,-10,78.9,0.8C80.3,11.7,70.6,23.5,61.5,33.6C52.4,43.8,43.8,52.4,33.7,62.8C23.5,73.2,11.7,85.3,0.2,84.9C-11.3,84.5,-22.6,71.5,-33.5,61.6C-44.4,51.7,-55,44.8,-62.6,35C-70.1,25.3,-74.6,12.6,-76.7,-1.2C-78.8,-15.1,-78.6,-30.2,-70.9,-39.6C-63.2,-49.1,-48,-53,-34.9,-54.7C-21.9,-56.5,-10.9,-56.1,0.6,-57C12.1,-58,24.1,-60.4,32.8,-56.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <CgWebsite className={`${style.icon} text-yellow-700`} />
            <h1 className="text-center text-xl">Web Development</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M49.8,-47C64.2,-35.4,75.3,-17.7,75.2,-0.1C75.2,17.6,64,35.2,49.6,49.2C35.2,63.2,17.6,73.5,-0.9,74.4C-19.3,75.3,-38.7,66.7,-51,52.7C-63.4,38.7,-68.7,19.3,-68.3,0.4C-67.9,-18.5,-61.7,-37,-49.3,-48.6C-37,-60.3,-18.5,-65.1,-0.4,-64.7C17.7,-64.3,35.4,-58.7,49.8,-47Z"
                transform="translate(100 100)"
              />
            </svg>
            <TfiMicrosoft className={`${style.icon} text-blue-700`} />
            <h1 className="text-center text-xl">CRM Software</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M39.9,-69C53.2,-61.5,66.3,-53.7,74.4,-42.1C82.5,-30.5,85.7,-15.3,83.3,-1.4C80.9,12.5,73,25.1,64.9,36.7C56.9,48.4,48.7,59.2,37.8,67.9C27,76.5,13.5,82.9,0.1,82.7C-13.2,82.5,-26.4,75.6,-39.5,68.2C-52.6,60.9,-65.6,53.1,-73.1,41.7C-80.6,30.2,-82.7,15.1,-83.9,-0.7C-85.2,-16.6,-85.7,-33.2,-77.2,-43C-68.8,-52.9,-51.5,-56,-37.1,-62.8C-22.8,-69.7,-11.4,-80.1,1,-81.8C13.4,-83.5,26.7,-76.5,39.9,-69Z"
                transform="translate(100 100)"
              />
            </svg>
            <SiMicrosoftazure className={`${style.icon} text-green-700`} />
            <h1 className="text-center text-xl">ERP Software</h1>
          </div>
          <div className={style.card}>
            <svg
              viewBox="0 0 200 200"
              className={style.svg2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M38,-50.4C47.7,-37.1,52.9,-23.7,58.5,-8C64.1,7.8,70,25.8,64.5,38.9C58.9,52,41.9,60.1,25.2,63.6C8.6,67.2,-7.6,66.2,-23.9,61.9C-40.3,57.6,-56.8,49.9,-64.1,37.1C-71.5,24.2,-69.7,6.1,-65.6,-10.7C-61.6,-27.4,-55.3,-42.9,-44,-55.9C-32.7,-68.8,-16.3,-79.2,-1.1,-77.9C14.1,-76.6,28.3,-63.6,38,-50.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              className={style.svg1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00aaff"
                d="M49.6,-51C64.8,-34.4,77.9,-17.2,77.5,-0.4C77.1,16.4,63.2,32.9,48.1,47.4C32.9,62,16.4,74.6,-2.8,77.4C-22.1,80.2,-44.1,73.2,-55.5,58.7C-66.8,44.1,-67.3,22.1,-67.5,-0.2C-67.7,-22.5,-67.6,-44.9,-56.2,-61.5C-44.9,-78,-22.5,-88.6,-2.6,-86C17.2,-83.4,34.4,-67.5,49.6,-51Z"
                transform="translate(100 100)"
              />
            </svg>
            <IoCloudUploadOutline className={`${style.icon} text-red-600 `} />
            <h1 className="text-center text-xl">Cloud Computing</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
