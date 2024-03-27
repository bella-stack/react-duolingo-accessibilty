import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing local storage, updating state)

    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="sidebar">
      <div className="profile-picture-container">
                <img src="logo192.png" alt="Profile" className="profile-picture" width={120}/>
      </div>

      <nav>
        <ul>
          <li><Link to="/new-class">Explore.</Link></li>
          <li><Link to="/classroom">Classroom.</Link></li>
          {/* <li><Link to="/profile">Progress.</Link></li> */}
          <li><Link to="/profile">Progress.</Link></li>
        </ul>
      </nav>

      <div className="logout">
        <a onClick={handleLogout} style={{cursor: 'pointer'}}>Log Out.</a>
      </div>
    </div>
  );
};

export default SideBar;
