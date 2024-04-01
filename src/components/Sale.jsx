import "../components/Sale.css";
import sale1 from "../assets/sale1.png";
import sale2 from "../assets/sale2.png";
import sale3 from "../assets/sale3.png";
import sale4 from "../assets/sale4.png";
import PropTypes from 'prop-types';

const Sale = ({ isDarkMode }) => {
  const saleClassName = isDarkMode ? "dark-sale" : "light-sale";
  return (
    <>
      <section className={`sales container ${saleClassName}`}>
        <div className="sale">
          <div>
            <h2>Sale</h2>
          </div>
          <div className="sale-info">
            <input type="radio" checked name="active" id="tab-1" />
            <input type="radio" name="active" id="tab-2" />
            <input type="radio" name="active" id="tab-3" />
            <input type="radio" name="active" id="tab-4" />

            <div className="sliders">
              <label htmlFor="tab-1">
                <img src={sale1} alt="" />
              </label>
              <label htmlFor="tab-2">
                <img src={sale2} alt="" />
              </label>
              <label htmlFor="tab-3">
                <img src={sale3} alt="" />
              </label>
              <label htmlFor="tab-4">
                <img src={sale4} alt="" />
              </label>
            </div>
            <div className="sale-info-img">
              <img src={sale1} alt="watch" />
              <img src={sale2} alt="watch" />
              <img src={sale3} alt="watch" />
              <img src={sale4} alt="watch" />
            </div>
          </div>
        </div>
        <div className="sale-info-text">
          <div className="div1">
            <h2>
              Greenlane Watch By Police For MenHT{" "}
            </h2>
            <span>Product tag: PEWJK2227003</span>
            <p>
              €700 <span>€1000</span>
            </p>
          </div>
          <div className="div2">
            <h2>Description</h2>
            <p>
              Richly detailed with an understated design - the Police <br />{" "}
              Men’s Greenlane watch features a versatile <br /> multifunction
              design that fits effortlessly into work <br /> and play. The steel
              case is adorned with a semi- <br />
              transparent black dial. The timepiece exhibits a <br />
              contrast through a black IP bracelet with matching <br /> crown
              and pushers.
            </p>
          </div>

          <div className="div3">
            <h2>DETAILS & FEATURESTION</h2>
            <p>
              Gender: man <br />
              Size: 46x54.5mm <br />
              Case Colour: Steel<br />
              Band Material: Metal<br />
              Case Material: Metal <br />
              Features: Multifunction <br />
              Water Resistant: 5 (ATM) <br />
              Band Colour: Steel<br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
Sale.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export { Sale };
