import React, { useEffect, useRef, useState } from "react";
import style from "./drawer.module.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Link from "next/link";

const DrawersMenu = ({ setOpen, open }) => {
  const onClose = () => {
    setOpen(false);
  };
  const drawerRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [serviceOpen, setServiceOpen] = useState("");

  const serviceMenu = (e) => {
    if (e == "service") {
      if (serviceOpen == "service") {
        setServiceOpen("");
      } else {
        setServiceOpen("service");
      }
    }
    if (e == "products") {
      if (serviceOpen == "products") {
        setServiceOpen("");
      } else {
        setServiceOpen("products");
      }
    }
    if (e == "about") {
      if (serviceOpen == "about") {
        setServiceOpen("");
      } else {
        setServiceOpen("about");
      }
    }
  };

  return (
    <div
      ref={drawerRef}
      className={`${
        !open
          ? "translate-x-full  transition ease-in-out"
          : "translate-x-0 transition ease-in-out"
      }  bg-white fixed h-screen top-0 right-0 z-50 w-[300px] p-3`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl"> CortexSof Menus </h1>
        <p
          className="text-2xl text-orange-600 font-bold"
          onClick={() => setOpen(!open)}
        >
          X
        </p>
      </div>
      <hr />
      <ul className="mt-5 text-lg text-gray-600">
        <Link href={"/"} className="py-2">
          Home
        </Link>
        <hr />
        <li
          className="py-2 flex items-center gap-1"
          onClick={() => serviceMenu("about")}
        >
          <span> About Us </span>
          <span>
            {serviceOpen == "about" ? (
              <MdOutlineKeyboardArrowUp className="text-2xl transition" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-2xl transition" />
            )}
          </span>
        </li>
        <div
          className={`${
            serviceOpen == "about"
              ? "block  transition ease-in-out duration-1000"
              : "hidden  transition ease-in-out duration-1000"
          } px-5`}
        >
          <li className="py-2">
            <Link href={"/about/at-a-glance"}>At a Glance</Link>
          </li>{" "}
          <hr />
          <li className="py-2">
            {" "}
            <Link href={"/about/mission-and-vision"}>Mission & Vision</Link>
          </li>{" "}
          <hr />
          <li className="py-2">
            {" "}
            <Link href={"/about/message-from-ceo"}>Message From C.E.O</Link>
          </li>
        </div>
        <hr />

        <li
          className="py-2 flex items-center gap-1"
          onClick={() => serviceMenu("products")}
        >
          <span> Products </span>
          <span>
            {serviceOpen == "products" ? (
              <MdOutlineKeyboardArrowUp className="text-2xl transition" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-2xl transition" />
            )}
          </span>
        </li>
        <div
          className={`${
            serviceOpen == "products"
              ? "block  transition ease-in-out duration-1000"
              : "hidden  transition ease-in-out duration-1000"
          } px-5`}
        >
          <li className="py-2">
            <Link href={"/products/sms-responder"}>SMS Responder</Link>{" "}
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/products/email-responder"}>Email Responder</Link>{" "}
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/products/offer-management"}> Offer Management</Link>{" "}
          </li>
          <hr />
          <li className="py-2">
            {" "}
            <Link href={"/products/projects"}>Projects</Link>{" "}
          </li>
          <hr />
        </div>
        <hr />

        <li
          className="py-2 flex items-center gap-1"
          onClick={() => serviceMenu("service")}
        >
          <span> Services </span>
          <span>
            {serviceOpen == "service" ? (
              <MdOutlineKeyboardArrowUp className="text-2xl transition" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-2xl transition" />
            )}
          </span>
        </li>

        <div
          className={`${
            serviceOpen == "service"
              ? "block  transition ease-in-out duration-1000"
              : "hidden  transition ease-in-out duration-1000"
          } px-5`}
        >
          <li className="py-2">
            <Link href={"/services/app-development"}>Apps Development</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/services/software-development"}>
              Software Development
            </Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/services/web-development"}>Web Development</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/services/website-hosting"}>Website Hosting</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/services/digital-marketing"}>Digital Marketing</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/services/data-entry"}>Data Entry</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href={"/services/tools"}>Tools</Link>
          </li>
        </div>
        <hr />
        <Link href={"/blogs"} className="py-2">
          Blogs
        </Link>
        <hr />
        <br />
        <Link href={"/contact"} className={style.contact}>
          Contact
        </Link>
        <br />
        <Link href={"/login"} className={style.login}>
          Login
        </Link>
      </ul>
    </div>
  );
};

export default DrawersMenu;
