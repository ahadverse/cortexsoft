import React from "react";
import { FaCommentSms } from "react-icons/fa6";
import style from "./productsCard.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import Link from "next/link";

const ProductsCard = () => {
  return (
    <div className='bg-white pt-16 mb-24'>
      <h1 className='text-xl font-bold pt-4 text-center'>Our Products</h1>
      <h1 className='sm:text-5xl text-4xl font-bold mt-3 text-center'>
        {" "}
        <span className={style.animatetext}>
          {" "}
          We Offer a Wide Range of Products
        </span>{" "}
      </h1>
      <div className='w-full max-w-[1200px] m-auto flex justify-between flex-col sm:flex-row gap-10 mt-16 p-5 sm:p-0'>
        {/* card  */}
        <div
          className={`sm:w-[320px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
        >
          <div className={style.logoIcon}>
            <FaCommentSms className='text-center text-white text-4xl' />
          </div>
          <h1 className='mt-3 mb-2 text-xl font-bold text-center'>
            SMS Responder
          </h1>
          <hr className='w-[80px] m-auto' />
          <h2 className={`font-bold text-center text-xl ${style.price}`}>
            100$
          </h2>
          <p className='text-center my-2'>
            Create unlimited modules that respond to resident text messages and
            merge data from any database into personalized SMS replies, with
            full compatibility across many platforms.
          </p>
          <Link href={"/checkout"}>
            <button className={style.purchageButton}>Purchase</button>
          </Link>
        </div>
        <div
          className={`sm:w-[320px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
        >
          <div className={style.logoIcon}>
            <MdOutlineMailOutline className='text-center text-white text-4xl' />
          </div>
          <h1 className='mt-3 mb-2 text-xl font-bold text-center'>
            Email Responder
          </h1>
          <hr className='w-[80px] m-auto' />
          <h2 className={`font-bold text-center text-xl ${style.price}`}>
            100$
          </h2>
          <p className='text-center my-2'>
            Automate your email replies with a smart autoresponder triggered by
            user actions on your site or incoming emails, ensuring timely and
            consistent communication.
          </p>
          <Link href={"/checkout"}>
            <button className={style.purchageButton}>Purchase</button>
          </Link>
        </div>
        <div
          className={`sm:w-[320px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
        >
          <div className={style.logoIcon}>
            <BiSolidOffer className='text-center text-white text-4xl' />
          </div>
          <h1 className='mt-3 mb-2 text-xl font-bold text-center'>
            Offer Management
          </h1>
          <hr className='w-[80px] m-auto' />
          <h2 className={`font-bold text-center text-xl ${style.price}`}>
            100$
          </h2>
          <p className='text-center my-2'>
            Easily create, track, and manage promotional offers and discounts
            across your platform. Deliver targeted deals to the right customers
            at the right time to boost conversions.
          </p>
          <Link href={"/checkout"}>
            <button className={style.purchageButton}>Purchase</button>
          </Link>
        </div>
        <div
          className={`sm:w-[320px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
        >
          <div className={style.logoIcon}>
            <AiOutlineProject className='text-center text-white text-4xl' />
          </div>
          <h1 className='mt-3 mb-2 text-xl font-bold text-center'>Projects</h1>
          <hr className='w-[80px] m-auto' />
          <h2 className={`font-bold text-center text-xl ${style.price}`}>
            100$
          </h2>
          <p className='text-center my-2'>
            Organize, manage, and track all your projects in one place.
            Collaborate with your team, set deadlines, and monitor progress to
            ensure every project is delivered on time.
          </p>
          <Link href={"/checkout"}>
            <button className={style.purchageButton}>Purchase</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
