import React from "react";
import PartnyorlarLogo from "../../img/partnyorlarLogo.png";
import PartnyorlarLogo2 from "../../img/PartnyorlarLogo2.png";

const Partnyotlar = () => {
  return (
    <>
      <div className="partnyor-box">
        <div className="container">
          <h2>Partnyorlar</h2>
          <div className="partnyorlar">
            <img src={PartnyorlarLogo} alt="img" />
            <img src={PartnyorlarLogo2} alt="img" />
            <img src={PartnyorlarLogo} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnyotlar;
