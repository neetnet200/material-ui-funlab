import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <ul className="contact-items">
          <li>
            <a href="https://www.linkedin.com/in/anitadesanmiguel">
              <FaLinkedinIn color="#fff" />
            </a>
          </li>
          <li>
            <a href="https://mobile.twitter.com/neetnet200">
              <FaTwitter color="#fff" />
            </a>
          </li>
          <li className="contact-item">
            <a href="https://github.com/neetnet200">
              <FaGithub color="#fff"></FaGithub>
            </a>
          </li>
        </ul>
        <div>
          <span className="line"></span>
          <p> neetnet.io operates on the unceded land of the Wurundjeri peoples of the Kulin nation, 
          we pay our respects to elders past present & emerging</p>
          <p>2022 neetnet.io All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
