import React from "react";
import style from "./HomeOne.module.css";
import Image from "next/image";
export default function HomeOne() {
  return (
      <div className={style.mainOne}>
        <div className={style.mainOneItem}>
          <div className={style.mainOneItemImage}>
            <div className={style.mainOneItemImageDesign}></div>
            <Image
              src={"/images/banner.jpg"}
              alt="itm"
              width={750}
              height={750}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className={style.mainOneItemTwo}>
          <div className={style.mainOneItemTwoHeader}>
            <p style={{ color: "#fd2c08" }}>Home</p>
            <p>About</p>
            <p>Talks</p>
            <p>Event</p>
            <p>Sponsers</p>
            <p>FAQs</p>
          </div>
          <div className={style.mainOneItemTwoHolder}>
            <div className={style.mainOneItemTwoContainer}>
              <h2>
                TED<span style={{ fontSize: "18px" }}>X</span> ITM GWALIOR
                PRESENTS
              </h2>
              <div>
                <div className={style.mainOneItemTwoContainerDesign}></div>
                <h1>DEALING WITH FACTS AND TRUTH</h1>
              </div>

              <div className={style.mainOneItemTwoContainerSubText}>
                <p>
                  25<sup>th</sup> September 2023
                </p>
                <p>At ITM UNIVERSITY</p>
              </div>
            </div>
            <div className={style.mainOneItemThree}>
              <button className={style.mainOneItemThreeButtonOne}>Register Now</button>
              <button className={style.mainOneItemThreeButtonTwo}>KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>
  );
}
