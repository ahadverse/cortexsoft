import React from "react";
import style from "./message.module.css";
import Link from "next/link";

const Message = () => {
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
            <span className={`animatetext`}>Message From C.E.O</span>{" "}
          </h1>
          <br /> <br />
          <b className="text-xl">Dear CortexSof Family,</b>
          <br />
          <br />
          As we mark the remarkable milestone of our first year, I am filled
          with gratitude and pride reflecting on the incredible journey
          we&apos;ve embarked upon together. Today, we celebrate not just a year
          in business, but a year of innovation, collaboration, and shared
          success.
          <br />
          <br />
          From the inception of CortexSof, our vision has been clear — to
          empower businesses through transformative software solutions. I am
          immensely proud of the dedication and brilliance each of you has
          brought to make this vision a reality. In the face of challenges,
          we&apos;ve not only persevered but thrived, delivering cutting-edge
          solutions that have left an indelible mark on our clients and the
          industries we serve.
          <br />
          <br />
          Our success is a testament to the passion and expertise that defines
          our CortexSof family. Your commitment to excellence, creativity, and
          client satisfaction has set us apart in a competitive landscape.
          Together, we&apos;ve achieved significant milestones, and I am
          confident that this is just the beginning.
          <br />
          <br />
          As we look ahead, let&apos;s carry forward the spirit of innovation
          and collaboration that has brought us to this point. Our journey
          continues, and there are boundless opportunities for us to explore,
          new heights to reach, and new challenges to conquer. Let&apos;s
          embrace the future with enthusiasm and continue shaping the digital
          landscape.
          <br />
          <br />
          I extend my heartfelt thanks to each member of the CortexSof team, our
          clients, and partners for being an integral part of this extraordinary
          journey. Here&apos;s to the successes we&apos;ve celebrated and the
          even greater ones that lie ahead.
          <br />
          As we commemorate the first anniversary of CortexSof, I find myself
          reflecting on the incredible journey we&apos;ve undertaken together.
          This year has been nothing short of extraordinary, filled with
          achievements, challenges, and most importantly, the unwavering spirit
          of our collective dedication.
          <br /> <br />
          From the inception of CortexSof, our mission has been to revolutionize
          businesses through innovative software solutions. Today, I stand proud
          as I witness the realization of that mission through the remarkable
          efforts of our talented team. Your ingenuity, commitment, and tireless
          work have not only met but exceeded the expectations of our clients,
          positioning us as a driving force in the industry.
          <br /> <br />
          Our success story is written in the code we&apos;ve crafted, the
          partnerships we&apos;ve forged, and the challenges we&apos;ve
          overcome. Each of you has played an integral role in shaping [Company
          Name]&apos;s identity and impact. I express my deepest gratitude to
          our team, whose passion and expertise have been the bedrock of our
          achievements.
          <br /> <br />
          Looking forward, the road ahead is filled with promise and potential.
          Together, let&apos;s continue pushing the boundaries of innovation,
          exploring new horizons, and maintaining the collaborative spirit that
          defines CortexSof. The journey continues, and I am excited about the
          endless possibilities that await us.
          <br /> <br />
          To our clients, partners, and every individual who has contributed to
          our success, thank you for your trust and collaboration. Here&apos;s
          to the remarkable first year we&apos;ve celebrated and the boundless
          opportunities that lie ahead.
          <br />
          <br />
          <br />
          <b> With sincere appreciation,</b>
          <br />
          <br />
          <b>Tanbir Islam CEO, CortexSof</b>
        </div>
      </div>
    </div>
  );
};

export default Message;
