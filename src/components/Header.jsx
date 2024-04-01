import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../components/Header.css";
import PropTypes from 'prop-types';

const Header = ({ isDarkMode }) => {
  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
  };

  const headerClassName = isDarkMode ? "dark-header" : "light-header";

  return (
      <header className={headerClassName}>
          <div className="container">
              {/* Nav bar section */}
              <nav ref={navRef}>
                  <img src={logo} alt="the watch spot" />   
                  <ul>
                      <li>
                          <Link to="/about-us">ABOUT US</Link>
                      </li>
                      <li>
                          <Link to="/catalog">CATALOG</Link>
                      </li>
                      <li>
                          <Link to="/sale">SALE</Link>
                      </li>
                  </ul>
                  <button className="call-btn">+380 (68) 443-94-26</button>
                  <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                      <FaTimes />
                  </button>
              </nav>
              <button className="nav-btn" onClick={showNavbar}>
                  <FaBars />
              </button>
              {/*end of Nav bar section */}
          </div>
      </header>
  );
};
Header.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export { Header };
