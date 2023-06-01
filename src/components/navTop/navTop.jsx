import logo from "../../img/FrameLogo.svg";
import phone from "../../img/phone.svg";
import letter from "../../img/letter.svg";
import flag from "../../img/azerbaijanFlag.svg";
import arrowBottom from "../../img/arrovBottom.svg";
// import logoRight from "../img/logoTwo.png";
import RightLogo from "../../img/RightLogo.svg"
export const NavTop = () => {
  return (
    <>
      <navbar className="navbar">
        <div className="container">
          <div className="navbar">
            <div className="nav-left">
              <img src={logo} alt="logo" />
            </div>

            <div className="nav-middle">
              <img src={phone} alt="phone" />
              <p>+994 51 250 73 30</p>
            </div>

            <div className="nav-middle-right">
              <img src={letter} alt="mektub" />
              <p>helpdesk@sakitlik.az</p>
            </div>

            <div className="nav-middle-right">
              <img src={flag} alt="bayraq" />
              <span>AZ</span>
              <img src={arrowBottom} alt="arrow" />
            </div>

            <div className="rigth-logo">
              <img src={RightLogo} alt="logo" />
            </div>
          </div>
        </div>
      </navbar>
    </>
  );
};
