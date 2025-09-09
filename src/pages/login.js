import Layout from "@/components/shared/layout/layout";
import React from "react";

const Login = () => {
  return (
    <div>
      <Layout>
        {" "}
        <div className="bg-blue-100 pb-10">
          <br />
          <br />
          <br />
          <div
            className="bg-white h-[350px]  sm:w-[450px] w-10/12 m-auto   border border-4 border-cyan-500 p-5"
            style={{ marginTop: "-25px" }}
          >
            <h1 className="text-5xl font-bold text-center">
              {" "}
              <span className="animatetext">Login</span>{" "}
            </h1>
            <div className="w-full">
              <br />
              <input
                className="border-b-2 text-lg w-full"
                placeholder="Email / Username"
              />
              <br />
              <br />
              <br />

              <input
                className="border-b-2 text-lg w-full"
                placeholder="Password"
              />
              <br />
              <br />
              <br />

              <button className={"purchageButton2"}>Login</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
