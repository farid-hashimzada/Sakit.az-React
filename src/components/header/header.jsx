import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <ul>
            <li>
              <Link to="/About">Haqqımızda</Link>
            </li>
            <li>
              <Link to="/HowWorkWe">Nə üçün biz</Link>
            </li>
            <li>
              <Link to="/HowWork">Biz necə işləyirik</Link>
            </li>
            <li>
              <Link to="/Discount">Endirimlər</Link>
            </li>
            <li>
              <Link to="/Project">Layihələr</Link>
            </li>
            <li>
              <Link to="/Video">Videolar</Link>
            </li>
            <li>
              <Link to="/Price">Qiymətlər</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
