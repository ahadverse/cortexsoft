import React from "react";
import style from "./mission.module.css";
import Link from "next/link";

const Mission = () => {
  return (
    <div className="">
      <div>
        <div className="sm:w-[1080px] m-auto bg-white sm:p-10 p-3 mt-24 relative mb-10 rounded">
          <img className={`${style.logo} absolute top-0`} src="/logo.png" />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />{" "}
          <h1 className="text-5xl font-bold text-center">
            {" "}
            <span className={`animatetext`}>Mission & Vision</span>{" "}
          </h1>
          <br /> <br />
          <b className="text-xl block mb-2">Our Mission</b>
          <p className="text-lg leading-relaxed mb-8">
            At CortexSof, our mission is to empower businesses through
            innovative and scalable software solutions. We are dedicated to
            understanding and addressing the unique challenges faced by our
            clients, providing them with cutting-edge technology that transforms
            their visions into digital reality. Through a commitment to
            excellence, collaboration, and adaptability, we aim to be a driving
            force in the digital evolution of businesses across diverse
            industries.
          </p>

          <b className="text-xl block mb-2">Our Vision</b>
          <p className="text-lg leading-relaxed">
            Our vision is to be recognized as a global leader in software
            development, renowned for our unwavering commitment to quality,
            creativity, and technological advancement. By fostering a culture of
            continuous learning and exploration, we seek to push the boundaries
            of what is possible, setting new industry standards and inspiring
            others to embrace the full potential of technology. Ultimately, we
            envision a future where businesses thrive in the digital age,
            empowered by the transformative solutions we deliver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
