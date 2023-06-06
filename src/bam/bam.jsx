import "../bam/bam.css";
import Bampng from "../img/bamImg.png";
import youtube from "../img/youtube.svg";
import Bamm from "../img/Bamm.svg";
import { Button } from "./button";
export const Bam = () => {
  return (
    <>
      <div className="bam-box">
        <div className="container">
          <div className="bam-left">
            <h1>Səs-küy probleminin effektiv həlli bir gündə mənzillərdə *</h1>
            <p> Öz həyatını yaşa, qonşuların həyatını deyil</p>
            <Button text="Qiymətlər" />
            <Button text="Sifariş göndər" id="test" />
            <div className="bam-voice-problem">
              <div>
                <span>Səs-küy problemlərini necə həll etmək olar?</span>
              </div>
              <div>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bam-right">
          <img className="bamm-svg" src={Bamm} alt="bam" />
          <img className="bamimg" src={Bampng} alt="img" />
        </div>
      </div>
    </>
  );
};
