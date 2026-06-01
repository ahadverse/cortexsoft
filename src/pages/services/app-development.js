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
        <title>Application Development</title>
      </Head>
      <Layout>
        <div className='bg-blue-100 pb-10'>
          <h1 className='text-xl font-bold pt-10 text-center'>CortexSof</h1>
          <h1 className='text-5xl font-bold text-center'>
            {" "}
            <span className='animatetext'>Application Development</span>{" "}
          </h1>
          <div>
            <div className='w-full sm:max-w-[1200px]  m-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 p-5 sm:p-0'>
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
                    <GiCheckMark className='text-cyan-600' /> Native App (iOS or Android)
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> Cross-Platform Build
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Up to 5 App Screens
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Basic UI/UX Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Push Notifications
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> REST API Integration
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> In-App Analytics
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> Payment Gateway
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> Offline Mode Support
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> Admin Dashboard
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> App Store Submission
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> 3 Months Free Maintenance
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
                    <GiCheckMark className='text-cyan-600' /> Native App (iOS or Android)
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Cross-Platform Build
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Up to 15 App Screens
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Custom UI/UX Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Push Notifications
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> REST API Integration
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> In-App Analytics
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> Payment Gateway
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <ImCross className='text-orange-600' /> Offline Mode Support
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Admin Dashboard
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> App Store Submission
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> 3 Months Free Maintenance
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
                    <GiCheckMark className='text-cyan-600' /> Native App (iOS &amp; Android)
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Cross-Platform Build
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Unlimited App Screens
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Premium UI/UX Design
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Push Notifications
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> REST API Integration
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> In-App Analytics
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Payment Gateway
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Offline Mode Support
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> Admin Dashboard
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> App Store Submission
                  </li>
                  <li className='flex justify-center items-center gap-2 border-b-2 w-[250px] m-auto mb-2'>
                    <GiCheckMark className='text-cyan-600' /> 6 Months Free Maintenance
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
