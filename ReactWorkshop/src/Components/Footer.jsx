import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import QRCode from "react-qr-code";

function Footer() {
  return (
    <div className="footer-content">
      <div className="social-links">
        <div className="footer-mid-text">
          <h3>Get connected</h3>
        </div>
        <FaFacebook  className="footer-icon" />
        <FaTwitter className="footer-icon" />
        <FaYoutube  className="footer-icon" />
        <FaInstagram className="footer-icon" />
      </div>
      <div className="footer-mid-text">
        <p className="footer-text-l">Created by Mathew</p>
        <p className="footer-text-l">Made with ❤️ by the Tech Tribe</p>
        <p>Note: This project is made for educational purposes only.</p>
      </div>

      <div className="qr-div">
        <QRCode
          value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="qr-code"
          bgColor="transparent"
          fgColor="white"
        />
        <h4>Watch this React Playlist!</h4>
      </div>
    </div>
  );
}

export default Footer;
