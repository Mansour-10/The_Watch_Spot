import "../components/Footer.css";
import logo2 from "../assets/logo2.svg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div className="part1">
          <img src={logo2} alt="logo" />
          <p>+380 (68) 443-94-26</p> <br />
          <p>
            1678 S. Pioneer Road <br /> Salt Lake City <br />
            UT 84104
          </p>
        </div>
        <div className="part2">
          <ul>
            <li>
              <a href="">ABOUT  </a>
            </li>
            <li>
              <a href="">CATALOG</a>
            </li>
            <li>
              <a href="">SALE</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <a href="">
            <FaFacebookF size={"34px"} />
          </a>
          <a href="">
          <FaInstagram size={"34px"} />
          </a>
          <a href="">
          <FaYoutube size={"34px"} />
          </a>
        </div>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export { Footer };
