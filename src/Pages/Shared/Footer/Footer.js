import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../assets/images/footer.png";

const Footer = () => {
    const today = new Date();
  const year = today.getFullYear();
   return (
      <footer
         className="my-10"
         style={{
            backgroundImage: `url(${footerBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
      >
         <div className="footer p-10 justify-around">
            <div>
               <span className="footer-title">Services</span>
               <Link to="/" className="link link-hover">Emergency Checkup</Link>
               <Link to="/" className="link link-hover">Monthly Checkup</Link>
               <Link to="/" className="link link-hover">Weekly Checkup</Link>
               <Link to="/" className="link link-hover">Deep Checkup</Link>
            </div>
            <div>
               <span className="footer-title">ORAL HEALTH</span>
               <Link to="/" className="link link-hover">Fluoride Treatment</Link>
               <Link to="/" className="link link-hover">Cavity Filling</Link>
               <Link to="/" className="link link-hover">Teeth Whitening</Link>
            </div>
            <div>
               <span className="footer-title">OUR ADDRESS</span>
               <Link to="/" className="link link-hover">New York - 101010 Hudson</Link>
            </div>
         </div>
         <div className="footer-center p-4 mt-20 text-base-content">
            <div>
               <p> &copy; Copyright {year} All Rights Reserved</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
