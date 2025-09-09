import React from "react";
import style from "./tools.module.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { CgPathExclude } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa6";
import { ImPower } from "react-icons/im";
import { SiAltiumdesigner } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { SiAffinityphoto } from "react-icons/si";
import { GiWhiteBook } from "react-icons/gi";
import { BsPlugin } from "react-icons/bs";
import { FaWordpressSimple } from "react-icons/fa";
import { RiWordpressLine } from "react-icons/ri";
import { TbSwipe } from "react-icons/tb";
import { CgShutterstock } from "react-icons/cg";
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import Link from "next/link";

const Ourtools = () => {
  return (
    <div className="  bg-blue-100 pb-10">
      <h1 className="text-xl font-bold pt-10 text-center">CortexSof</h1>
      <h1 className="text-5xl font-bold text-center">
        {" "}
        <span className={style.animatetext}>Our Tools</span>{" "}
      </h1>
      <div>
        <div className="w-full sm:max-w-[1200px]  m-auto grid grid-cols-1 sm:grid-cols-4 gap-10 mt-10 p-5 sm:p-0">
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <MdOutlineDesignServices className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">Logo</h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              10$
            </h2>
            <b className="text-sm text-center block font-bold text-green-500">
              (50%) Discount
            </b>
            <p className="text-center my-2">
              A logo is more than just a visual element; it&apos;s the face of
              your brand. In the business world, a well-designed logo is a
              powerful tool that communicates your brand identity to your
              audience. It serves as a unique symbol.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <CgPathExclude className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Clipping path{" "}
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              10$
            </h2>
            <b className="text-sm text-center block font-bold text-green-500">
              (50%) Discount
            </b>
            <p className="text-center my-2">
              A clipping path is a graphic design technique used to isolate
              objects or remove backgrounds in images. It involves creating a
              vector path around an object, allowing designers to manipulate and
              place the object in various contexts seamlessly.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <FaRegAddressCard className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Card designs
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              10$
            </h2>
            <b className="text-sm text-center block font-bold text-green-500">
              (50%) Discount
            </b>
            <p className="text-center my-2">
              Card designs refer to the visual layout and aesthetics of cards,
              such as business cards, greeting cards, or playing cards. These
              designs play a crucial role in conveying information and making a
              memorable impression.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <ImPower className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              PowerPoint themes
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              20$
            </h2>
            <b className="text-sm text-center block font-bold text-green-500">
              (50%) Discount
            </b>
            <p className="text-center my-2">
              PowerPoint themes are pre-designed templates that determine the
              visual style of a presentation. They include color schemes, font
              styles, and slide layouts, providing a cohesive and professional
              look to your slides.
            </p>

            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <SiAltiumdesigner className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Design templates
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              15$
            </h2>

            <p className="text-center my-2">
              A design template is a pre-made framework that serves as a
              starting point for various design projects. It streamlines the
              design process by offering a structure that can be customized
              based on specific needs.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <SiAdobe className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Adobe files and templates
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              20$
            </h2>

            <p className="text-center my-2">
              Adobe files, commonly associated with Adobe Creative Cloud
              software, include various file formats used in graphic design.
              Templates in Adobe formats provide a foundation for projects in
              software like Adobe Illustrator, Photoshop, or InDesign.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <SiAffinitydesigner className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Affinity Designer
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              5$
            </h2>

            <p className="text-center my-2">
              Affinity Designer is a graphic design software alternative to
              Adobe Illustrator. It offers tools for vector illustration and
              design, making it a popular choice for digital artists and
              designers. It serves as a unique design
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <SiAffinityphoto className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Affinity Photo templates
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              5$
            </h2>

            <p className="text-center my-2">
              Affinity Photo templates are pre-designed files for Affinity Photo
              software. They assist in creating visually appealing images and
              editing photos efficiently within the Affinity Photo environment.
              It serves as a unique templates
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <GiWhiteBook className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">eBook</h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              30$
            </h2>

            <p className="text-center my-2">
              An eBook, short for electronic book, is a digital publication that
              can be read on electronic devices. eBooks come in various formats
              and are widely used for distributing written content online.
              eBooks come in various formats and are widely used for
              distribution.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <BsPlugin className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">Plugin </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              25$
            </h2>

            <p className="text-center my-2">
              A plugin is a piece of software that adds specific features or
              functionalities to an existing computer program. In design
              applications or content management systems, plugins enhance
              capabilities and streamline workflows.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <FaWordpressSimple className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              WordPress Themes
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              50$
            </h2>

            <p className="text-center my-2">
              WordPress themes are pre-designed templates for websites built on
              the WordPress platform. They determine the layout, styling, and
              overall appearance of a website, providing a quick and efficient
              way to create a professional-looking site.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <RiWordpressLine className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              WordPress plugins
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              30$
            </h2>

            <p className="text-center my-2">
              WordPress plugins are software components that add features and
              functionalities to a WordPress website. They can range from SEO
              tools to e-commerce solutions, enhancing the capabilities of a
              WordPress site.providing a quick and efficient site
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <TbSwipe className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Swipe files
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              35$
            </h2>

            <p className="text-center my-2">
              Swipe files are collections of proven and successful marketing or
              design materials, such as copywriting examples, email templates,
              or ad creatives. Designers use swipe files for inspiration and
              reference. It serves as a unique collections.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <CgShutterstock className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Stock icons
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              15$
            </h2>

            <p className="text-center my-2">
              Stock icons are pre-made graphical symbols or images that are
              readily available for use. They are commonly used in web design,
              app development, and other digital projects to represent actions
              or concepts.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <PiSelectionBackgroundDuotone className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Backgrounds
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              40$
            </h2>

            <p className="text-center my-2">
              Backgrounds refer to the visual elements that form the backdrop of
              a design or layout. They play a crucial role in setting the tone
              and enhancing the overall aesthetic appeal of a project. It serves
              as a unique elements
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
          <div
            className={`sm:w-[280px] ${style.card} shadow-md hover:shadow-cyan-500/50`}
          >
            <div className={style.logoIcon}>
              <LiaLaptopCodeSolid className="text-center text-white text-4xl" />
            </div>
            <h1 className="mt-3 mb-2 text-xl font-bold text-center">
              Web-based apps
            </h1>
            <hr className="w-[80px] m-auto" />
            <h2 className={`font-bold text-center text-xl ${style.price}`}>
              80$
            </h2>

            <p className="text-center my-2">
              Web-based apps are applications that operate through a web browser
              rather than being installed on a user&apos;s device. In the design
              realm, web-based apps offer convenient and accessible tools for
              various design tasks.
            </p>
            <Link href={"/checkout"}>
              <button className={style.purchageButton}>Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourtools;
