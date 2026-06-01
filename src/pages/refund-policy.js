import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body: `At CortexSof, we are committed to delivering high-quality software, design, and digital services. We understand that circumstances change, and we have designed this policy to be fair to both our clients and our team. Please read this policy carefully before engaging our services.`,
  },
  {
    title: "Custom Development Services (Web, App, Software)",
    body: `Deposit (50% upfront): The initial deposit is non-refundable once project discovery, planning, or design work has commenced, as it covers the time and resources allocated to your project.

Progress Payments: Payments made at project milestones are non-refundable for the work already delivered and approved.

Full Refund: If we have not started any work on your project within 7 business days of receiving payment, and you request cancellation, a full refund will be issued.

Partial Refund: If significant work has been completed but the project is cancelled due to circumstances on our end (not client-initiated), a proportional refund based on work not yet completed may be issued at our discretion.`,
  },
  {
    title: "Monthly Subscription Products (SaaS)",
    body: `14-Day Free Trial: All new SaaS product subscriptions include a 14-day free trial period. No charges apply during this period.

Monthly Plans: If you cancel your monthly subscription, you will not be charged for the following billing cycle. No partial refunds are issued for the current billing month, as full access to the product is maintained until the period ends.

Annual Plans: Annual subscriptions cancelled within 30 days of purchase are eligible for a pro-rated refund for unused months. Cancellations after 30 days of an annual subscription are not eligible for refunds.`,
  },
  {
    title: "SEO & Digital Marketing Services",
    body: `Monthly Retainers: Marketing retainer fees are non-refundable once a monthly billing cycle has commenced, as campaign setup, creative work, and ad spend are initiated immediately.

Initial Setup Fees: One-time setup or onboarding fees are non-refundable once work has begun.

Cancellation Notice: We require 30 days written notice to cancel an ongoing marketing retainer.`,
  },
  {
    title: "Website Hosting",
    body: `Monthly hosting plans may be cancelled at any time. No refunds are issued for the current billing month. Annual hosting plans are eligible for a pro-rated refund within the first 30 days of purchase if you are dissatisfied with the service and the issue cannot be resolved by our support team.`,
  },
  {
    title: "How to Request a Refund",
    body: `To initiate a refund request:

1. Email us at support@cortexsof.com with your name, order details, and the reason for your request
2. Our team will respond within 2 business days to acknowledge your request
3. Eligible refunds are processed within 7–10 business days to your original payment method

Disputes that cannot be resolved through direct communication may be escalated to our management team.`,
  },
  {
    title: "Exceptions",
    body: `Refunds will not be granted in the following circumstances:

— The client has approved completed work but later changes their mind
— Issues arise from third-party services, platforms, or APIs outside our control
— The client has violated our Terms and Conditions
— Requests are made more than 60 days after the original transaction date`,
  },
];

const RefundPolicy = () => {
  return (
    <div>
      <Head>
        <title>Refund Policy | CortexSof</title>
        <meta name="description" content="CortexSof's clear and fair refund policy for development services, SaaS products, and marketing retainers." />
      </Head>
      <Layout>
        <div className="bg-blue-100 min-h-screen pb-16">
          <div className="sm:w-[900px] w-11/12 m-auto">
            <div className="text-center pt-10 pb-6">
              <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">Legal</p>
              <h1 className="text-4xl font-bold mt-2 animatetext">Refund Policy</h1>
              <p className="text-gray-500 mt-3 text-sm">Last updated: January 1, 2025</p>
            </div>

            <div className="bg-white rounded shadow-md p-8">
              {sections.map((s) => (
                <div key={s.title} className="mb-8">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              ))}

              <div className="bg-cyan-50 rounded p-6 text-center mt-6">
                <h2 className="text-xl font-bold mb-2">Have a Question About a Refund?</h2>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help. Contact us and we will respond within 2 business days.
                </p>
                <Link href="/contact">
                  <button className="bg-cyan-600 text-white px-8 py-3 rounded font-semibold hover:bg-cyan-700 transition">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RefundPolicy;
