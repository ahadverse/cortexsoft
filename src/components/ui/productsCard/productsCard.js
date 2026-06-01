import React from "react";
import { FaCommentSms } from "react-icons/fa6";
import style from "./productsCard.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineProject, AiOutlineBarChart } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";
import Link from "next/link";

const products = [
  {
    icon: <FaCommentSms className="text-center text-white text-4xl" />,
    name: "SMS Responder",
    price: "$49",
    description:
      "Respond to customer text messages automatically with personalized, data-driven SMS replies across all major platforms.",
    href: "/products/sms-responder",
  },
  {
    icon: <MdOutlineMailOutline className="text-center text-white text-4xl" />,
    name: "Email Responder",
    price: "$39",
    description:
      "Automate email replies with intelligent autoresponders triggered by user actions, ensuring timely and consistent communication.",
    href: "/products/email-responder",
  },
  {
    icon: <BiSolidOffer className="text-center text-white text-4xl" />,
    name: "Offer Management",
    price: "$69",
    description:
      "Create, schedule, and track promotional offers across your platform. Deliver targeted deals to boost customer conversions.",
    href: "/products/offer-management",
  },
  {
    icon: <AiOutlineProject className="text-center text-white text-4xl" />,
    name: "Project Manager",
    price: "$89",
    description:
      "Organize and track all your projects in one place. Set deadlines, collaborate with your team, and hit every milestone on time.",
    href: "/products/projects",
  },
  {
    icon: <AiOutlineBarChart className="text-center text-white text-4xl" />,
    name: "Analytics Dashboard",
    price: "$59",
    description:
      "Visualize key business metrics in real time with customizable dashboards, automated reporting, and actionable insights.",
    href: "/products/analytics-dashboard",
  },
  {
    icon: <BsChatDotsFill className="text-center text-white text-4xl" />,
    name: "Live Chat Support",
    price: "$45",
    description:
      "Engage website visitors instantly with real-time live chat, AI chatbot automation, and full conversation history.",
    href: "/products/live-chat",
  },
];

const ProductsCard = () => {
  return (
    <div className="bg-white pt-16 mb-24">
      <h1 className="text-xl font-bold pt-4 text-center">Our Products</h1>
      <h1 className="sm:text-5xl text-4xl font-bold mt-3 text-center">
        <span className={style.animatetext}>We Offer a Wide Range of Products</span>
      </h1>
      <div className="w-full max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 p-5 sm:p-0">
        {products.map((product) => (
          <div
            key={product.name}
            className={`${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>{product.icon}</div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              {product.name}
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              {product.price}
              <span className="text-sm font-normal">/mo</span>
            </h2>
            <p className="text-center my-2 text-sm px-2">{product.description}</p>
            <div className="flex gap-3 justify-center mt-2">
              <Link href={product.href}>
                <button className={style.detailButton}>Details</button>
              </Link>
              <Link href="/checkout">
                <button className={style.purchageButton}>Purchase</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
