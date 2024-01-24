import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/main-content">Main Content</Link>
        </li>
        <li className="nav-item">
          <Link to="/footer">Footer</Link>
        </li>
      </ul>

      <div className="top-right-buttons">
        <Link to="/login">
          <div className="scene">
            <div className="cube">
              <span className="side top">Welcome Back</span>
              <span className="side front">Login</span>
            </div>
          </div>
        </Link>

        <Link to="/signup">
          <div className="scene">
            <div className="cube">
              <span className="side top">New User</span>
              <span className="side front">Sign Up</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
