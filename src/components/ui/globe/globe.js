import React from "react";

const GlobalClient = () => {
  return (
    <div className="mt-24">
      <h1 className="text-xl font-bold pt-24 text-center">CortexSof</h1>
      <h1 className="text-5xl font-bold text-center">
        {" "}
        <span className="animatetext">Our Global Clients</span>{" "}
      </h1>
      <br />
      <div className=" m-auto">
        <img className="w-full sm:h-[550px] h-[350px]" src="/map.jpg" />
      </div>
    </div>
  );
};

export default GlobalClient;
