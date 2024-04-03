import React from 'react';
import { useTheme } from '../ThemeContext'; 

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  const changeLanguage = () => {
  };

  return (
    <div className={`header ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="header-button">
        <button onClick={changeLanguage}>Change Language</button>
      </div>
      <div className="header-button">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
