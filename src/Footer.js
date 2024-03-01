import React from "react";
import "./Footer.css";
import logo from "./assets/little_lemon_logo_footer.png";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>+12 345 678 9900</p>
          <p>info@littlelemon.com</p>
          <p>5301 S Hyde Park Blvd, Chicago, IL 60615</p>
        </div>
        <div className="footer-top-right">
          <p>Tuesday-Thursday: 12am-9pm</p>
          <p>Friday-Sunday: 12am-11pm</p>
          <p>Monday: Closed</p>
        </div>
      </div>
      <hr class="full-width-line" />
      <div className="footer-bottom">
        <img src={logo} />
        <p>© 2021 Little Lemon</p>
      </div>
    </footer>
  );
}

export default Footer;
