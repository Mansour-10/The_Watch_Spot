import "../components/MainContent.css";
import watchMain1 from "../assets/watchMain1.png";
import watchMain2 from "../assets/watchMain2.png";
import PropTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MainContent = ({ isDarkMode }) => {
  const mainClassName = isDarkMode ? "dark-main" : "light-main";
  return (
    <main className={mainClassName}>
      {/* Header section */}
      <div className="header-main container">
        <div className="header-texts">
          <h1 className="h1_header_texts">
            Welcome to our collection of premium watches
          </h1>
          <p>
            Our watches are not just timepieces, but 
            also an expression of your personality and  lifestyle. From
            classic designs to modern  ones, we have a watch to suit every
            taste  and occasion.
          </p>
        </div>
      </div>
      <div className="header-main container">
        <div className="header-pictures1">
          <img src={watchMain1} alt="Watch 1" />
        </div>
        <div className="header-pictures2">
          <img src={watchMain2} alt="Watch 2" />
        </div>
      </div>
      <div className="buttons">
        <button className="slides-btn1">
            <FiChevronLeft />
          </button>
          <button className="slides-btn2">
            <FiChevronRight />
          </button>
        </div>
      {/* end of header section  */}
    </main>
  );
};
MainContent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export { MainContent };
