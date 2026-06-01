import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./services.module.css";
import Head from "next/head";
import Link from "next/link";

const SeoServices = () => {
  return (
    <div>
      <Head>
        <title>SEO Services | CortexSof</title>
        <meta name="description" content="Rank higher, attract more traffic, and grow your business with CortexSof's data-driven SEO services." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-4">
            <p className="text-base font-semibold text-cyan-600 uppercase tracking-widest">CortexSof Services</p>
            <h1 className="text-5xl font-bold mt-1">
              <span className="animatetext">SEO Services</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              Dominate search engine rankings with our proven, data-driven SEO strategies.
              From technical audits to content creation and link building, we deliver
              measurable organic growth that compounds over time.
            </p>
          </div>

          <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-5 sm:p-0">

            {/* Starter */}
            <div className={`${style.card} shadow-md hover:shadow-cyan-500/50`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-[#ff6922]">Starter</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $299<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Up to 10 target keywords"],
                  [true, "On-page SEO audit (up to 20 pages)"],
                  [true, "Google Search Console setup"],
                  [true, "Monthly ranking report"],
                  [true, "2 content optimization recommendations"],
                  [false, "Technical SEO fixes"],
                  [false, "Link building"],
                  [false, "Competitor analysis"],
                  [false, "Blog content creation"],
                  [false, "Dedicated SEO manager"],
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
                $599<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Up to 30 target keywords"],
                  [true, "Full on-page SEO optimization"],
                  [true, "Technical SEO audit & fixes"],
                  [true, "5 quality backlinks / month"],
                  [true, "3 competitor analyses"],
                  [true, "Bi-weekly ranking reports"],
                  [true, "2 blog posts / month"],
                  [true, "Schema markup implementation"],
                  [false, "Aggressive link building (15+/mo)"],
                  [false, "Dedicated SEO manager"],
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
                $1,199<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Unlimited target keywords"],
                  [true, "Full on-page SEO optimization"],
                  [true, "Ongoing technical SEO management"],
                  [true, "15+ quality backlinks / month"],
                  [true, "Unlimited competitor analyses"],
                  [true, "Weekly ranking & traffic reports"],
                  [true, "8 blog posts / month"],
                  [true, "Advanced schema markup"],
                  [true, "Aggressive link building campaign"],
                  [true, "Dedicated SEO manager"],
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

export default SeoServices;
