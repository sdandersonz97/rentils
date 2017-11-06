import React from "react";
import "../styles/publicStyles.css";
import Nav from "./nav";
const Banner = () => {
  return (
    <header>
      <Nav />
      <div className="rentils-text-box">
        <h1>
          Rentils <br />
          Never was so easy keep track of your rentals.
        </h1>
      </div>
    </header>
  );
};
export default Banner;
