import { Link } from "react-router-dom"
import "./About.css"

const About = ({
  title = "About Yakin Hotel",
  subtitle = "Luxury and serenity in every detail",
  showLink = true,
  compact = false,
  imagePosition = "right", // "right" or "left"
}) => {
  return (
    <div className={`about-component ${compact ? "compact" : ""}`}>
      <div className="container">
        <div className={`about-content ${imagePosition === "left" ? "image-left" : "image-right"}`}>
          <div className="about-text">
            <h2>{title}</h2>
            <p className="about-subtitle">{subtitle}</p>
            <div className="about-description">
              <p>
                Yakin Hotel is the assurance of a stay where luxury and serenity are experienced simultaneously. Every
                minute detail is designed to offer you an unforgettable experience.
              </p>
              <p>
                Our commitment to excellence, attention to detail, and personalized service have made us one of the most
                preferred destinations for both leisure and business travelers.
              </p>
            </div>
            {showLink && (
              <div className="about-link">
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            )}
          </div>
          <div className="about-image">
            <img src="/images/about-hotel.jpg" alt="Yakin Hotel" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
