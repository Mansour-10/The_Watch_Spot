import { useState, useEffect } from 'react';
import './App.css';  // Main styles that might include default light theme styles
import { Footer, Header, MainContent, Aboutus, Catalog, NewWatches, Sale } from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for dark mode preference
    return JSON.parse(localStorage.getItem('isDarkMode')) || false;
  });

  const mainClassName = isDarkMode ? "dark-mode" : "light-mode";

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    // Save dark mode setting to localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(newDarkMode));
  };

  const [showUpButton, setShowUpButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

return (
  <div className={mainClassName}>
    <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <MainContent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <Aboutus isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <Catalog isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <NewWatches isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <Sale isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <Footer />  
    <div className='dark-up-buttons'>
      {showUpButton && (
        <div className="up-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button>
            <div className="arrow-up"></div>
          </button>
        </div>
      )}
      <div className="dark-button">
        <input id="checkboxInput" checked={mainClassName === 'dark-mode'} type="checkbox" />
        <label onClick={toggleDarkMode} className="toggleSwitch" htmlFor="checkboxInput"></label>
      </div>
    </div>
  </div>
)
}

export default App;

