import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
const Header = ()=>{
      return(
        <div className="top-right-buttons">
          <Link to="/login"> {/* Use Link instead of <a> */}
            <div className="scene">
              <div className="cube">
                <span className="side top">Welcome Back</span>
                <span className="side front">Login</span>
              </div>
            </div>
          </Link>

          {/* Similar Link for Sign Up button */}
          <Link to="/signup">
            <div className="scene">
              <div className="cube">
                <span className="side top">New User</span>
                <span className="side front">Sign Up</span>
              </div>
            </div>
          </Link>
        </div>     
      )
}
export default Header;