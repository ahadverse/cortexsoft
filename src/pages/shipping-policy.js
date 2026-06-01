import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Digital Products & Services",
    body: `CortexSof provides exclusively digital products and services, including SaaS software subscriptions, custom software development, web and mobile application development, SEO services, digital marketing, and website hosting. No physical goods are sold or shipped.

As all our offerings are delivered digitally, there is no physical shipping involved in any transaction with CortexSof.`,
  },
  {
    title: "Delivery of Digital Products",
    body: `Upon successful payment:

SaaS Products: Access credentials and onboarding instructions are sent to your registered email address within 24 hours of payment confirmation.

Custom Development Projects: Project kickoff is scheduled within 2–3 business days of receipt of the initial payment. Project timelines are defined in the individual service agreement.

Website Hosting: Hosting environments are provisioned and access details delivered via email within 24 hours of payment.

Digital Marketing & SEO: Campaign setup begins within 3–5 business days of payment and contract signing.`,
  },
  {
    title: "Delays & Support",
    body: `In the event of any delay in digital delivery beyond the timelines stated above, please contact our support team at support@cortexsof.com or call +1 (347) 656-3882. We will investigate and resolve the issue within 1 business day.`,
  },
  {
    title: "International Clients",
    body: `CortexSof serves clients worldwide. Since all services are delivered digitally, there are no international shipping fees, customs duties, or import taxes applicable to any of our products or services.`,
  },
  {
    title: "Changes to This Policy",
    body: `CortexSof reserves the right to update this Shipping Policy at any time. Updates will be reflected on this page with a revised effective date. Continued use of our services after any changes constitutes acceptance of the updated policy.`,
  },
];

const ShippingPolicy = () => {
  return (
    <div>
      <Head>
        <title>Shipping Policy | CortexSof</title>
        <meta name="description" content="CortexSof's shipping policy — all products and services are delivered digitally. No physical shipping applies." />
      </Head>
      <Layout>
        <div className="bg-blue-100 min-h-screen pb-16">
          <div className="sm:w-[900px] w-11/12 m-auto">
            <div className="text-center pt-10 pb-6">
              <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">Legal</p>
              <h1 className="text-4xl font-bold mt-2 animatetext">Shipping Policy</h1>
              <p className="text-gray-500 mt-3 text-sm">Last updated: January 1, 2025</p>
            </div>

            <div className="bg-white rounded shadow-md p-8">
              <div className="bg-cyan-50 border border-cyan-200 rounded p-4 mb-8 text-cyan-800 text-sm">
                <strong>Note:</strong> CortexSof sells exclusively digital products and services. No physical goods are shipped. All deliveries are made electronically via email or online platform access.
              </div>

              {sections.map((s) => (
                <div key={s.title} className="mb-8">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              ))}

              <div className="border-t pt-6 mt-6">
                <h2 className="text-xl font-bold mb-3 text-gray-800">Contact Us</h2>
                <p className="text-gray-600">
                  Questions about delivery or digital access? Contact us at{" "}
                  <a href="mailto:support@cortexsof.com" className="text-cyan-600 font-semibold">
                    support@cortexsof.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+13476563882" className="text-cyan-600 font-semibold">
                    +1 (347) 656-3882
                  </a>.
                </p>
                <p className="text-gray-600 mt-2">
                  <Link href="/contact" className="text-cyan-600 underline">Visit our Contact page</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ShippingPolicy;
