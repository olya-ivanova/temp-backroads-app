import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      {/* <ul className="footer-links">
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} className="footer-link">
                {pageLink.text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          return (
            <SocialLink
              id={socialLink.id}
              {...socialLink}
              itemClass="footer-icon"
            />
            // <li key={id}>
            //   <a
            //     href={href}
            //     target="_blank"
            //     rel="noreferrer"
            //     className="footer-icon"
            //   >
            //     <i className={icon}></i>
            //   </a>
            // </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
