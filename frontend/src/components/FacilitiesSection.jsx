import { Link } from "react-router-dom"
import "./FacilitiesSection.css"

// Import icons
import swimmingPoolIcon from "../assets/icons/swimming-pool.png"
import wifiIcon from "../assets/icons/wifi.png"
import turkey from "../assets/icons/turkey.png"
import dumbbell from "../assets/icons/dumbbell.png"
import gamecontroller from "../assets/icons/gamecontroller.png"
import idea from "../assets/icons/idea.png"
import washingmachine from "../assets/icons/washingmachine.png"
import parking from "../assets/icons/parking.png"

const facilities = [
  { id: 1, name: "Swimming Pool", icon: swimmingPoolIcon },
  { id: 2, name: "WiFi", icon: wifiIcon },
  { id: 3, name: "break", icon: turkey },
  { id: 4, name: " dumbbell", icon: dumbbell },
  { id: 5, name: "game center", icon: gamecontroller },
  { id: 6, name: "24/7 light", icon: idea },
  { id: 7, name: "washing-machine", icon: washingmachine },
  { id: 8, name: "parking", icon: parking },
]

const FacilitiesSection = () => {
  return (
    <section className="facilities-section">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <p className="section-subtitle">We offer modern (5 star) hotel facilities for your comfort.</p>

        <div className="facilities-grid">
          {facilities.map((facility) => (
            <Link to="/facilities" key={facility.id} className="facility-item">
              <div className="facility-icon">
                <img src={facility.icon || "/placeholder.svg"} alt={facility.name} />
              </div>
              <h3>{facility.name}</h3>
            </Link>
          ))}
        </div>

        <div className="view-more">
          <Link to="/facilities" className="view-more-link">
            View All Facilities
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection

