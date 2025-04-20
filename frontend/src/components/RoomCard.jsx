import { Link } from "react-router-dom"
import "./RoomCard.css"

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={room.image_url || "/placeholder.svg"} alt={room.name} />
      </div>
      <div className="room-info">
        <h3 className="room-title">{room.name}</h3>
        <p className="room-price">${room.price_per_night}/night</p>
        <div className="room-features">
          <span>
            <i className="fas fa-user"></i> {room.capacity} Guests
          </span>
          <span>
            <i className="fas fa-bed"></i> {room.bed_type}
          </span>
          <span>
            <i className="fas fa-ruler-combined"></i> {room.size} m²
          </span>
        </div>
        <div className="room-actions">
          <Link to={`/rooms/${room.id}`} className="btn-view-details">
            View Details
          </Link>
          <Link to={`/booking?room=${room.id}`} className="btn-book-now">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
