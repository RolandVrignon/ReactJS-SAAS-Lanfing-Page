import React, { useState, forwardRef } from 'react';
import { Switch } from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const Navbar = forwardRef(({ darkMode, setDarkMode }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="section navbar" ref={ref}>
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
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/login" className="login-link" >Login</a>
          <button className="trial-button" >Démarrer l'essai</button>
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
});

export default Navbar;
