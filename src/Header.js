import React from "react";
import "./Header.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a>
              <Link to="/bookingpage">Reservation</Link>
            </a>
          </li>

          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
