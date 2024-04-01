import PropTypes from 'prop-types';

import "../components/NewWatches.css";
import NewWatches1 from "../assets/NewWatches1.png";
import NewWatches2 from "../assets/NewWatches2.png";

const NewWatches = ({ isDarkMode }) => {
    const new_watchesClassName = isDarkMode ? "dark-new_watches" : "light-new_watches";
    return (
        <>
            <section className={`new-watches container ${new_watchesClassName}`}>
                <div>
                    <span>New watches</span>
                    <h2>Green And Bronze-The <br />Match Made In Heaven</h2>
                </div>
                <div className='images-sides'>
                    <img src={NewWatches1} alt="New Watches" />
                    <img src={NewWatches2} alt="New Watches" />
                </div>
            </section>
        </>
    );
};

// PropTypes validation
NewWatches.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export { NewWatches };
