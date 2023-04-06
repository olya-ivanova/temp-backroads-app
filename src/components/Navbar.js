import React from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((pageLink) => {
            return (
              <li key={pageLink.id}>
                <a href={pageLink.href} className="nav-link">
                  {pageLink.text}
                </a>
              </li>
            );
          })}
        </ul> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => {
            return (
              <SocialLink
                id={socialLink.id}
                {...socialLink}
                itemClass="nav-icon"
              />
              // <li key={socialLink.id}>
              //   <a
              //     href={socialLink.href}
              //     target="_blank"
              //     rel="noreferrer"
              //     className="nav-icon"
              //   >
              //     <i className={socialLink.icon}></i>
              //   </a>
              // </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
