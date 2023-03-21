import React, { useState } from 'react';
import { Switch } from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          { darkMode ? (
              <img src="https://ik.imagekit.io/z0tzxea0wgx/Cogitum/dark-logo_nxKu4OPJl.svg?updatedAt=1679411853032" alt="Logo" className="navbar-logo" />
            ) : (
              <img src="https://ik.imagekit.io/z0tzxea0wgx/Cogitum/light-logo_LNYo7ZlvY.svg?updatedAt=1679411855963" alt="Logo" className="navbar-logo" />
            )
          }
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <a className={`${darkMode ? 'dark-mode' : 'light-mode'}`}href="/">Accueil</a>
            </li>
            <li>
              <a className={`${darkMode ? 'dark-mode' : 'light-mode'}`}href="/about">À propos</a>
            </li>
            <li>
              <a className={`${darkMode ? 'dark-mode' : 'light-mode'}`}href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/login" className={`login-link ${darkMode ? 'dark-mode' : 'light-mode'}`}>Login</a>
          <button className={`trial-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>Démarrer l'essai</button>
          <div className="toggle-container">
            { darkMode ? (
              <LightModeRoundedIcon className="iconColor dark-mode"/>
            ) : (
              <DarkModeRoundedIcon className="iconColor light-mode"/>
            )}
            <Switch
              className='toggle'
              checked={darkMode}
              onChange={toggleDarkMode}
              inputProps={{ 'aria-label': 'Toggle dark mode' }}
            />
          </div>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
    </nav>
  );
};

export default Navbar;
