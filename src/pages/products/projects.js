import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import style from "./products.module.css";
import Head from "next/head";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$89",
    sub: "/mo",
    highlight: false,
    features: [
      { label: "Up to 5 active projects", included: true },
      { label: "Up to 10 team members", included: true },
      { label: "Task & subtask management", included: true },
      { label: "File sharing (5 GB storage)", included: true },
      { label: "Email support", included: true },
      { label: "Unlimited projects", included: false },
      { label: "Time tracking & timesheets", included: false },
      { label: "Advanced reporting & Gantt charts", included: false },
      { label: "Third-party integrations", included: false },
      { label: "Custom workflows", included: false },
      { label: "API access", included: false },
    ],
  },
  {
    name: "Growth",
    price: "$149",
    sub: "/mo",
    highlight: true,
    features: [
      { label: "Unlimited active projects", included: true },
      { label: "Unlimited team members", included: true },
      { label: "Task, subtask & dependency management", included: true },
      { label: "File sharing (50 GB storage)", included: true },
      { label: "Priority support", included: true },
      { label: "Time tracking & timesheets", included: true },
      { label: "Advanced reporting & Gantt charts", included: true },
      { label: "Slack, Jira & GitHub integrations", included: true },
      { label: "Custom workflows", included: false },
      { label: "API access", included: false },
      { label: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$299",
    sub: "/mo",
    highlight: false,
    features: [
      { label: "Unlimited active projects", included: true },
      { label: "Unlimited team members", included: true },
      { label: "Full task & dependency management", included: true },
      { label: "Unlimited storage", included: true },
      { label: "24/7 priority support", included: true },
      { label: "Time tracking & timesheets", included: true },
      { label: "Custom reports & dashboards", included: true },
      { label: "All third-party integrations", included: true },
      { label: "Custom workflows & templates", included: true },
      { label: "Full API access", included: true },
      { label: "Dedicated account manager", included: true },
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Project Manager | CortexSof</title>
        <meta name="description" content="Organize, track, and deliver projects on time with CortexSof Project Manager — built for teams of any size." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-4">
            <p className="text-base font-semibold text-cyan-600 uppercase tracking-widest">CortexSof Products</p>
            <h1 className="text-5xl font-bold mt-1">
              <span className="animatetext">Project Manager</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              Organize, manage, and track all your projects in one place. Set deadlines,
              collaborate with your team, monitor progress in real time, and ensure every
              project is delivered on schedule — without the chaos.
            </p>
          </div>

          <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-5 sm:p-0">
            {tiers.map((tier) => (
              <div key={tier.name} className={`relative ${tier.highlight ? "pt-5" : ""}`}>
                {tier.highlight && (
                  <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                    <span className="bg-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-widest shadow-lg whitespace-nowrap">
                      ★ MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`${style.card} shadow-md ${tier.highlight ? "ring-2 ring-cyan-500 shadow-cyan-500/30" : "hover:shadow-cyan-500/50"}`}>
                  <div className={`text-xl font-bold text-center py-4 -mx-[10px] -mt-[10px] rounded-t mb-5 text-white tracking-wide ${tier.highlight ? "bg-gradient-to-r from-cyan-500 to-blue-600" : "bg-[#ff6922]"}`}>
                    {tier.name}
                  </div>
                  <h2 className={`font-bold text-center text-3xl ${style.price}`}>
                    {tier.price}<span className="text-base font-normal">{tier.sub}</span>
                  </h2>
                  <hr className="w-[80px] my-3 m-auto" />
                  <ul className="my-5">
                    {tier.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-2 border-b py-2 w-[260px] mx-auto text-sm">
                        {f.included
                          ? <GiCheckMark className="text-cyan-600 shrink-0" />
                          : <ImCross className="text-orange-400 shrink-0" />}
                        {f.label}
                      </li>
                    ))}
                  </ul>
                  <Link href="/checkout">
                    <button className={style.purchageButton}>Purchase</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
