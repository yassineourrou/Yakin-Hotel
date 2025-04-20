import { Link } from "react-router-dom"
import logo from "../assets/images/Nouveau dossier/main-logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
          <Link to="/" className="logo">
            <img src={logo} alt="Yakin Hotel" />
          </Link>

            <h2>YAKIN HOTEL</h2>
            <p>
              Experience luxury and comfort in the heart of the city. Our hotel offers premium amenities and exceptional
              service to make your stay unforgettable.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/facilities">Facilities</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Rooms</h3>
              <ul>
                <li>
                  <Link to="/rooms/deluxe">Deluxe Room</Link>
                </li>
                <li>
                  <Link to="/rooms/superior">Superior Room</Link>
                </li>
                <li>
                  <Link to="/rooms/family">Family Suite</Link>
                </li>
                <li>
                  <Link to="/rooms/executive">Executive Suite</Link>
                </li>
                <li>
                  <Link to="/rooms/presidential">Presidential Suite</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Contact</h3>
              <ul className="contact-info">
                <li>123 Hotel Street, City</li>
                <li>+1 234 567 8900</li>
                <li>info@yakinhotel.com</li>
              </ul>

              <form className="newsletter-form">
                <input type="email" placeholder="Your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yakin Hotel. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

