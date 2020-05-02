import React from 'react'
import { 
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa"



const Footer = () => (
  <div className="footer">
    <div>
      <h2 className="serif">© ehsangazar</h2>
      <div className="footer-icons">
        <a href="https://twitter.com/ehsangazar"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/gazar/"><FaLinkedin /></a>
        <a href="http://github.com/ehsangazar"><FaGithub /></a>
        <a href="https://www.instagram.com/ehsangazar/"><FaInstagram /></a>
      </div>
    </div>
  </div>
)

export default Footer;