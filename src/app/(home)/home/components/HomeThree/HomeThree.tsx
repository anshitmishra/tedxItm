import React from "react";
import style from "./HomeThree.module.css";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
export default function HomeThree() {
  return (
    <>
      <div className={style.mainThreeItemOneHeading}>
        <div className={style.mainThreeItemOneHeadingHolder}>
          <div className={style.mainThreeItemOneHeadingDesign}></div>
          <h1>SPEAKERS </h1>
        </div>
      </div>
      <div className={style.mainThree}>
        <div className={style.mainThreeItemOne}>
          <div className={style.mainThreeItemTwoImage}>
            <Image
              src={"/images/banner3.jpg"}
              alt="itm"
              width={600}
              height={600}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className={style.mainThreeItemTwo}>
          <div className={style.mainThreeItemOneSub}>
            <div className={style.mainThreeItemOneSubHeading}>
              <h2>Brené Brown</h2>
            </div>
            <div className={style.mainThreeItemOneSubPara}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique libero est dolorum assumenda esse perferendis quae in
                ipsa, atque vel ab distinctio animi earum. Explicabo atque dolor
                distinctio quos tempora. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Recusandae qui laudantium soluta quia facere
                voluptates! Ipsum excepturi enim minima tempore, eveniet
                nesciunt beatae veniam, quis aspernatur rerum amet voluptatibus
                earum.
              </p>
            </div>

            <div className={style.mainThreeItemOneSubIcons}>
              <p>
                <FaFacebookF size={30} />
              </p>
              <p>
                <BiLogoLinkedin size={30} />
              </p>
              <p>
                <FiTwitter size={30} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.mainThree}>
        <div className={style.mainThreeItemOne}>
          <div className={style.mainThreeItemOneSub}>
            <div className={style.mainThreeItemOneSubHeading}>
              <h2>Amy Cuddy</h2>
            </div>
            <div className={style.mainThreeItemOneSubPara}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique libero est dolorum assumenda esse perferendis quae in
                ipsa, atque vel ab distinctio animi earum. Explicabo atque dolor
                distinctio quos tempora. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Recusandae qui laudantium soluta quia facere
                voluptates! Ipsum excepturi enim minima tempore, eveniet
                nesciunt beatae veniam, quis aspernatur rerum amet voluptatibus
                earum.
              </p>
            </div>

            <div className={style.mainThreeItemOneSubIcons}>
              <p>
                <FaFacebookF size={30} />
              </p>
              <p>
                <BiLogoLinkedin size={30} />
              </p>
              <p>
                <FiTwitter size={30} />
              </p>
            </div>
          </div>
        </div>
        <div className={style.mainThreeItemTwo}>
          <div className={style.mainThreeItemTwoImage}>
            <Image
              src={"/images/banner4.jpg"}
              alt="itm"
              width={600}
              height={600}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
