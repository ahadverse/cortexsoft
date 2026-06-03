import React from "react";
import Slider from "react-slick";
import style from "./reviews.module.css";
import { BsArrowRight, BsArrowUpLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const testimonials = [
  {
    name: "David Chen",
    role: "CTO at FinEdge Analytics",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    feedback:
      "Partnering with CortexSof was one of the best decisions we made. Their team delivered our fintech dashboard ahead of schedule, with clean code and excellent documentation. The communication throughout the project was transparent and professional. We have since engaged them for two additional modules and plan to continue the partnership long-term.",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, RetailFlow Pro",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    feedback:
      "CortexSof redesigned our e-commerce platform from the ground up and the results were outstanding — page load times dropped by 60% and conversion rates increased by 35% in the first quarter post-launch. Their SEO and digital marketing team also helped us rank on the first page of Google for our core keywords. Highly recommended for any business serious about growth.",
  },
  {
    name: "Marcus Johnson",
    role: "VP Engineering at CloudStack Inc.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    feedback:
      "We hired CortexSof to build our cloud infrastructure monitoring dashboard and the outcome was exceptional. They understood our complex requirements from day one, delivered clean and maintainable code, and provided thorough documentation. Our internal team was able to take ownership immediately after handoff. We will absolutely work with them again on future projects.",
  },
  {
    name: "Priya Sharma",
    role: "CEO at TechNova Solutions",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    feedback:
      "CortexSof helped us launch our SaaS product three weeks ahead of schedule. Their full-stack team handled everything from UI design to backend APIs with incredible professionalism. What impressed us most was their proactive communication and ability to anticipate potential issues before they became problems. Our investors were blown away by the quality of the final product.",
  },
  {
    name: "James Williams",
    role: "Director of IT, Global Logistics Corp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    feedback:
      "We engaged CortexSof to modernize our legacy logistics tracking system. The migration was seamless — zero downtime and our staff adapted quickly to the new interface. They also built a mobile app that our field teams love. It has dramatically reduced manual data entry and improved accuracy across the board. A truly professional team from start to finish.",
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Product at MediaStream",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    feedback:
      "CortexSof delivered a high-performance video streaming platform that handles thousands of concurrent users without a hitch. Their expertise in performance optimization and real-time features was evident throughout the engagement. They were always available, responsive to feedback, and delivered exactly what we envisioned. Our user retention has improved significantly since the launch.",
  },
  {
    name: "Michael Park",
    role: "Co-founder at StartupBoost",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    feedback:
      "As a startup, we needed a development partner who could move fast without sacrificing quality. CortexSof was exactly that. They built our MVP in six weeks, helped us get investor-ready, and continued iterating with us post-launch. Their team felt like an extension of our own — collaborative, smart, and deeply invested in our success.",
  },
];

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
        <MdKeyboardArrowRight className='text-4xl text-white' />
      </div>
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={style.prevArrow} onClick={onClick}>
        {" "}
        <MdKeyboardArrowLeft className='text-4xl text-white' />
      </div>
    );
  }

  return (
    <div className='mt-24'>
      <h1 className='sm:text-5xl text-4xl font-bold mt-3 text-center'>
        {" "}
        <span className={style.animatetext}>
          {" "}
          Our Customer&apos;s Feedback
        </span>{" "}
      </h1>
      <Slider {...settings} className={style.slider}>
        {testimonials.map((t, i) => (
          <div key={i} className={`w-full sm:h-[400px] h-full ${style.slide}`}>
            <div className='flex justify-between sm:flex-row flex-col items-center sm:w-[1200px] w-full m-auto'>
              <div className='h-[350px] sm:w-[550px] m-auto w-full flex justify-center items-center'>
                <img
                  className='h-[350px] sm:w-fit w-full object-cover rounded-lg'
                  src={t.image}
                  alt={t.name}
                />
              </div>

              <div className='h-[350px] sm:w-[550px] w-full flex justify-center flex-col sm:p-0 p-5'>
                <h1 className='text-2xl text-orange-600 font-bold'>{t.name}</h1>
                <h1 className='text-xl text-cyan-600 font-bold'>{t.role}</h1>
                <br />
                <p>{t.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
