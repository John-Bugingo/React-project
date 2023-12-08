import React from "react";
import '../css/navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/studentFoarm">Registration Foarm</Link>
        </li>
        <li>
          <Link to="/learnMore">Learn more</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
