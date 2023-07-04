import React from "react";
import FooterLogo from "../../img/FooterLogo.png";
import FacebookLlogo from "../../img/bx_bxl-facebook.svg";
import InstaLogo from "../../img/akar-icons_instagram-fill.svg";
import LinkedInLogo from "../../img/bx_bxl-linkedin.svg";
import TeleqramLogo from "../../img/ph_telegram-logo.svg";
import YouTubeLogo from "../../img/YouTubeLogoFooter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-box">
        <div className="container">
          <div className="footer-end">
            <div className="footer-left">
              <img src={FooterLogo} alt="img" />
            </div>
            <div className="footer-middle">
              <ul>
                <li>
                  <a href="#">Endirimlər</a>
                </li>
                <li>
                  <a href="#">Layihələr</a>
                </li>
                <li>
                  <a href="#">Videolar</a>
                </li>
                <li>
                  <a href="#">Qiymətlər</a>
                </li>
              </ul>
            </div>
            <div className="footer-rigth">
              <a href="#">
                <img src={FacebookLlogo} alt="img" />
              </a>
              <a href="#">
                <img src={InstaLogo} alt="img" />
              </a>
              <a href="#">
                <img src={LinkedInLogo} alt="img" />
              </a>
              <a href="#">
                <img src={TeleqramLogo} alt="img" />
              </a>
              <a href="#">
                <img src={YouTubeLogo} alt="img" />
              </a>
            </div>
          </div>

          <div className="Footer-bootom">
            <div className="footer-l">
              <p>© 2022 Sakitlik.az. Müəllif hüquqları qorunur.</p>
            </div>
            <div className="footer-r">
              <p>Site by Farid Hashimzada</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
