import { Link } from "react-router-dom"
import "./RoomsSection.css"


const RoomsSection = ({ rooms, loading }) => {
  if (loading) {
    return (
      <section className="rooms-section">
        <div className="container">
          <h2 className="section-title">Luxurious Rooms</h2>
          <div className="loading">Loading rooms...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="rooms-section">
      <div className="container">
        <h2 className="section-title">Luxurious Rooms</h2>

        <div className="rooms-grid">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-image">
                  <img src={room.image_url || "/placeholder.svg"} alt={room.name} />
                </div>
                <div className="room-details">
                  <h3>{room.name}</h3>
                  <p className="room-description">{room.short_description}</p>
                  <div className="room-features">
                    <span>{room.size} m²</span>
                    <span>{room.max_guests} Guests</span>
                    <span>{room.bed_type}</span>
                  </div>
                  <div className="room-price">
                    <span className="price">${room.price_per_night}</span>
                    <span className="per-night">per night</span>
                  </div>
                  <Link to={`/rooms/${room.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-rooms">No rooms available at the moment.</div>
          )}
        </div>

        <div className="view-more">
          <Link to="/rooms" className="view-more-link">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RoomsSection

