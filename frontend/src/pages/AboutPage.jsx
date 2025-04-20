import { Link } from "react-router-dom"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Yakin Hotel and our commitment to excellence</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/about/hotel-exterior.jpg" alt="Yakin Hotel Exterior" />
            </div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Yakin Hotel has been providing exceptional hospitality services for over a decade. Our
                journey began with a simple vision: to create a space where luxury meets comfort, and where every guest
                feels valued and special.
              </p>
              <p>
                The name "Yakin" embodies our philosophy - the assurance of a stay where luxury and serenity are
                experienced simultaneously. Every detail in our hotel is designed to offer you an unforgettable
                experience, from the elegant architecture to the personalized service.
              </p>
              <p>
                Over the years, we have grown and evolved, but our commitment to excellence has remained unwavering.
                Today, Yakin Hotel stands as a symbol of luxury, comfort, and exceptional service in the hospitality
                industry.
              </p>
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To provide our guests with an exceptional hospitality experience by combining luxurious accommodations,
                world-class amenities, and personalized service that exceeds expectations.
              </p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                To be recognized as the leading luxury hotel, setting the standard for excellence in hospitality and
                creating memorable experiences for every guest.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Team</h2>
            <p className="team-intro">
              Our success is built on the dedication and expertise of our team members who work tirelessly to ensure
              your stay is perfect in every way.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/team-1.jpg" alt="Team Member" />
                </div>
                <h3>John Smith</h3>
                <p>General Manager</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/team-2.jpg" alt="Team Member" />
                </div>
                <h3>Sarah Johnson</h3>
                <p>Front Office Manager</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/team-3.jpg" alt="Team Member" />
                </div>
                <h3>Michael Brown</h3>
                <p>Executive Chef</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/team-4.jpg" alt="Team Member" />
                </div>
                <h3>Emily Davis</h3>
                <p>Housekeeping Manager</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Experience Luxury at Yakin Hotel</h2>
            <p>Book your stay today and discover the perfect blend of luxury, comfort, and exceptional service.</p>
            <Link to="/booking" className="btn-book-now">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
