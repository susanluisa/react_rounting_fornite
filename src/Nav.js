import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const navStyle = {
  color: 'white'
};
 
function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="navlinks ">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle}  to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;