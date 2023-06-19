import React from "react";
import NoiseCartImg from "../../../img/NoisePrice.svg";
import CheckBox from "../../../img/CheckBox.svg";
import { Button } from "../../bam/button";

const NoiseCart = () => {
  return (
    <>
      <div className="noise-cart-box">
        <div className="container">
          <div className="noise-cart">
            <div className="noise-img">
              <img src={NoiseCartImg} alt="img" />
              <p>Döşəmənin səs və vibro izolyasiyası</p>
              <hr />
            </div>

            <div className="nois-con-0">
              <p>61,90 AZN/m2</p>
              <span>başlayaraq</span>
             
            </div>
            <div className="nois-con-1">
              <img src={CheckBox} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="nois-con-1">
              <img src={CheckBox} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="nois-con-1">
              <img src={CheckBox} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="nois-con-1">
              <img src={CheckBox} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <Button text="Sifariş et" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoiseCart;
