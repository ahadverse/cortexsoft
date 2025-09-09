import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

const Header = ({ setOpen, open }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-12 z-40 w-full   ${
        scroll
          ? `bg-white shadow-lg  ${style.headerScrolled}`
          : ` ${open ? "bg-white" : "contrast-100 bg-transparent"}`
      }`}
    >
      <div className="flex flex-row justify-between items-center sm:w-[1200px] m-auto h-[90px] mx-4 sm:mx-auto">
        <div>
          <Link href={"/"}>
            {" "}
            <img
              className="sm:w-[100px] w-[100px] mt-1 sm:mt-0"
              src="/logo.png"
            />
          </Link>
        </div>
        <div className="block sm:hidden">
          <button onClick={() => setOpen(true)}>
            <RiMenu3Fill className="text-3xl text-cyan-600" />
          </button>
        </div>
        <div className={style.menu}>
          <ul className={style.nav}>
            <li>
              <Link href={"/"} className="list-none">
                Home
              </Link>
            </li>

            <div className={style.dropdown}>
              <li>About Us</li>
              <div className={`${style.dropdownContent} sm:w-[200px]`}>
                <div className={style.arrow}></div>
                <li>
                  <Link href={"/about/at-a-glance"}>AT A GLANCE</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/about/mission-and-vision"}>
                    MISSION & VISION
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/about/message-from-ceo"}>
                    MESSAGE FROM C.E.O
                  </Link>
                </li>
              </div>
            </div>

            <div className={style.dropdown}>
              <li>Products</li>
              <div className={`${style.dropdownContent} sm:w-[200px]`}>
                <div className={style.arrow}></div>
                <li>
                  <Link href={"/products/sms-responder"}>SMS Responder</Link>{" "}
                </li>
                <li>
                  <Link href={"/products/email-responder"}>
                    Email Responder
                  </Link>{" "}
                </li>
                <li>
                  <Link href={"/products/offer-management"}>
                    {" "}
                    Offer Management
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={"/products/projects"}>Projects</Link>{" "}
                </li>
              </div>
            </div>

            <div className={style.dropdown}>
              <li>Services</li>
              <div className={`${style.dropdownContent} sm:w-[250px]`}>
                <div className={style.arrow}></div>

                <li>
                  <Link href={"/services/app-development"}>
                    Apps Development
                  </Link>
                </li>
                <li>
                  <Link href={"/services/software-development"}>
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href={"/services/web-development"}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href={"/services/website-hosting"}>
                    Website Hosting
                  </Link>
                </li>
                <li>
                  <Link href={"/services/digital-marketing"}>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href={"/services/data-entry"}>Data Entry</Link>
                </li>

                <li>
                  <Link href={"/services/tools"}>Tools</Link>
                </li>
              </div>
            </div>
            {/* 
            <div className={style.dropdown}>
              <li>Packages</li>
              <div className={`${style.dropdownContent} sm:w-[200px]`}>
                <div className={style.arrow}></div>
                <li>Basic</li>
                <li>Popular</li>
                <li>Premium</li>
              </div>
            </div> */}
            <li>
              {" "}
              <Link href={"/blogs"}>Blogs</Link>
            </li>

            <Link href={"/contact"} className={style.contact}>
              Contact
            </Link>
            <Link href={"/login"} className={style.login}>
              Login
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
