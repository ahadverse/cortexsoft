import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./services.module.css";
import Head from "next/head";
import Link from "next/link";

const WebsiteHosting = () => {
  return (
    <div>
      <Head>
        <title>Website Hosting | CortexSof</title>
        <meta name="description" content="Fast, secure, and reliable website hosting from CortexSof — with 99.9% uptime, free SSL, and expert support." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-4">
            <p className="text-base font-semibold text-cyan-600 uppercase tracking-widest">CortexSof Services</p>
            <h1 className="text-5xl font-bold mt-1">
              <span className="animatetext">Website Hosting</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              Your website deserves a hosting environment that is fast, reliable, and
              secure. Our hosting plans are optimized for performance, with free SSL,
              daily backups, and expert support — so you can focus on growing your business.
            </p>
          </div>

          <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-5 sm:p-0">

            {/* Basic */}
            <div className={`${style.card} shadow-md hover:shadow-cyan-500/50`}>
              <div className="text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide bg-[#ff6922]">Basic</div>
              <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                $29<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Shared cloud hosting"],
                  [true, "10 GB SSD storage"],
                  [true, "1 domain hosted"],
                  [true, "Free SSL certificate"],
                  [true, "99.9% uptime SLA"],
                  [true, "Weekly backups"],
                  [false, "CDN (Content Delivery Network)"],
                  [false, "Daily backups"],
                  [false, "5+ domains"],
                  [false, "DDoS protection"],
                  [false, "24/7 phone support"],
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
                $79<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Cloud VPS hosting"],
                  [true, "100 GB NVMe SSD storage"],
                  [true, "Up to 5 domains hosted"],
                  [true, "Free SSL certificate"],
                  [true, "99.9% uptime SLA"],
                  [true, "Daily automated backups"],
                  [true, "CDN (Content Delivery Network)"],
                  [true, "Priority email support"],
                  [false, "Unlimited domains"],
                  [false, "DDoS protection"],
                  [false, "24/7 phone support"],
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
                $199<span className="text-base font-normal">/mo</span>
              </h2>
              <hr className="w-[80px] my-3 m-auto" />
              <ul className="my-5">
                {[
                  [true, "Dedicated cloud server"],
                  [true, "Unlimited NVMe SSD storage"],
                  [true, "Unlimited domains hosted"],
                  [true, "Premium SSL certificate"],
                  [true, "99.99% uptime SLA"],
                  [true, "Real-time automated backups"],
                  [true, "Global CDN with edge caching"],
                  [true, "DDoS protection"],
                  [true, "Unlimited domains"],
                  [true, "Server performance monitoring"],
                  [true, "24/7 phone & priority support"],
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

export default WebsiteHosting;
