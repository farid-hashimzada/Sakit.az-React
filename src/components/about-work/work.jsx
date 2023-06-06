import React from "react";
import workImage from "../../img/workImage.svg";

export function Work() {
  return (
    <>
      <div className="work-box">
        <div className="container">
          <div className="work-img">
            <img src={workImage} alt="work-image" />
          </div>
          <div className="work-about">
            <h2>Şirkət haqqında</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ultricies consectetur suscipit est. Amet sit mauris turpis tellus
              leo. Montes, nulla rhoncus nisl hendrerit amet dolor Sollicitudin
              quam pellentesque diam pretium pretium, ultrices eu massa
              consectetur. Velit accumsan, pharetra, eget maecenas aliquam magna
              sed aenean.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
