import Link from "next/link";
import React from "react";
import style from "./footer.module.css";
import {
  AiFillMail,
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";

import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <div className={`${router.asPath == "/" ? "bg-white" : "bg-blue-100"}`}>
      <img className="w-full hidden sm:block" src="/footer-bg.webp" />
      <img className="w-full block sm:hidden" src="/footbg.png" />
      <div className={`${style.bgImg} text-white`}>
        <div
          className={`flex sm:flex-row py-20 flex-col items-start  gap-16 p-4 sm:w-[1200px] w-full m-auto `}
        >
          <div className="basis-1/4 md:basis-1/3">
            <div className="mb-5">
              <img
                className="w-[200px] m-auto sm:m-0  sm:w-full"
                src="/logo.png"
              />
            </div>
            <p>
              &quot;CortexSof Limited will help you grow your business in any
              case. We have 100+ services that can change your business standard
              well.&quot;
            </p>
            <div className="flex mt-5 items-center gap-3 ">
              <div className="">
                <AiFillFacebook className="text-3xl text-white hover:text-amber-400 cursor-pointer" />
              </div>
              <div className="">
                <AiFillInstagram className="text-3xl text-white hover:text-amber-400 cursor-pointer" />
              </div>
              <div className="">
                <AiFillLinkedin className="text-3xl text-white hover:text-amber-400 cursor-pointer" />
              </div>
              <div className="">
                <FaXTwitter className="text-3xl text-white hover:text-amber-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="py-4 ml-3 sm:ml-0">
            <h2 className="text-xl mb-1 font-bold">ADDRESS</h2>
            <hr className="mb-3" />
            <div className="flex gap-2 items-start mb-2">
              {/* <AiFillEnvironment className={style.icon} /> */}
              <FaLocationDot className="mt-1" />
              <Link href="">
                8000 Baymeadows Cir E #22, Jacksonville, FL, 32256, USA
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-3 ">
              <AiFillMail />
              <a href="mailto:kmhasan@cortexsof.com">kmhasan@cortexsof.com</a>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <AiFillPhone />
              <a href="tel:(347) 656-3882">+1 (347) 656-3882</a>
            </div>
            <div className="flex gap-2 items-start mb-3">
              <FaLocationDot className="text-xl mt-1" />
              <Link href="">
                House#752, Road#10, Avenue#04, Mirpur DOHS, Dhaka 1216{" "}
              </Link>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <AiFillMail />
              <a href="mailto:support@cortexsof.com">support@cortexsof.com</a>
            </div>
            <div className="flex gap-2 items-center">
              <AiFillPhone />
              <a href="tel:+88 01710-179900">+88 01710-179900</a>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/3 p-4">
            <h2 className="text-xl mb-1 font-bold">SERVICES</h2>
            <hr className="mb-3" />
            <div className="mb-2">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Tools
              </Link>
            </div>
            <div className="mb-2">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Apps Development
              </Link>
            </div>

            <div className="mb-2">
              {" "}
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Software Development
              </Link>
            </div>
            <div className="mb-2">
              {" "}
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Web Development
              </Link>
            </div>
            <div className="mb-2">
              {" "}
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Website Hosting
              </Link>
            </div>

            <div className="mb-2">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Digital Marketting
              </Link>
            </div>

            <div className="mb-2">
              {" "}
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> SEO Services
              </Link>
            </div>

            <div className="mb-2">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Data Entry
              </Link>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/3 p-4 ">
            <h2 className="text-xl mb-1 font-bold">RESOURCES</h2>
            <hr className="mb-3" />
            <div className="mb-3">
              {" "}
              <Link href="/" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Home
              </Link>
            </div>

            <div className="mb-3">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Privacy Policy
              </Link>
            </div>

            <div className="mb-3">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Terms & Condition
              </Link>
            </div>

            <div className="mb-3">
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Refund Policy
              </Link>
            </div>

            <div className="mb-3">
              {" "}
              <Link href="" className="flex items-center gap-2">
                {" "}
                <MdArrowRightAlt /> Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
