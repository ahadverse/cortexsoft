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
              className="h-[350px] sm:w-[550px] w-auto object-cover"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
              alt="David Chen"
            />
            <div className="h-[350px] sm:w-[550px] w-full flex justify-center flex-col sm:p-0 p-5">
              <h1 className="text-2xl text-orange-600 font-bold">
                David Chen
              </h1>
              <h1 className="text-xl text-cyan-600 font-bold">
                CTO at FinEdge Analytics
              </h1>
              <br />
              <p>
                Partnering with CortexSof was one of the best decisions we
                made. Their team delivered our fintech dashboard ahead of
                schedule, with clean code and excellent documentation. The
                communication throughout the project was transparent and
                professional. We have since engaged them for two additional
                modules and plan to continue the partnership long-term.
              </p>
            </div>
          </div>
        </div>
        <div className={` w-full sm:h-[400px] h-full  ${style.slide}`}>
          <div className="flex justify-between sm:flex-row flex-col items-center sm:w-[1200px] w-full m-auto">
            <img
              className="h-[350px] sm:w-[550px] w-auto object-cover"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Sarah Mitchell"
            />
            <div className="h-[350px] sm:w-[550px] w-full flex justify-center flex-col sm:p-0 p-5">
              <h1 className="text-2xl text-orange-600 font-bold">
                Sarah Mitchell
              </h1>
              <h1 className="text-xl text-cyan-600 font-bold">
                Founder, RetailFlow Pro
              </h1>
              <br />
              <p>
                CortexSof redesigned our e-commerce platform from the ground
                up and the results were outstanding — page load times dropped
                by 60% and conversion rates increased by 35% in the first
                quarter post-launch. Their SEO and digital marketing team also
                helped us rank on the first page of Google for our core
                keywords. Highly recommended for any business serious about
                growth.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
