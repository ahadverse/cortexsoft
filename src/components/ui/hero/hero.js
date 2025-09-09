import React from "react";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className="sm:w-6/12 w-11/12">
          <div className="mb-10">
            <ul className="block m-auto sm:m-0 w-[120px]">
              <li className={style.loading}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
              <li className={style.loading2}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
              <li className={style.loading3}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
              <li className={style.loading4}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
              <li className={style.loading5}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
              <li className={style.loading6}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
              <li className={style.loading7}>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
                <span className={style.dots}></span>
              </li>
            </ul>
          </div>
          <h1 className="sm:text-4xl text-2xl font-bold">
            <span className={style.animatetext}>Best Software Development</span>{" "}
            Company To Architect The Dream For{" "}
            <span className="text-orange-600">Next Generation</span>
          </h1>
          <br />
          <br />
          <br className="hidden sm:block" />
          <h2 className="sm:text-xl text-lg sm:font-semibold  font-normal">
            CortexSof has a global reputation for up to scratch customer
            experience which marks us as one of the best software development
            companies in the world.
          </h2>
        </div>
        <div className="sm:w-5/12 m-1   w-full  scale-100">
          <img className="rounded" src="/dev.gif" />
          {/*<img src="dev2.gif" />*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
