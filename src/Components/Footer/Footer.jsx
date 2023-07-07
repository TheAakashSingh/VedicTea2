import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-para">
          <p>
            We are unique cause Our products are Trees are being cultivated by
            70 Mothers of a Tribal Village. We are unique cause It’s purely
            herbal without any additives and caffeine…we are unique cause we
            assure youe the best of quality in best price at your door step
          </p>
          <button className="buy-now">Buy Now </button>
        </div>
      </div>
      <div className="footer-bar">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-logo">Vedic Teagen</div>
            <div className="footer-sub-wrapper">
              <ul className="footer-links">
                {/* <li>
                  <Link to="products"> Products</Link>
                </li> */}
                <li>
                  <Link to="about"> About Us</Link>
                </li>
                <li>
                  <Link to="contactus"> Contact Us</Link>
                </li>
                <li>
                  <Link to="/"> FAQs</Link>
                </li>
              </ul>
              <div className="social-icons">
                <FaFacebookF />
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="copy-ele">
            <p>2023@ All right reserved</p>
            <div className="terms">
              <p>
                <a>Privacy Policy</a>
              </p>

              <p>
                <a>Terms of Service</a>
              </p>
              <p>
                <a>Cookies Settings</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
