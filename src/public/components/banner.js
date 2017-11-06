import React from "react";
import "../styles/publicStyles.css";
import Nav from "./nav";
const Banner = () => {
  return (
    <header>
      <Nav />
      <div className="row" >
        <div style={{marginTop:200}}>
        <div className="col col-md-1 col-xs-4 col-sm-2 col-xl-2"/>
        <div className="col col-md-11 col-xs-5 col-sm-10 col-xl-10">
          <h1>
            <span className="main-text"></span>
          </h1>
        </div>
        </div>
      </div>
    </header>
  );
};
export default Banner;
