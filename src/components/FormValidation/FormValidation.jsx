import React from "react";
import { Button } from "../bam/button";

const FormValidation = () => {
  return (
    <>
      <div className="form-box">
        <div className="container">
          <div className="form">
            <div className="form-content">
              <h3>Suallarınız var?</h3>
              <p>Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.</p>
            </div>
            <div className="formValidation">
              <label htmlFor="form">
                <input type="text" placeholder="Adınız və Soyadınız" />
              </label>
              <label htmlFor="form">
                <input type="email" placeholder="Email ünvanı" />
              </label>
              <label htmlFor="form">
                <input type="text" placeholder="Əlaqə nömrəsi" />
              </label>
              <label htmlFor="form">
                <textarea
                  name="name"
                  id="id"
                  cols="46"
                  rows="10"
                  placeholder="Mesajınız"
                ></textarea>
              </label>
              <Button text="Göndər" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
