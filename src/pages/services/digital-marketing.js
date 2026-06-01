import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./services.module.css";
import Head from "next/head";
import Link from "next/link";

const DigitalMarketing = () => {
  return (
    <div>
      <Head>
        <title>Digital Marketing | CortexSof</title>
        <meta name="description" content="Drive real results with CortexSof's performance-focused digital marketing services — Google Ads, social media, email campaigns, and more." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-4">
            <p className="text-base font-semibold text-cyan-600 uppercase tracking-widest">CortexSof Services</p>
            <h1 className="text-5xl font-bold mt-1">
              <span className="animatetext">Digital Marketing</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              Reach your ideal customers across every digital channel. Our performance
              marketing specialists build and manage campaigns that generate qualified
              leads, maximize ROI, and grow your brand at scale.
            </p>
          </div>

          <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-5 sm:p-0">

            {/* Starter */}
            <div className={`${style.card} shadow-md hover:shadow-cyan-500/50`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-[#ff6922]">Starter</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $399<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Google Ads setup & management"],
                  [true, "Up to $500 monthly ad spend"],
                  [true, "1 ad campaign"],
                  [true, "Basic ad creative design"],
                  [true, "Monthly performance report"],
                  [false, "Facebook & Instagram Ads"],
                  [false, "A/B ad testing"],
                  [false, "Retargeting campaigns"],
                  [false, "Custom landing page design"],
                  [false, "Dedicated marketing manager"],
                ].map(([ok, label]) => (
                  <li key={label} className="flex items-center gap-2 border-b py-2 w-[260px] mx-auto text-sm">
                    {ok ? <GiCheckMark className="text-cyan-600 shrink-0" /> : <ImCross className="text-orange-400 shrink-0" />}
                    {label}
                  </li>
                ))}
              </ul>
              <Link href="/checkout"><button className={style.purchageButton}>Get Started</button></Link>
            </div>

            {/* Growth */}
            <div className="relative pt-5">
              <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                <span className="bg-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-widest shadow-lg whitespace-nowrap">
                  ★ MOST POPULAR
                </span>
              </div>
              <div className={`${style.card} shadow-md ring-2 ring-cyan-500 shadow-cyan-500/30`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600">Growth</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $799<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Google + Facebook + Instagram Ads"],
                  [true, "Up to $2,000 monthly ad spend"],
                  [true, "Up to 3 ad campaigns"],
                  [true, "Custom ad creative design"],
                  [true, "Bi-weekly performance reports"],
                  [true, "A/B ad testing"],
                  [true, "Retargeting campaigns"],
                  [true, "Custom landing page design"],
                  [false, "LinkedIn Ads"],
                  [false, "Dedicated marketing manager"],
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
                $1,499<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Full multi-channel campaigns"],
                  [true, "Unlimited monthly ad spend management"],
                  [true, "Unlimited ad campaigns"],
                  [true, "Premium creative production"],
                  [true, "Real-time performance dashboard"],
                  [true, "Advanced A/B & multivariate testing"],
                  [true, "Full retargeting & lookalike audiences"],
                  [true, "Custom landing pages & funnels"],
                  [true, "LinkedIn + YouTube + TikTok Ads"],
                  [true, "Dedicated marketing manager"],
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
        </div>
      </Layout>
    </div>
  );
};

export default DigitalMarketing;
