import { Link } from "react-router-dom"
import heroImage from "../assets/images/hotel-exterior.jpg"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={heroImage || "/placeholder.svg"} alt="Yakin Hotel Exterior" />
      </div>
      <div className="hero-content">
        <div className="container">
          <h1>YAKIN HOTEL</h1>
          <p>
            YAKIN, the assurance of a stay where luxury and serenity are experienced harmoniously. Every detail of our
            artful design is designed to offer you an unforgettable experience.
          </p>
          <div className="hero-buttons">
            <Link to="/booking" className="primary-button">
              Book Now
            </Link>
            <Link to="/tour" className="secondary-button">
              Take a Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

