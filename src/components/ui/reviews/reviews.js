import React from "react";
import Slider from "react-slick";
import style from "./reviews.module.css";
import { BsArrowRight, BsArrowUpLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    delay: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className={style.nextArrow} onClick={onClick}>
        <MdKeyboardArrowRight className="text-4xl text-white" />
      </div>
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={style.prevArrow} onClick={onClick}>
        {" "}
        <MdKeyboardArrowLeft className="text-4xl text-white" />
      </div>
    );
  }

  return (
    <div className="mt-24">
      <h1 className="sm:text-5xl text-4xl font-bold mt-3 text-center">
        {" "}
        <span className={style.animatetext}>
          {" "}
          Our Customer&apos;s Feedback
        </span>{" "}
      </h1>
      <Slider {...settings} className={style.slider}>
        <div className={` w-full sm:h-[400px] h-full ${style.slide}`}>
          <div className="flex justify-between sm:flex-row flex-col items-center sm:w-[1200px] w-full m-auto">
            <img
              className="h-[350px] sm:w-[550px] w-auto"
              src="https://us.res.keymedia.com/files/image/Ryan%20Kirk%20Surexdirect.jpg"
            />
            <div className="h-[350px] sm:w-[550px] w-full flex justify-center flex-col sm:p-0 p-5">
              <h1 className="text-2xl text-orange-600 font-bold">
                Robert Downey Jr
              </h1>
              <h1 className="text-xl text-cyan-600 font-bold">
                CEO & Founder of Haxon Holdings
              </h1>
              <br />
              <p>
                CortexSof, Inc. is one of my prime choice and trustable company
                for any customize software solution. They have a strong
                commitment to deliver their project and they have a good
                behavior to their clients. I came to visit their Bangladesh
                office and they have a good office with big space and
                environment.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={` w-full sm:h-[400px] h-full  ${style.slide}`}>
          <div className="flex justify-between sm:flex-row flex-col items-center sm:w-[1200px] w-full m-auto">
            <img
              className="h-[350px] sm:w-[550px] w-auto"
              src="https://images.assetsdelivery.com/compings_v2/fizkes/fizkes2011/fizkes201102042.jpg"
            />
            <div className="h-[350px] sm:w-[550px] w-full flex justify-center flex-col sm:p-0 p-5">
              <h1 className="text-2xl text-orange-600 font-bold">
                Natalia Portman
              </h1>
              <h1 className="text-xl text-cyan-600 font-bold">
                CEO & Founder of Asgurd Byfrost
              </h1>
              <br />
              <p>
                CortexSof, Inc. is one of my prime choice and trustable company
                for any customize software solution. They have a strong
                commitment to deliver their project and they have a good
                behavior to their clients. I came to visit their Bangladesh
                office and they have a good office with big space and
                environment.{" "}
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
