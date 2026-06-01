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
          <p className="text-lg leading-relaxed mb-6">
            CortexSof stands as a beacon of excellence in the software
            industry. Our mission is to empower businesses through
            transformative, customized software solutions that elevate digital
            experiences. We have successfully translated visions into reality,
            delivering tailored software solutions that meet the unique needs of
            our diverse clientele.
          </p>

          <b className="text-xl block mb-2">Key Offerings</b>
          <p className="mb-6">
            From custom software development and product engineering to web and
            mobile app development, we specialize in crafting seamless user
            experiences. Our expertise extends to digital transformation, SEO,
            digital marketing, and cloud hosting — propelling businesses into
            the future of technology.
          </p>

          <b className="text-xl block mb-2">Technological Expertise</b>
          <p className="mb-6">
            At the core of our success lies a deep understanding of cutting-edge
            technologies. We hold proficiency in JavaScript, PHP, Python,
            Next.js, React, Node.js, and Laravel — enabling us to navigate the
            ever-evolving tech landscape and deliver robust, scalable solutions.
          </p>

          <b className="text-xl block mb-2">Client Success Stories</b>
          <p className="mb-6">
            Proudly serving industries including healthcare, finance,
            e-commerce, education, and logistics, our success stories are
            echoed through client testimonials lauding our reliability,
            innovation, and results-driven approach.
          </p>

          <b className="text-xl block mb-2">Innovation &amp; Achievements</b>
          <p className="mb-6">
            Committed to staying ahead, we invest in ongoing research and
            development initiatives. Our milestones include delivering
            high-performance platforms, achieving measurable SEO outcomes, and
            building enterprise-grade mobile applications across multiple
            industry verticals.
          </p>

          <b className="text-xl block mb-2">Looking Ahead</b>
          <p className="mb-6">
            Our roadmap includes continual growth, forging new partnerships, and
            pioneering technological advancements. We remain dedicated to
            helping businesses thrive in the digital age.
          </p>

          <b className="text-xl block mb-2">Connect With Us</b>
          <p>
            Visit our{" "}
            <Link href="/services/software-development">Services</Link> to
            explore our offerings, reach out via{" "}
            <a href="mailto:support@cortexsof.com">support@cortexsof.com</a>,
            and follow our journey on social media. We look forward to
            partnering with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glance;
