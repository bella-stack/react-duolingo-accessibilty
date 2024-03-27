// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
// import LoginPage from './routes/LoginPage'; // Assume this is your login component
// import Profile from './components/Profile'; // Example component
import Classroom from './routes/Classroom'; // Example component

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="main-content">
          <Routes>
            {/* <Route path="/" element={<LoginPage />} /> */}
            {/* <Route path="/profile" element={<Profile />} />}
            <Route path="/classroom" element={<Classroom />} />
            {/* Add more routes as needed */}
            <Route path="/classroom" element={<Classroom />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
