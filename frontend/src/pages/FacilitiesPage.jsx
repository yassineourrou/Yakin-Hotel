import { Link } from "react-router-dom"
import "./FacilitiesPage.css"

// Import icons (these would be actual SVG imports in a real project)
import swimmingPoolIcon from "../assets/icons/swimming-pool.png"
import wifiIcon from "../assets/icons/wifi.png"
import turkey from "../assets/icons/turkey.png"
import dumbbell from "../assets/icons/dumbbell.png"
import gamecontroller from "../assets/icons/gamecontroller.png"
import idea from "../assets/icons/idea.png"
import washingmachine from "../assets/icons/washingmachine.png"
import parking from "../assets/icons/parking.png"

const facilities = [
  {
    id: 1,
    name: "Swimming Pool",
    icon: swimmingPoolIcon,
    description:
      "Our outdoor swimming pool offers a refreshing escape with comfortable loungers and poolside service. Enjoy a swim with a view of the surrounding landscape.",
    image: "/images/facilities/swimming-pool.png",
  },
  {
    id: 2,
    name: "Free WiFi",
    icon: wifiIcon,
    description:
      "Stay connected with complimentary high-speed WiFi available throughout the hotel, ensuring you can work or browse with ease from any location.",
    image: "/images/facilities/wifi.png",
  },
  {
    id: 3,
    name: "turkey",
    icon: turkey,
    description:
      "Indulge in our luxurious Turkish treatments designed to rejuvenate your body and mind. Our skilled therapists offer a range of traditional hammam rituals, massages, and beauty therapies inspired by the rich heritage of Turkey.",
    image: "/images/facilities/turkey.png",
  },
  {
    id: 4,
    name: "gym",
    icon: dumbbell,
    description:
      "Maintain your fitness routine in our state-of-the-art gym equipped with modern cardio and strength training equipment. Open 24/7 for your convenience.",
    image: "/images/facilities/dumbbell.png",
  },
  // {
  //   id: 5,
  //   name: "Restaurant",
  //   icon: restaurantIcon,
  //   description:
  //     "Savor exquisite cuisine at our in-house restaurant featuring local and international dishes prepared by our talented chefs using the freshest ingredients.",
  //   image: "/images/facilities/restaurant.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Bar & Lounge",
  //   icon: barIcon,
  //   description:
  //     "Unwind with your favorite drink at our elegant bar offering a wide selection of fine wines, craft cocktails, and premium spirits in a relaxed atmosphere.",
  //   image: "/images/facilities/bar.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Parking",
  //   icon: parkingIcon,
  //   description:
  //     "Secure parking is available for all guests with valet service option. Electric vehicle charging stations are also available upon request.",
  //   image: "/images/facilities/parking.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Room Service",
  //   icon: roomServiceIcon,
  //   description:
  //     "Enjoy the comfort of dining in your room with our 24-hour room service. Our extensive menu caters to all tastes and dietary requirements.",
  //   image: "/images/facilities/room-service.jpg",
  // },
  // {
  //   id: 9,
  //   name: "Conference Rooms",
  //   icon: conferenceIcon,
  //   description:
  //     "Host successful meetings and events in our versatile conference spaces equipped with the latest audiovisual technology and supported by our dedicated team.",
  //   image: "/images/facilities/conference.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Business Center",
  //   icon: businessCenterIcon,
  //   description:
  //     "Our business center provides all the services you need to stay productive, including printing, scanning, and high-speed internet access.",
  //   image: "/images/facilities/business-center.jpg",
  // },
  // {
  //   id: 11,
  //   name: "Laundry Service",
  //   icon: laundryIcon,
  //   description:
  //     "Keep your wardrobe fresh with our efficient laundry and dry-cleaning services, with same-day service available upon request.",
  //   image: "/images/facilities/laundry.jpg",
  // },
  // {
  //   id: 12,
  //   name: "Concierge Service",
  //   icon: conciergeIcon,
  //   description:
  //     "Our knowledgeable concierge team is available 24/7 to assist with restaurant reservations, tour bookings, transportation arrangements, and local recommendations.",
  //   image: "/images/facilities/concierge.jpg",
  // },
]

const FacilitiesPage = () => {
  return (
    <div className="facilities-page">
      <div className="facilities-hero">
        <div className="container">
          <h1>Our Facilities</h1>
          <p>Discover the exceptional amenities and services that make your stay at Yakin Hotel truly memorable</p>
        </div>
      </div>

      <div className="container">
        <div className="facilities-intro">
          <h2>Experience Luxury & Comfort</h2>
          <p>
            At Yakin Hotel, we pride ourselves on offering a comprehensive range of facilities designed to enhance your
            stay. Whether you're traveling for business or leisure, our amenities cater to all your needs, ensuring a
            comfortable and enjoyable experience throughout your visit.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility) => (
            <div key={facility.id} className="facility-card">
              <div className="facility-image">
                <img src={facility.image || "/placeholder.svg?height=300&width=400"} alt={facility.name} />
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <img src={facility.icon || "/placeholder.svg?height=50&width=50"} alt={facility.name} />
                </div>
                <h3>{facility.name}</h3>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-services">
          <h2>Additional Services</h2>
          <ul className="services-list">
            <li>Airport transfers</li>
            <li>Babysitting services</li>
            <li>Currency exchange</li>
            <li>Doctor on call</li>
            <li>Excursion and tour arrangements</li>
            <li>Flower arrangements</li>
            <li>Gift shop</li>
            <li>Luggage storage</li>
            <li>Multilingual staff</li>
            <li>Newspaper delivery</li>
            <li>Pet-friendly rooms (on request)</li>
            <li>Wheelchair accessibility</li>
          </ul>
        </div>

        <div className="cta-section">
          <h2>Ready to Experience Our Facilities?</h2>
          <p>Book your stay now and enjoy all that Yakin Hotel has to offer</p>
          <Link to="/rooms" className="cta-button">
            View Our Rooms
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FacilitiesPage

