import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./services.module.css";
import Head from "next/head";
import Link from "next/link";

const DataEntry = () => {
  return (
    <div>
      <Head>
        <title>Data Entry Services | CortexSof</title>
        <meta name="description" content="Accurate, fast, and secure data entry services from CortexSof — backed by a 99.9% accuracy guarantee." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-4">
            <p className="text-base font-semibold text-cyan-600 uppercase tracking-widest">CortexSof Services</p>
            <h1 className="text-5xl font-bold mt-1">
              <span className="animatetext">Data Entry</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              Accurate, efficient, and secure data entry handled by trained professionals.
              We process high volumes of data with industry-leading accuracy guarantees,
              freeing your team to focus on higher-value work.
            </p>
          </div>

          <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-5 sm:p-0">

            {/* Basic */}
            <div className={`${style.card} shadow-md hover:shadow-cyan-500/50`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-[#ff6922]">Basic</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $299<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Up to 1,000 records / day"],
                  [true, "99% accuracy guarantee"],
                  [true, "Excel / CSV delivery"],
                  [true, "3-day turnaround"],
                  [true, "Email support"],
                  [false, "QA double-check"],
                  [false, "Multiple format delivery"],
                  [false, "1-day turnaround"],
                  [false, "Dedicated data team"],
                  [false, "Same-day turnaround"],
                  [false, "API / FTP delivery"],
                ].map(([ok, label]) => (
                  <li key={label} className="flex items-center gap-2 border-b py-2 w-[260px] mx-auto text-sm">
                    {ok ? <GiCheckMark className="text-cyan-600 shrink-0" /> : <ImCross className="text-orange-400 shrink-0" />}
                    {label}
                  </li>
                ))}
              </ul>
              <Link href="/checkout"><button className={style.purchageButton}>Get Started</button></Link>
            </div>

            {/* Professional */}
            <div className="relative pt-5">
              <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                <span className="bg-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-widest shadow-lg whitespace-nowrap">
                  ★ MOST POPULAR
                </span>
              </div>
              <div className={`${style.card} shadow-md ring-2 ring-cyan-500 shadow-cyan-500/30`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600">Professional</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $599<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Up to 5,000 records / day"],
                  [true, "99.9% accuracy guarantee"],
                  [true, "Excel, CSV, JSON, XML delivery"],
                  [true, "1-day turnaround"],
                  [true, "Priority support"],
                  [true, "QA double-check on all data"],
                  [true, "Multiple format delivery"],
                  [true, "Dedicated data entry team"],
                  [false, "Same-day turnaround"],
                  [false, "Real-time API / FTP delivery"],
                  [false, "Custom data validation rules"],
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
                $999<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Unlimited records / day"],
                  [true, "99.99% accuracy guarantee"],
                  [true, "All formats including custom"],
                  [true, "Same-day turnaround"],
                  [true, "24/7 priority support"],
                  [true, "Triple QA verification"],
                  [true, "All delivery formats"],
                  [true, "Dedicated enterprise team"],
                  [true, "Real-time API / FTP delivery"],
                  [true, "Custom data validation rules"],
                  [true, "NDA & compliance documentation"],
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

export default DataEntry;
