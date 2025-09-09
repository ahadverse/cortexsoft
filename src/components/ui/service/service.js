import React from "react";
import style from "./service.module.css";

const Service = () => {
  return (
    <div className=" bg-blue-100 pb-24">
      <h1 className="text-xl font-bold pt-24 text-center">
        Share Your Demand to
      </h1>
      <h1 className="sm:text-5xl text-4xl font-bold text-center">
        {" "}
        <span className={style.animatetext}>
          Design Any Customized Software
        </span>{" "}
      </h1>
      <br />
      <br />
      <div class={`${style.card__collection} ${style.clearFix} pt-24`}>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/app.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>App Development</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/soft.png"
              class={`${style.imgresponsive} w-[300px]`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>Software Dev</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/web.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>Web Development</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/hosting.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>Web Hosting</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/wordpress.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>Themes & Plugins</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/stock.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>Stock Icons</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/adobe.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>Adobe Files</p>
        </div>
        <div class={`${style.cards} ${style.cardstwo}`}>
          <div>
            <img
              src="/ebook.png"
              class={`${style.imgresponsive}`}
              alt="Cards Image"
            />
          </div>
          <span class={`${style.cardstwo__rect}`}></span>
          <span class={`${style.cardstwo__tri}`}></span>
          <p>eBook</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
