import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="top-right-buttons">
          <Link to="/login"> {/* Use Link instead of <a> */}
            <div className="scene">
              <div className="cube">
                <span className="side top">Sign In</span>
                <span className="side front">Welcome Back</span>
              </div>
            </div>
          </Link>

          {/* Similar Link for Sign Up button */}
          <Link to="/signup">
            <div className="scene">
              <div className="cube">
                <span className="side top">Sign Up</span>
                <span className="side front">New User</span>
              </div>
            </div>
          </Link>
        </div>

        <h1>Home Page</h1>
      </div>
      <Footer />
    </>
  );
};

export default App;
