import React from "react";
import NoiseCart from "./NoiseCartComponent/NoiseCart";

const NoisePrice = () => {
  return (
    <>
      <div className="noise-price-box">
        <div className="container">
          <h2>Qiymətlər</h2>
          <div className="noisePrice">
            <NoiseCart />
            <NoiseCart />
            <NoiseCart />
            <NoiseCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoisePrice;
