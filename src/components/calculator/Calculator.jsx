import React from "react";
import { Button } from "../bam/button";
import CalculatorImg from '../../img/calculatorHome.png'
import CalculatorBackground from '../../img/CalculatorBackground2.png'

const Calculator = () => {
  return (
    <>
      <div className="calculator-box">
        <div className="container">
          <div className="calculator-first">
                <h2>Kalkulator</h2>
                <p>
                Hesablama pulsuzdur. 1 iş günü ərzində nəticə. Hesablama
                təxminidir. Dəqiq hesablama üçün sayğacın ayrılması lazımdır.
                </p>

                <div className="room-size">
                <p>Otaq ölçülərini daxil edin</p>
                <input type="text" placeholder="Uzunluğu (L1),  m" />
                <input type="text" placeholder="Eni (L2),  m" />
                <input type="text" placeholder="Hündürlüyü (H1),  m" />
                </div>

                <div className="locationType">
                <h2>Mənzil növləri</h2>
                <div className="locationCheckBox">
                    <div className="loc-type">
                    <input type="checkbox" />
                    <p>Yeni tikili</p>
                    </div>

                    <div className="loc-type">
                    <input type="checkbox" />
                    <p>Panel</p>
                    </div>
                    <div className="loc-type">
                    <input type="checkbox" />
                    <p>Kərpic</p>
                    </div>
                    <div className="loc-type">
                    <input type="checkbox" />
                    <p>Fərdi yaşayış</p>
                    </div>
                </div>

                <div className="insulationType">
                    <h2>İzolyasiya olunacaq səthlər</h2>
                    <div className="insulation-type-box">
                    <div className="insulation-type">
                        <input type="checkbox" />
                        <p>Divar</p>
                    </div>
                    <div className="insulation-type">
                        <input type="checkbox" />
                        <p>Tavan</p>
                    </div>
                    <div className="insulation-type">
                        <input type="checkbox" />
                        <p>Arakəsmə</p>
                    </div>
                    <div className="insulation-type">
                        <input type="checkbox" />
                        <p>Döşəmə</p>
                    </div>

                    <div className="insulation-type">
                        <input type="checkbox" />
                        <p>Digər</p>
                    </div>
                    </div>
                </div>

                <div className="calculator-note">
                    <p>Qeyd</p>
                    <textarea />
                </div>

                <div className="connect-info">
                    <p>Əlaqə məlumatları</p>
                    <div className="connect-info-input">
                    <input type="text" placeholder="Telefon" />
                    <input type="email" placeholder="Email " />
                    </div>
                </div>

                <Button text="Hesabla" />
                </div>
          </div>

          <div className="calculator-img">
            <img src={CalculatorImg}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
