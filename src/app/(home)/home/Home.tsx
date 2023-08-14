import React from "react";
import style from "./Home.module.css";
import HomeOne from "./components/HomeOne";
import HomwTwo from "./components/HomeTwo/HomeTwo";
import HomeThree from "./components/HomeThree/HomeThree";
export default function Home() {
  return (
    <div className={style.main}>
      <HomeOne />
      <HomwTwo/>
      <br />
      <br />
      <br />
      <HomeThree />
    </div>
  );
}
