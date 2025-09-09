import Layout from "@/components/shared/layout/layout";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      {" "}
      <div className="bg-blue-100 pb-10">
        <br />

        <div className="sm:h-[450px] bg-orange-500 my-20 pb-10 sm:pb-0">
          <div className="flex justify-between flex-col sm:flex-row sm:w-[1200px] m-auto">
            {" "}
            <div className="sm:w-[450px] text-white p-10">
              <h1 className="text-2xl font-bold">Head Office</h1>
              <hr className="my-1" />
              <p className="flex items-start gap-2">
                <FiPhone className="text-lg" />
                +1 (347) 656-3882
              </p>
              <p className="flex items-start gap-2">
                <MdOutlineMail className="text-lg" />
                kmhasan@cortexsof.com
              </p>
              <p className="flex items-start gap-2">
                <FaMapLocationDot className="text-lg" />
                8000 Baymeadows Cir E #22, Jacksonville, FL, 32256, USA
              </p>
              <br /> <br /> <br />
              <h1 className="text-2xl font-bold">Branch Office</h1>
              <hr className="my-1" />
              <p className="flex items-start gap-2">
                <FiPhone className="text-lg" />
                +88 01710-179900
              </p>
              <p className="flex items-start gap-2">
                <MdOutlineMail className="text-lg" />
                support@cortexsof.com
              </p>
              <p className="flex items-start gap-2">
                <FaMapLocationDot className="text-2xl" />
                House # 752, Road # 10, Avenue # 04, Mirpur DOHS, Dhaka 1216, BD
              </p>
            </div>
            <br />
            <br />
            <br />
            <div
              className="bg-white sm:h-[500px] h-[600px] sm:w-[450px] w-10/12 m-auto sm:m-0 border-4 border-cyan-500 p-5"
              style={{ marginTop: "-25px" }}
            >
              <h1 className="animatetext text-center text-4xl font-bold">
                Contact with CortexSof
              </h1>
              <div className="w-full">
                <br />
                <input
                  className="border-b-2 text-lg w-full"
                  placeholder="Full Name"
                />
                <br />
                <br />

                <input
                  className="border-b-2 text-lg w-full"
                  placeholder="Email"
                />
                <br />

                <br />
                <textarea
                  className="border-b-2 text-lg w-full h-[150px]"
                  placeholder="Message"
                />
                <br />
                <br />
                <button className={"purchageButton"}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
