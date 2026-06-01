import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import React from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using CortexSof's website, products, or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms stated here, please do not use our services. These terms apply to all visitors, users, and clients.`,
  },
  {
    title: "2. Services",
    body: `CortexSof provides software development, web development, mobile app development, SEO, digital marketing, website hosting, data entry, and related SaaS products. The specific scope, deliverables, and timelines for each project or subscription are defined in the agreed service agreement or order confirmation.

We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice to existing clients.`,
  },
  {
    title: "3. Client Responsibilities",
    body: `As a client, you agree to:

— Provide accurate, complete information necessary for us to deliver services
— Respond to requests for feedback, approvals, or materials within agreed timelines
— Use our services only for lawful purposes and in compliance with applicable laws
— Not attempt to reverse engineer, copy, or resell our proprietary software products without written permission
— Maintain the confidentiality of any login credentials provided to you`,
  },
  {
    title: "4. Payments & Invoicing",
    body: `All prices are listed in USD unless otherwise stated. Payment is due according to the terms outlined in your service agreement or subscription plan.

For project-based work, a deposit (typically 50%) is required before development begins, with the remaining balance due upon project completion. For monthly subscriptions, billing occurs on the same day each month.

Invoices unpaid after 30 days may incur a late fee of 1.5% per month on the outstanding balance.`,
  },
  {
    title: "5. Intellectual Property",
    body: `Upon full payment, you receive ownership of the custom deliverables created specifically for your project (websites, applications, designs). CortexSof retains ownership of:

— Proprietary frameworks, libraries, and tools used during development
— Pre-existing code, components, or templates incorporated into your project
— All content on the CortexSof website and marketing materials

You may not reproduce, distribute, or create derivative works from CortexSof's proprietary materials without prior written consent.`,
  },
  {
    title: "6. Confidentiality",
    body: `Both parties agree to keep confidential all non-public information shared during the course of the engagement, including business plans, technical specifications, pricing, and client data. This obligation survives termination of the service agreement.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `CortexSof's liability for any claim arising from or related to our services shall not exceed the total fees paid by you in the 12 months preceding the claim. We are not liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.`,
  },
  {
    title: "8. Termination",
    body: `Either party may terminate a service agreement with 30 days written notice. CortexSof may terminate immediately if you violate these terms, engage in fraudulent activity, or fail to make payment after a 14-day cure period.

Upon termination, outstanding balances become immediately due. You will retain access to any fully paid deliverables.`,
  },
  {
    title: "9. Governing Law",
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida, USA. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Jacksonville, Florida.`,
  },
  {
    title: "10. Changes to These Terms",
    body: `We reserve the right to modify these Terms and Conditions at any time. We will notify existing clients of material changes via email. Continued use of our services after changes take effect constitutes acceptance of the revised terms.`,
  },
];

const TermsAndConditions = () => {
  return (
    <div>
      <Head>
        <title>Terms & Conditions | CortexSof</title>
        <meta name="description" content="Read the Terms and Conditions governing the use of CortexSof's services and products." />
      </Head>
      <Layout>
        <div className="bg-blue-100 min-h-screen pb-16">
          <div className="sm:w-[900px] w-11/12 m-auto">
            <div className="text-center pt-10 pb-6">
              <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">Legal</p>
              <h1 className="text-4xl font-bold mt-2 animatetext">Terms &amp; Conditions</h1>
              <p className="text-gray-500 mt-3 text-sm">Last updated: January 1, 2025</p>
            </div>

            <div className="bg-white rounded shadow-md p-8">
              <p className="text-gray-700 mb-8 leading-relaxed">
                Please read these Terms and Conditions carefully before using CortexSof's
                website or engaging our services. These terms constitute a legally binding
                agreement between you (the client or visitor) and CortexSof Limited.
              </p>

              {sections.map((s) => (
                <div key={s.title} className="mb-8">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              ))}

              <div className="border-t pt-6 mt-6">
                <h2 className="text-xl font-bold mb-3 text-gray-800">Contact Us</h2>
                <p className="text-gray-600">
                  For questions about these Terms, please contact:{" "}
                  <a href="mailto:support@cortexsof.com" className="text-cyan-600 font-semibold">
                    support@cortexsof.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TermsAndConditions;
