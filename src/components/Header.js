import React from 'react';
import { useTheme } from '../ThemeContext'; // Update the path as necessary

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  const changeLanguage = () => {
  };

  return (
    <div className={`header ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="language">
        <button onClick={changeLanguage}>Change Language</button>
      </div>
      <div className="modes">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
