import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import TopHeader from "../topheader/topheader";
import DrawersMenu from "../drawer/drawer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  // <DrawersMenu setOpen={setOpen} open={open} />
  return (
    <div>
      <DrawersMenu setOpen={setOpen} open={open} />
      <div className={`${open ? "contrast-50 blur-sm" : "contrast-100"}`}>
        <TopHeader />
        <Header setOpen={setOpen} open={open} />
        {children}
        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
