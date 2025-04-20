import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/Nouveau dossier/main-logo.png"
import "./Header.css"
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="Yakin Hotel" />
          </Link>

          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rooms">Rooms</NavLink>
              </li>
              <li>
                <NavLink to="/facilities">Facilities</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <Link to="/booking" className="booking-button">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

