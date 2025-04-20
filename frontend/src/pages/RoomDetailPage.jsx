"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import BookingForm from "../components/BookingForm"
import "./RoomDetailPage.css"

const RoomDetailPage = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/rooms/${id}`)
        setRoom(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching room details:", error)
        setError("Failed to load room details. Please try again later.")
        setLoading(false)
      }
    }

    fetchRoom()
  }, [id])

  if (loading) {
    return (
      <div className="room-detail-page">
        <div className="container">
          <div className="loading">Loading room details...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="room-detail-page">
        <div className="container">
          <div className="error-message">{error}</div>
          <Link to="/rooms" className="back-button">
            Back to Rooms
          </Link>
        </div>
      </div>
    )
  }

  if (!room) {
    return (
      <div className="room-detail-page">
        <div className="container">
          <div className="error-message">Room not found</div>
          <Link to="/rooms" className="back-button">
            Back to Rooms
          </Link>
        </div>
      </div>
    )
  }

  // Parse JSON strings if needed
  const amenities = typeof room.amenities === "string" ? JSON.parse(room.amenities) : room.amenities
  const gallery = typeof room.gallery === "string" ? JSON.parse(room.gallery) : room.gallery

  // Use main image if gallery is empty
  const allImages = gallery && gallery.length > 0 ? [room.image_url, ...gallery] : [room.image_url]

  return (
    <div className="room-detail-page">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <Link to="/rooms">Rooms</Link> &gt; <span>{room.name}</span>
        </div>

        <div className="room-detail-content">
          <div className="room-gallery">
            <div className="main-image">
              <img src={allImages[activeImage] || "/placeholder.svg"} alt={room.name} />
            </div>

            {allImages.length > 1 && (
              <div className="thumbnail-gallery">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === activeImage ? "active" : ""}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={image || "/placeholder.svg"} alt={`${room.name} view ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="room-info">
            <h1>{room.name}</h1>

            <div className="room-features">
              <div className="feature">
                <span className="feature-label">Size:</span>
                <span className="feature-value">{room.size} m²</span>
              </div>
              <div className="feature">
                <span className="feature-label">Max Guests:</span>
                <span className="feature-value">{room.max_guests}</span>
              </div>
              <div className="feature">
                <span className="feature-label">Bed Type:</span>
                <span className="feature-value">{room.bed_type}</span>
              </div>
            </div>

            <div className="room-price-detail">
              {room.discount_price ? (
                <>
                  <span className="original-price">${room.price_per_night}</span>
                  <span className="price">${room.discount_price}</span>
                </>
              ) : (
                <span className="price">${room.price_per_night}</span>
              )}
              <span className="per-night">per night</span>
            </div>

            <div className="room-description">
              <p>{room.description}</p>
            </div>

            <div className="room-amenities">
              <h3>Amenities</h3>
              <ul>{amenities && amenities.map((amenity, index) => <li key={index}>{amenity}</li>)}</ul>
            </div>

            <Link to={`/booking?room_id=${room.id}`} className="book-now-btn">
              Book This Room
            </Link>
          </div>
        </div>

        <div className="booking-section">
          <h2>Check Availability</h2>
          <BookingForm roomId={room.id} />
        </div>

        <div className="other-rooms-section">
          <h2>You May Also Like</h2>
          {/* This would be populated with other room recommendations */}
          <div className="other-rooms-placeholder">
            <p>Other room recommendations would appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailPage

