
import "../cssfiles/Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund & Cancellation</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h5>Contact</h5>
          <p>HSR Layout, Bangalore, India</p>
          <p>Email: partyplanners.in</p>
          <p>Phone: +91 94940 90055</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Andor Tech India Pvt Ltd 2009 - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
