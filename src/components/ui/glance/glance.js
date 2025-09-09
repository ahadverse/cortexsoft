import React from "react";
import style from "./glance.module.css";
import Link from "next/link";

const Glance = () => {
  return (
    <div className="">
      <div>
        <div className="sm:w-[1080px] m-auto bg-white sm:p-10 p-2 mt-24 relative mb-10 rounded">
          <img className={`${style.logo} absolute top-0`} src="/logo.png" />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <h1 className="text-5xl font-bold text-center">
            {" "}
            <span className={style.animatetext}>At a Glance</span>{" "}
          </h1>
          <br /> <br />
          🎉CortexSof stands as a beacon of excellence in the software industry.
          Our mission is to empower businesses through transformative,
          customized software solutions that elevate digital experiences. In our
          inaugural year, we&apos;ve successfully translated visions into
          reality, delivering tailored software solutions that meet the unique
          needs of our diverse clientele. <br /> <br />
          <b className="text-xl">**Key Offerings:**</b>
          <br />
          From custom software development and product engineering to web and
          mobile app development, we specialize in crafting seamless user
          experiences. Our expertise extends to digital transformation,
          propelling businesses into the future of technology.
          <br /> <br />
          <b className="text-xl"> **Technological Expertise:**</b>
          <br />
          At the core of our success lies a deep understanding of cutting-edge
          technologies. Armed with proficiency in JavaScript, PHP, Python, C,
          Next, Laravel, we navigate the ever-evolving tech landscape with
          finesse.
          <br /> <br />
          <b className="text-xl">**Client and Success Stories:**</b>
          <br />
          Proudly serving industries ranging from one company to another, our
          success stories are echoed through client testimonials lauding our
          reliability, innovation, and results-driven approach.
          <br /> <br />
          <b className="text-xl"> **Innovation Focus and Achievements:**</b>
          <br />
          Committed to staying ahead, we invest in ongoing research and
          development initiatives. In our first year, we&apos;ve achieved
          significant milestones, setting the stage for continued success.
          <br /> <br />
          <b className="text-xl">**Looking Ahead:**</b>
          <br />
          As we mark this milestone, our gaze is firmly set on the future. The
          roadmap ahead includes continual growth, forging new partnerships, and
          pioneering technological advancements.
          <br /> <br />
          <b className="text-xl">**Connect With Us:**</b>
          <br />
          Visit our <Link href={"/"}>Services</Link> to explore our offerings,
          reach out via support@cortexsof.com, and follow our journey on Social
          Media. Thank you for being an integral part of our first-year
          celebration. Here&apos;s to many more years of innovation and
          collaboration! 🚀
        </div>
      </div>
    </div>
  );
};

export default Glance;
