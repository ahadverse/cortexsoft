import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you use CortexSof's website or services, we may collect the following types of information:

Personal Identification Information: Name, email address, phone number, and billing details provided when you contact us, register, or make a purchase.

Usage Data: Information about how you interact with our website, including pages visited, time spent, referring URLs, and browser/device type.

Communication Data: Messages, inquiries, and feedback you submit through our contact forms or email.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to:

— Provide, operate, and improve our services
— Process transactions and send related information such as purchase confirmations
— Respond to your inquiries, requests, and support needs
— Send periodic emails about your order, products, or company news (you may opt out at any time)
— Analyze usage trends to improve user experience
— Comply with legal obligations`,
  },
  {
    title: "3. Data Security",
    body: `We implement a variety of industry-standard security measures to protect your personal information. All sensitive data is transmitted via Secure Socket Layer (SSL) technology and encrypted in our database. Only authorized employees with specific access rights may access personally identifiable information.

Despite these precautions, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.`,
  },
  {
    title: "4. Sharing of Information",
    body: `We do not sell, trade, or rent your personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal information with our business partners, trusted affiliates, and advertisers.

We may disclose your personal information when required to do so by law, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.`,
  },
  {
    title: "5. Cookies",
    body: `Our website may use cookies to enhance your user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, some parts of the website may not function properly.`,
  },
  {
    title: "6. Third-Party Links",
    body: `Our website may contain links to third-party websites. These websites have their own privacy policies, and we have no responsibility or liability for their content and activities. We encourage you to review the privacy policy of every site you visit.`,
  },
  {
    title: "7. Your Rights",
    body: `You have the right to:

— Access, correct, or delete your personal data at any time
— Withdraw consent to data processing where consent is the legal basis
— Request a copy of the personal data we hold about you
— Lodge a complaint with a data protection authority

To exercise any of these rights, please contact us at support@cortexsof.com.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `CortexSof reserves the right to update this Privacy Policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage you to review this page periodically to stay informed about how we are protecting your information.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | CortexSof</title>
        <meta name="description" content="Learn how CortexSof collects, uses, and protects your personal information." />
      </Head>
      <Layout>
        <div className="bg-blue-100 min-h-screen pb-16">
          <div className="sm:w-[900px] w-11/12 m-auto">
            <div className="text-center pt-10 pb-6">
              <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">Legal</p>
              <h1 className="text-4xl font-bold mt-2 animatetext">Privacy Policy</h1>
              <p className="text-gray-500 mt-3 text-sm">Last updated: January 1, 2025</p>
            </div>

            <div className="bg-white rounded shadow-md p-8">
              <p className="text-gray-700 mb-8 leading-relaxed">
                CortexSof ("we", "us", or "our") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services. Please read
                this policy carefully. If you disagree with its terms, please discontinue
                use of our site.
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
                  If you have questions about this Privacy Policy, please contact us at:{" "}
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

export default PrivacyPolicy;
