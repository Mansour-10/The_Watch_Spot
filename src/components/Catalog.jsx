import "../components/Catalog.css";
import catalog1 from "../assets/catalog1.png";
import catalog2 from "../assets/catalog2.png";
import catalog3 from "../assets/catalog3.png";
import catalog5 from "../assets/catalog5.png";
import catalog6 from "../assets/catalog6.png";
import catalog7 from "../assets/catalog7.png";
import catalog8 from "../assets/catalog8.png";
import catalog9 from "../assets/catalog9.png";
import catalog10 from "../assets/catalog10.png";
import catalog11 from "../assets/catalog11.png";
import catalog12 from "../assets/catalog12.png";
import PropTypes from "prop-types";
import { useState } from "react";

const Catalog = ({ isDarkMode }) => {
  const catalogClassname = isDarkMode ? "dark-catalog" : "light-catalog";

  // details for every watch catalog ##########
  const [isOpen, setisOpen] = useState(false);
  const [selectedWatch, setselectedWatch] = useState(false);

  const togglePanel = (watch) => {
    setisOpen(!isOpen);
    setselectedWatch(watch);
  };
  // array of all watches for catalog ##########
  const [watch_list] = useState([
    {
      image_link: catalog1,
      title: "Tube Watch S42 Date Steel With Black Case",
      price: "€395",
      description:
        "Known for luxury and precision, Tube watches are highly sought after for their quality and status symbol.",
    },
    {
      image_link: catalog2,
      title: "Avondale Watch Police For Men",
      price: "€800",
      description:
        "A Swiss luxury watchmaker, Avondale is famous for its connection with space exploration and its iconic Speedmaster model.",
    },
    {
      image_link: catalog3,
      title: "Diver  300M Co‑Axial Master Chronometer ",
      price: "€600",
      description:
        "Diver offers a wide range of watches from affordable to high-end, known for their reliability and innovation.",
    },
    {
      image_link: catalog1,
      title: "Diver 300M Co-Axial Master Chronometer ",
      price: "€1400",
      description:
        "Diver is renowned for its sports watches and chronographs, often associated with motorsports and racing.",
    },
    {
      image_link: catalog5,
      title: "Taman Watch By Police For Men",
      price: "€500",
      description:
        "Taman produces durable and functional watches, including digital and analog models, popular for their affordability and features.",
    },
    {
      image_link: catalog6,
      title: "Malawi Watch Police For Men",
      price: "€555",
      description:
        "Malawi is known for its stylish and affordable watches, offering a variety of designs suitable for different lifestyles.",
    },
    {
      image_link: catalog7,
      title: "Diver 300M Co-Axial Master Chronometer ",
      price: "€1200",
      description:
        "Diver watches are recognized for their eco-friendly technology, such as Eco-Drive, which harnesses light for power.",
    },
    {
      image_link: catalog8,
      title: "Greenlane Watch By Police For Men",
      price: "€1000",
      description:
        "Greenlane is a prestigious Swiss brand known for its exquisite craftsmanship and timeless designs.",
    },
    {
      image_link: catalog9,
      title: "Squardrc 5402 Chrono",
      price: "€359",
      description:
        "Squardrc specializes in aviation watches, known for their precision and functionality in the air and on the ground.",
    },
    {
      image_link: catalog10,
      title: "Diver  300M Co‑Axial Master",
      price: "€400",
      description:
        "Diver Audemars Piguet produces high-end luxury watches, including the iconic Royal Oak model with its distinctive octagonal bezel.",
    },
    {
      image_link: catalog11,
      title: "Citizen",
      price: "€519",
      description:
        "Citizen offers a range of stylish watches at affordable prices, blending fashion with functionality.",
    },
    {
      image_link: catalog12,
      title: "Armani Exchange",
      price: "€400",
      description:
        "Armani known for its quality watches at accessible prices, catering to both casual and formal wear.",
    },
  ]);

  return (
    <>
      {/*  details section ###### */}
      <div className="selectedWatch Container">
        {isOpen && (
          <div className="watchDetailsOverlay" onClick={() => setisOpen(false)}>
            <div className="watchDetails" onClick={(e) => e.stopPropagation}>
              {selectedWatch && (
                <>
                  <img src={selectedWatch.image_link} alt="" />
                  <p>{selectedWatch.title}</p>
                  <span>{selectedWatch.price}</span>
                  <p>{selectedWatch.description}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {/* ############## */}
      {/* Catalog section */}
      <div className={`main-catalog container ${catalogClassname}`}>
        <div className="catalog container">
          <h2>Catalog</h2>
        </div>
        <table className="catalog-images ">
          {watch_list.map((item, indexedDB) => {
            return (
              <tr key={indexedDB}>
                <td onClick={() => togglePanel(item)}>
                  <img src={item.image_link} alt="catalog" />
                  <p>{item.title}</p>
                  <span>€{item.price}</span>
                </td>
              </tr>
            );
          })}
        </table>
        <button>BUY NOW</button>
      </div>
      {/* end of Catalog section */}
    </>
  );
};

Catalog.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export { Catalog };
