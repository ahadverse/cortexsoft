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
                className="w-[120px]"
                src="/logo.png"
              />
            </div>
            <p className="text-sm leading-relaxed">
              CortexSof delivers custom software, web &amp; app development, SEO,
              and digital marketing solutions to businesses worldwide.
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
            <h2 className="text-base mb-1 font-bold tracking-wide">ADDRESS</h2>
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
            <h2 className="text-base mb-1 font-bold tracking-wide">SERVICES</h2>
            <hr className="mb-3" />
            <div className="mb-2">
              <Link href="/services/tools" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Tools
              </Link>
            </div>
            <div className="mb-2">
              <Link href="/services/app-development" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Apps Development
              </Link>
            </div>

            <div className="mb-2">
              {" "}
              <Link href="/services/software-development" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Software Development
              </Link>
            </div>
            <div className="mb-2">
              {" "}
              <Link href="/services/web-development" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Web Development
              </Link>
            </div>
            <div className="mb-2">
              {" "}
              <Link href="/services/website-hosting" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Website Hosting
              </Link>
            </div>

            <div className="mb-2">
              <Link href="/services/digital-marketing" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Digital Marketing
              </Link>
            </div>

            <div className="mb-2">
              {" "}
              <Link href="/services/seo-services" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> SEO Services
              </Link>
            </div>

            <div className="mb-2">
              <Link href="/services/data-entry" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Data Entry
              </Link>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/3 p-4 ">
            <h2 className="text-base mb-1 font-bold tracking-wide">RESOURCES</h2>
            <hr className="mb-3" />
            <div className="mb-3">
              <Link href="/privacy-policy" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Privacy Policy
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/terms-and-conditions" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Terms &amp; Conditions
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/refund-policy" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Refund Policy
              </Link>
            </div>

            <div className="mb-3">
              {" "}
              <Link href="/team" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Our Team
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/shipping-policy" className="flex items-center gap-2 text-sm">
                {" "}
                <MdArrowRightAlt /> Shipping Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Credit card logos + compliance bar */}
        <div className="border-t border-white/20 py-5 sm:w-[1200px] w-full m-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60 text-center sm:text-left">
              &copy; {new Date().getFullYear()} CortexSof Limited. All rights reserved. &nbsp;|&nbsp;
              <Link href="/privacy-policy" className="hover:text-white">Privacy</Link> &nbsp;·&nbsp;
              <Link href="/terms-and-conditions" className="hover:text-white">Terms</Link> &nbsp;·&nbsp;
              <Link href="/refund-policy" className="hover:text-white">Refund</Link> &nbsp;·&nbsp;
              <Link href="/shipping-policy" className="hover:text-white">Shipping</Link>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60 mr-1">Secure payments:</span>
              <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/visa.svg" alt="Visa" className="h-8 rounded" />
              <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/mastercard.svg" alt="Mastercard" className="h-8 rounded" />
              <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/amex.svg" alt="American Express" className="h-8 rounded" />
              <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/discover.svg" alt="Discover" className="h-8 rounded" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
