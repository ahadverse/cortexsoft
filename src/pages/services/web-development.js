import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./services.module.css";
import Head from "next/head";
import Link from "next/link";

const AppDevelopment = () => {
  return (
    <div>
      <Head>
        <title>Web Development</title>
      </Head>
      <Layout>
        <div className='  bg-blue-100 pb-10'>
          <h1 className='text-xl font-bold pt-10 text-center'>CortexSof</h1>
          <h1 className='text-5xl font-bold text-center'>
            {" "}
            <span className='animatetext'>Web Development</span>{" "}
          </h1>
          <div>
            <div className='w-full max-w-[1200px]  m-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 p-5 sm:p-0'>
              <div
                className={` ${style.card} shadow-md hover:shadow-cyan-500/50`}
              >
                <div className={style.logoIcon}>Basic Packages</div>

                <h2 className={`font-bold text-center text-xl ${style.price}`}>
                  $229
                </h2>
                <hr className='w-[80px] my-3 m-auto' />
                <b className='text-sm text-center block font-bold text-green-500'>
                  (10%) Discount
                </b>

                <ul className='text-center my-7'>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Web Development
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' /> Innovative Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Fully Mobile
                    Responsive
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Logo Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> 5 Static Pages
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Static Slider
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Static Service
                    Listings
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    All Service Page
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Single Service Page
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Social Page Link
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    FB Page Live Feed Box
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Live Chat Application
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Blog System
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Notice Board Download Option
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Contact Mail
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Site Location Map
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Customized Query Mail
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Admin Panel to Maintenance
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />3 Months Free
                    Maintenance
                  </li>
                </ul>
                <Link href={"/checkout"}>
                  <button className={style.purchageButton}>Purchase</button>
                </Link>
              </div>
              <div
                className={` ${style.card} shadow-md hover:shadow-cyan-500/50`}
              >
                <div className={style.logoIcon}>Popular Packages</div>

                <h2 className={`font-bold text-center text-xl ${style.price}`}>
                  $299
                </h2>
                <hr className='w-[80px] my-3 m-auto' />
                <b className='text-sm text-center block font-bold text-green-500'>
                  (10%) Discount
                </b>
                <ul className='text-center my-7'>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Web Development
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Innovative Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Fully Mobile
                    Responsive
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Logo Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> 10 Dynamic pages
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Dynamic Slider
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Dynamic Service
                    Listings
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    All Service Page
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Single Service Page
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Social Page Link
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    FB Page Live Feed Box
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Live Chat Application
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Blog System
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Notice Board Download Option
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Contact Mail
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Site Location Map
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <ImCross className='text-orange-600' />
                    Customized Query Mail
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Admin Panel to Maintenance
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />3 Months Free
                    Maintenance
                  </li>
                </ul>
                <Link href={"/checkout"}>
                  <button className={style.purchageButton}>Purchase</button>
                </Link>
              </div>
              <div
                className={` ${style.card} shadow-md hover:shadow-cyan-500/50`}
              >
                <div className={style.logoIcon}>Premium Packages</div>

                <h2 className={`font-bold text-center text-xl ${style.price}`}>
                  $399
                </h2>
                <hr className='w-[80px] my-3 m-auto' />
                <b className='text-sm text-center block font-bold text-green-500'>
                  (10%) Discount
                </b>
                <ul className='text-center my-7'>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> App Development
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Innovative Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Fully Mobile
                    Responsive
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Cross-platform
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Native App
                    (iOS,Android,etc)
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Dynamic Slider
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' /> Dynamic Service
                    Listings
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    All Service Page
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Single Service Page
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Social Page Link
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    FB Page Live Feed Box
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Live Chat Application
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Blog System
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Notice Board Download Option
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Contact Mail
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Site Location Map
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Customized Query Mail
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />
                    Admin Panel to Maintenance
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    {" "}
                    <GiCheckMark className='text-cyan-600' />6 Months Free
                    Maintenance
                  </li>
                </ul>
                <Link href={"/checkout"}>
                  <button className={style.purchageButton}>Purchase</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>{" "}
    </div>
  );
};

export default AppDevelopment;
