import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./services.module.css";
import Head from "next/head";
import Link from "next/link";

const SoftwareDevelopment = () => {
  return (
    <div>
      <Head>
        <title>Software Development | CortexSof</title>
        <meta name="description" content="Custom software development from CortexSof — scalable, secure, and tailored to your exact business requirements." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-4">
            <p className="text-base font-semibold text-cyan-600 uppercase tracking-widest">CortexSof Services</p>
            <h1 className="text-5xl font-bold mt-1">
              <span className="animatetext">Software Development</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              From MVPs to enterprise platforms, we build custom software that solves real
              business problems. Our full-cycle development process covers architecture,
              design, development, testing, and ongoing support.
            </p>
          </div>

          <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-5 sm:p-0">

            {/* Startup */}
            <div className={`${style.card} shadow-md hover:shadow-cyan-500/50`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-[#ff6922]">Startup</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $2,999<span className="text-base font-normal"> one-time</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "MVP / proof-of-concept build"],
                  [true, "Up to 20 core features"],
                  [true, "REST API development"],
                  [true, "Admin panel"],
                  [true, "Basic UI/UX design"],
                  [true, "Up to 3 months development"],
                  [true, "1 month post-launch support"],
                  [false, "Microservices architecture"],
                  [false, "Third-party integrations"],
                  [false, "Dedicated development team"],
                  [false, "Ongoing SLA maintenance"],
                ].map(([ok, label]) => (
                  <li key={label} className="flex items-center gap-2 border-b py-2 w-[260px] mx-auto text-sm">
                    {ok ? <GiCheckMark className="text-cyan-600 shrink-0" /> : <ImCross className="text-orange-400 shrink-0" />}
                    {label}
                  </li>
                ))}
              </ul>
              <Link href="/checkout"><button className={style.purchageButton}>Get Started</button></Link>
            </div>

            {/* Business */}
            <div className="relative pt-5">
              <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                <span className="bg-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-widest shadow-lg whitespace-nowrap">
                  ★ MOST POPULAR
                </span>
              </div>
              <div className={`${style.card} shadow-md ring-2 ring-cyan-500 shadow-cyan-500/30`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600">Business</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $5,999<span className="text-base font-normal"> one-time</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Full product development"],
                  [true, "Up to 40 features"],
                  [true, "REST & GraphQL API"],
                  [true, "Admin panel + user portal"],
                  [true, "Custom UI/UX design"],
                  [true, "Up to 6 months development"],
                  [true, "3 months post-launch support"],
                  [true, "Microservices architecture"],
                  [true, "Third-party integrations (up to 5)"],
                  [false, "Dedicated development team"],
                  [false, "Ongoing SLA maintenance"],
                ].map(([ok, label]) => (
                  <li key={label} className="flex items-center gap-2 border-b py-2 w-[260px] mx-auto text-sm">
                    {ok ? <GiCheckMark className="text-cyan-600 shrink-0" /> : <ImCross className="text-orange-400 shrink-0" />}
                    {label}
                  </li>
                ))}
              </ul>
              <Link href="/checkout"><button className={style.purchageButton}>Get Started</button></Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className={`${style.card} shadow-md hover:shadow-cyan-500/50`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-[#ff6922]">Enterprise</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                Custom
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Enterprise-grade platform"],
                  [true, "Unlimited features & modules"],
                  [true, "Full API ecosystem"],
                  [true, "Multi-role portals & dashboards"],
                  [true, "Premium UI/UX design system"],
                  [true, "Custom development timeline"],
                  [true, "6+ months post-launch support"],
                  [true, "Microservices + cloud-native architecture"],
                  [true, "Unlimited third-party integrations"],
                  [true, "Dedicated development team"],
                  [true, "Ongoing SLA maintenance contract"],
                ].map(([ok, label]) => (
                  <li key={label} className="flex items-center gap-2 border-b py-2 w-[260px] mx-auto text-sm">
                    {ok ? <GiCheckMark className="text-cyan-600 shrink-0" /> : <ImCross className="text-orange-400 shrink-0" />}
                    {label}
                  </li>
                ))}
              </ul>
              <Link href="/contact"><button className={style.purchageButton}>Contact Us</button></Link>
            </div>

          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SoftwareDevelopment;
