import React from "react";
import "../../styles/Footer.css";
import config from "../../config.json";

import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <a href="/" className="footer_logo">
          Kavya Paliwal
        </a>

        <ul className="permalinks">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="social_media">
          <a
            href={`https://github.com/${config.githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={`https://www.instagram.com/${config.instagramUsername}/`}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href={`https://twitter.com/${config.twitterUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://www.linkedin.com/in/${config.linkdinUsername}/`}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href={config.linktree} target="_blank" rel="noreferrer">
            <SiLinktree />
          </a>
        </div>
        <div className="rocket_container">
          <a href={"/#"} className="rocket">
            <IoMdRocket className="rocket-img" />
          </a>
          <p className="rocket_p">Beam me up, Shawty!</p>
        </div>
        <div className="copyright">
          <small>&copy; Itsooof. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
