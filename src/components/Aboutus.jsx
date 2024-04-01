import watchAboutUs from "../assets/watchAboutUs.gif";
import "../components/Aboutus.css";
import PropTypes from 'prop-types';

const Aboutus = ({ isDarkMode }) => {
  const aboutClassname = isDarkMode ? "dark-about" : "light-about";
  return (
    <div className={`about-us-main container ${aboutClassname}`}>
      <div className="about-us-texts">
        <h2 className="h2_about_us">About us</h2>
        <p>
          Welcome to our premium watch collection, where luxury and style meet
          functionality and precision. Our selection of timepieces embodies the
          very best in Swiss craftsmanship and engineering, ensuring that you
          all always have a reliable and stylish accessory on your wrist.
        </p>
        <p>
          At our premium watch collection, we believe that a watch is more than
          just a timekeeping device - it is a statement piece that reflects your
          personality and style. So why settle for anything less than the best?
          Browse our collection today and discover the perfect watch for you.
        </p>
      </div>
      <div className="about-us-img">
        <img src={watchAboutUs} alt="Watch about us "  />
      </div>
    </div>
  );
};
Aboutus.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export { Aboutus };
