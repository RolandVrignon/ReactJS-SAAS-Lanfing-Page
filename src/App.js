import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/navbar';
import Home from './components/home'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    setNavbarHeight(navbarRef.current.offsetHeight);
  }, [navbarRef]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} ref={navbarRef} />
      <Home navbarHeight={navbarHeight} darkMode={darkMode} />
    </div>
  );
}

export default App;

