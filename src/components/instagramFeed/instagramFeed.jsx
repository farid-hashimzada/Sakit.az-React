import React from "react";
import facebookLogo from "../../img/facebookLogo.svg";
import instagramLogo from "../../img/instagramLogo.svg";
import linkedInLogo from "../../img/linkedinLogo.svg";
import teleqramLogo from "../../img/teleqram.svg";
import youtubeLogo from "../../img/youtubeLogo.svg";

const InstagramFeed = () => {
  return (
    <>
      <div className="instagramFeedBox">
        <div className="insta-social">
          <div className="socialImg">
            <a href="#">
              <img src={facebookLogo} />
            </a>
          </div>
          <div className="socialImg">
            <a href="#">
              <img src={instagramLogo} />
            </a>
          </div>
          <div className="socialImg">
            <a href="#">
              <img src={teleqramLogo} />
            </a>
          </div>
          <div className="socialImg">
            <a href="#">
              <img src={linkedInLogo} />
            </a>
          </div>
          <div className="socialImg">
            <a href="#">
              <img src={youtubeLogo} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramFeed;
