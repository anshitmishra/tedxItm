import React from "react";
import style from "./HomeTwo.module.css";
import Image from "next/image";

export default function HomeTwo() {
  // THEME
  return (
    <div className={style.mainTwo}>
      <div className={style.mainTwoItemOne}>
        <div className={style.mainTwoItemOneHeading}>
          <div className={style.mainTwoItemOneHeadingHolder}>
            <div className={style.mainTwoItemOneHeadingDesign}></div>
            <h1>THEME </h1>
          </div>
        </div>

        <div className={style.mainTwoItemOneSub}>
          <div className={style.mainTwoItemOneSubHeading}>
            <h2>DEALING WITH FACTS AND TRUTH</h2>
          </div>
          <div className={style.mainTwoItemOneSubPara}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique libero est dolorum assumenda esse perferendis quae in
              ipsa, atque vel ab distinctio animi earum. Explicabo atque dolor
              distinctio quos tempora. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae qui laudantium soluta quia facere
              voluptates! Ipsum excepturi enim minima tempore, eveniet nesciunt
              beatae veniam, quis aspernatur rerum amet voluptatibus earum.
            </p>
          </div>
        </div>
      </div>
      <div className={style.mainTwoItemTwo}>
        <div className={style.mainTwoItemTwoImage}>
          <Image
            src={"/images/banner2.png"}
            alt="itm"
            width={600}
            height={600}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}
