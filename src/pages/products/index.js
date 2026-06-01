import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import btnStyle from "@/components/ui/productsCard/productsCard.module.css";

const saasProducts = [
  {
    name: "SMS Responder",
    price: "$49/mo",
    description:
      "Automatically respond to customer text messages with personalized, data-driven SMS replies across all major platforms.",
    features: ["Unlimited response modules", "Push notifications", "Advanced analytics", "API access"],
    href: "/products/sms-responder",
  },
  {
    name: "Email Responder",
    price: "$39/mo",
    description:
      "Intelligent autoresponders triggered by user actions — ensuring timely, consistent email communication around the clock.",
    features: ["Unlimited autoresponders", "A/B testing", "Drip campaigns", "Custom SMTP"],
    href: "/products/email-responder",
  },
  {
    name: "Offer Management",
    price: "$69/mo",
    description:
      "Create, schedule, and track promotional offers across your platform. Deliver the right deal to the right customer every time.",
    features: ["Unlimited active offers", "Multi-channel distribution", "A/B offer testing", "Customer segmentation"],
    href: "/products/offer-management",
  },
  {
    name: "Project Manager",
    price: "$89/mo",
    description:
      "Organize and track all your projects in one place — with task management, time tracking, Gantt charts, and team collaboration.",
    features: ["Unlimited projects", "Time tracking", "Gantt charts", "Third-party integrations"],
    href: "/products/projects",
  },
  {
    name: "Analytics Dashboard",
    price: "$59/mo",
    description:
      "Visualize key business metrics in real time. Build custom dashboards, automate reports, and turn raw data into decisions.",
    features: ["Unlimited dashboards", "Real-time data", "Custom charts", "Scheduled reports"],
    href: "/products/analytics-dashboard",
  },
  {
    name: "Live Chat Support",
    price: "$45/mo",
    description:
      "Engage visitors instantly with real-time live chat, AI chatbot automation, and full conversation history across channels.",
    features: ["Unlimited conversations", "AI chatbot", "CRM integration", "Multi-channel support"],
    href: "/products/live-chat",
  },
];

const enterpriseProducts = [
  {
    name: "E-Commerce Platform",
    price: "$1,200",
    description:
      "A fully custom e-commerce website with product catalog, cart, checkout, payment gateway, and admin panel — built for scale.",
    features: ["Custom storefront design", "Payment gateway integration", "Inventory management", "Order tracking"],
    href: "/contact",
  },
  {
    name: "CRM Development",
    price: "$1,500",
    description:
      "A bespoke CRM system tailored to your sales workflow — manage leads, clients, pipelines, and communications in one place.",
    features: ["Lead & pipeline management", "Custom reporting", "Email integration", "Role-based access"],
    href: "/contact",
  },
  {
    name: "API Development",
    price: "$1,000",
    description:
      "Custom REST or GraphQL API design and development — secure, well-documented, and built to integrate with any platform.",
    features: ["RESTful & GraphQL APIs", "Authentication & security", "Full documentation", "Third-party integrations"],
    href: "/contact",
  },
  {
    name: "Cloud Infrastructure",
    price: "$1,500",
    description:
      "End-to-end cloud setup and migration on AWS, Google Cloud, or Azure — scalable, secure, and optimised for performance.",
    features: ["Cloud architecture design", "CI/CD pipelines", "Auto-scaling setup", "Monitoring & alerts"],
    href: "/contact",
  },
  {
    name: "UI/UX Design",
    price: "$1,000",
    description:
      "A complete, professional UI/UX design system for your web or mobile product — from wireframes to pixel-perfect handoff.",
    features: ["User research & wireframes", "High-fidelity mockups", "Design system & tokens", "Developer handoff"],
    href: "/contact",
  },
  {
    name: "Data Analytics",
    price: "$1,200",
    description:
      "Custom data analytics solution integrating your data sources, building pipelines, and delivering actionable dashboards.",
    features: ["Data pipeline setup", "Custom dashboards", "KPI reporting", "Predictive analytics"],
    href: "/contact",
  },
  {
    name: "ERP System",
    price: "$2,000",
    description:
      "A fully integrated enterprise resource planning system covering HR, finance, inventory, procurement, and operations.",
    features: ["Multi-module architecture", "Finance & HR modules", "Real-time reporting", "Custom workflow engine"],
    href: "/contact",
  },
  {
    name: "System Integration",
    price: "$1,800",
    description:
      "Connect your existing software ecosystem — ERP, CRM, payment gateways, third-party APIs — into one seamless platform.",
    features: ["API & webhook integrations", "Data sync & mapping", "Error handling & logging", "Custom middleware"],
    href: "/contact",
  },
];

const ProductCard = ({ product, isEnterprise }) => (
  <div className="group bg-white rounded-lg shadow-md hover:shadow-cyan-500/40 hover:shadow-lg transition flex flex-col">
    <div className={`rounded-t-lg p-5 ${isEnterprise ? "bg-gradient-to-r from-cyan-500 to-[#00aaff]" : "bg-[#ff6922]"}`}>
      <h2 className="text-xl font-bold text-white">{product.name}</h2>
      <p className="text-white/90 font-semibold text-lg mt-0.5">
        {product.price}
        {!isEnterprise && <span className="text-sm font-normal"> /mo</span>}
        {isEnterprise && <span className="text-sm font-normal"> starting</span>}
      </p>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
      <ul className="mb-5 space-y-1.5 flex-1">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-3 mt-auto pt-2">
        {!isEnterprise && (
          <Link href={product.href}>
            <button className={`${btnStyle.detailButton} group-hover:bg-[#00aaff] group-hover:text-white`}>Details</button>
          </Link>
        )}
        <Link href={isEnterprise ? "/contact" : "/checkout"}>
          <button className={`${btnStyle.purchageButton} group-hover:bg-[#ff6922] group-hover:text-white`}>
            {isEnterprise ? "Get a Quote" : "Purchase"}
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const AllProducts = () => {
  return (
    <div>
      <Head>
        <title>All Products | CortexSof</title>
        <meta name="description" content="Explore CortexSof's full product suite — from monthly SaaS tools to enterprise custom software solutions." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-20">
          <div className="text-center pt-12 pb-8 px-4">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-2">CortexSof</p>
            <h1 className="sm:text-5xl text-4xl font-bold animatetext">Our Complete Product Suite</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From affordable monthly SaaS tools to enterprise-grade custom platforms —
              everything your business needs to operate, grow, and scale.
            </p>
          </div>

          {/* SaaS Products */}
          <div className="sm:w-[1200px] w-11/12 m-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#ff6922] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest">SaaS PRODUCTS</span>
              <span className="text-gray-500 text-sm">Monthly subscriptions — cancel anytime</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {saasProducts.map((p) => <ProductCard key={p.name} product={p} isEnterprise={false} />)}
            </div>
          </div>

          {/* Enterprise Products */}
          <div className="sm:w-[1200px] w-11/12 m-auto mt-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-cyan-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest">ENTERPRISE SOLUTIONS</span>
              <span className="text-gray-500 text-sm">Custom-built, one-time project pricing</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {enterpriseProducts.map((p) => <ProductCard key={p.name} product={p} isEnterprise={true} />)}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 px-4">
            <h2 className="text-2xl font-bold mb-3">Have a unique requirement?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our team builds fully bespoke software tailored to your exact needs.
              Let&apos;s discuss your project.
            </p>
            <Link href="/contact">
              <button className="bg-cyan-600 text-white px-10 py-3 rounded font-semibold hover:bg-cyan-700 transition">
                Talk to Our Team
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AllProducts;
