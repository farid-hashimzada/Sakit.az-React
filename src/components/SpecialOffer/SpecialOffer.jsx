import React from "react";
import offerSize from "../../img/offerSize.png";
import readBook from "../../img/readBook.png";
import redColor from "../../img/redColor.png";

const SpecialOffer = () => {
  return (
    <>
      <div className="special-offer-box">
        <div className="container">
          <h2>Xüsusi təkliflər və endirimlər</h2>
          <div className="offer">
            <div className="offer-img">
              <div className="img-blurAreaTwo"></div>
              <img src={offerSize} alt="img" />
              <div className="offer-content">
                <h3>Lorem ipsum dolor sit </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="offer-img-two">
              <div className="img-blurAreaTwo"></div>
              <img src={readBook} alt="img" />
              <div className="offer-content-two">
                <h3>Lorem ipsum dolor sit </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="offer-img-three">
              <div className="img-blurAreaTwo"></div>
              <img src={redColor} alt="img" />
              <div className="offer-content-three">
                <h3>Lorem ipsum dolor sit </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
