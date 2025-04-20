"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./BookingPage.css"

const BookingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)

  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [bookingData, setBookingData] = useState({
    checkIn: queryParams.get("check_in") ? new Date(queryParams.get("check_in")) : new Date(),
    checkOut: queryParams.get("check_out")
      ? new Date(queryParams.get("check_out"))
      : new Date(new Date().setDate(new Date().getDate() + 1)),
    adults: queryParams.get("adults") ? Number.parseInt(queryParams.get("adults")) : 2,
    children: queryParams.get("children") ? Number.parseInt(queryParams.get("children")) : 0,
    roomId: queryParams.get("room") ? Number.parseInt(queryParams.get("room")) : null,
  })

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [step, setStep] = useState(1)
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const [bookingStatus, setBookingStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        setLoading(true)

        const checkInStr = bookingData.checkIn.toISOString().split("T")[0]
        const checkOutStr = bookingData.checkOut.toISOString().split("T")[0]

        const response = await axios.post("http://localhost:8000/api/rooms/check-availability", {
          check_in: checkInStr,
          check_out: checkOutStr,
          adults: bookingData.adults,
          children: bookingData.children,
          rooms: 1,
        })

        setRooms(response.data)

        // If a room ID was provided in the URL, select that room
        if (bookingData.roomId) {
          const room = response.data.find((r) => r.id === bookingData.roomId)
          if (room) {
            setSelectedRoom(room)
            setStep(2)
          }
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching available rooms:", error)
        setError("Failed to load available rooms. Please try again later.")
        setLoading(false)
      }
    }

    fetchAvailableRooms()
  }, [bookingData.checkIn, bookingData.checkOut, bookingData.adults, bookingData.children, bookingData.roomId])

  const handleBookingDataChange = (field, value) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGuestInfoChange = (e) => {
    const { name, value } = e.target
    setGuestInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRoomSelect = (room) => {
    setSelectedRoom(room)
    setStep(2)
    window.scrollTo(0, 0)
  }

  const handleBackToRooms = () => {
    setSelectedRoom(null)
    setStep(1)
    window.scrollTo(0, 0)
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()

    // Simulate booking submission
    setBookingStatus({
      submitted: true,
      success: true,
      message: "Your booking has been confirmed! A confirmation email has been sent to your email address.",
    })

    // In a real application, you would submit the booking to the backend here
  }

  // Calculate number of nights
  const nights = Math.ceil((bookingData.checkOut.getTime() - bookingData.checkIn.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Book Your Stay</h1>
          <p>Find the perfect room for your stay at Yakin Hotel</p>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          {bookingStatus.submitted ? (
            <div className="booking-confirmation">
              <div className={`confirmation-message ${bookingStatus.success ? "success" : "error"}`}>
                <i className={bookingStatus.success ? "fas fa-check-circle" : "fas fa-times-circle"}></i>
                <h2>{bookingStatus.success ? "Booking Confirmed!" : "Booking Failed"}</h2>
                <p>{bookingStatus.message}</p>
              </div>

              {bookingStatus.success && (
                <div className="booking-details">
                  <h3>Booking Details</h3>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Room:</span>
                      <span className="detail-value">{selectedRoom.name}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Check-in:</span>
                      <span className="detail-value">{bookingData.checkIn.toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Check-out:</span>
                      <span className="detail-value">{bookingData.checkOut.toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Guests:</span>
                      <span className="detail-value">
                        {bookingData.adults} Adults, {bookingData.children} Children
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Total:</span>
                      <span className="detail-value">${selectedRoom.price_per_night * nights}</span>
                    </div>
                  </div>
                </div>
              )}

              <button className="btn-back-home" onClick={() => navigate("/")}>
                Back to Home
              </button>
            </div>
          ) : (
            <>
              <div className="booking-steps">
                <div className={`step ${step === 1 ? "active" : ""}`}>
                  <span className="step-number">1</span>
                  <span className="step-text">Select Room</span>
                </div>
                <div className="step-connector"></div>
                <div className={`step ${step === 2 ? "active" : ""}`}>
                  <span className="step-number">2</span>
                  <span className="step-text">Guest Information</span>
                </div>
                <div className="step-connector"></div>
                <div className={`step ${step === 3 ? "active" : ""}`}>
                  <span className="step-number">3</span>
                  <span className="step-text">Confirmation</span>
                </div>
              </div>

              <div className="booking-form-container">
                {step === 1 && (
                  <div className="room-selection">
                    <div className="search-filters">
                      <h2>Search Rooms</h2>
                      <div className="filters-grid">
                        <div className="filter-group">
                          <label>Check In</label>
                          <DatePicker
                            selected={bookingData.checkIn}
                            onChange={(date) => handleBookingDataChange("checkIn", date)}
                            selectsStart
                            startDate={bookingData.checkIn}
                            endDate={bookingData.checkOut}
                            minDate={new Date()}
                            className="date-picker"
                          />
                        </div>

                        <div className="filter-group">
                          <label>Check Out</label>
                          <DatePicker
                            selected={bookingData.checkOut}
                            onChange={(date) => handleBookingDataChange("checkOut", date)}
                            selectsEnd
                            startDate={bookingData.checkIn}
                            endDate={bookingData.checkOut}
                            minDate={bookingData.checkIn}
                            className="date-picker"
                          />
                        </div>

                        <div className="filter-group">
                          <label>Adults</label>
                          <select
                            value={bookingData.adults}
                            onChange={(e) => handleBookingDataChange("adults", Number.parseInt(e.target.value))}
                            className="select-input"
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="filter-group">
                          <label>Children</label>
                          <select
                            value={bookingData.children}
                            onChange={(e) => handleBookingDataChange("children", Number.parseInt(e.target.value))}
                            className="select-input"
                          >
                            {[...Array(6)].map((_, i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="available-rooms">
                      <h2>Available Rooms</h2>

                      {loading ? (
                        <div className="loading">Loading available rooms...</div>
                      ) : error ? (
                        <div className="error">{error}</div>
                      ) : rooms.length === 0 ? (
                        <div className="no-rooms">
                          <p>No rooms available for the selected dates and guests.</p>
                          <p>Please try different dates or guest numbers.</p>
                        </div>
                      ) : (
                        <div className="rooms-grid">
                          {rooms.map((room) => (
                            <div key={room.id} className="room-card">
                              <div className="room-image">
                                <img src={room.image_url || "/placeholder.svg?height=200&width=300"} alt={room.name} />
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
                                <button className="btn-select-room" onClick={() => handleRoomSelect(room)}>
                                  Select Room
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && selectedRoom && (
                  <div className="guest-information">
                    <div className="selected-room-summary">
                      <div className="summary-header">
                        <h2>Selected Room</h2>
                        <button className="btn-change-room" onClick={handleBackToRooms}>
                          Change Room
                        </button>
                      </div>

                      <div className="room-summary">
                        <div className="room-image">
                          <img
                            src={selectedRoom.image_url || "/placeholder.svg?height=150&width=200"}
                            alt={selectedRoom.name}
                          />
                        </div>
                        <div className="room-details">
                          <h3>{selectedRoom.name}</h3>
                          <div className="booking-details">
                            <div className="detail">
                              <i className="fas fa-calendar-alt"></i>
                              <span>Check In: {bookingData.checkIn.toLocaleDateString()}</span>
                            </div>
                            <div className="detail">
                              <i className="fas fa-calendar-alt"></i>
                              <span>Check Out: {bookingData.checkOut.toLocaleDateString()}</span>
                            </div>
                            <div className="detail">
                              <i className="fas fa-user"></i>
                              <span>
                                {bookingData.adults} Adults, {bookingData.children} Children
                              </span>
                            </div>
                            <div className="detail">
                              <i className="fas fa-moon"></i>
                              <span>
                                {nights} {nights === 1 ? "Night" : "Nights"}
                              </span>
                            </div>
                          </div>
                          <div className="price-summary">
                            <div className="price-detail">
                              <span>Room Price:</span>
                              <span>
                                ${selectedRoom.price_per_night} x {nights} nights
                              </span>
                            </div>
                            <div className="price-total">
                              <span>Total:</span>
                              <span>${selectedRoom.price_per_night * nights}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="guest-form">
                      <h2>Guest Information</h2>
                      <form onSubmit={handleSubmitBooking}>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={guestInfo.firstName}
                              onChange={handleGuestInfoChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={guestInfo.lastName}
                              onChange={handleGuestInfoChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={guestInfo.email}
                              onChange={handleGuestInfoChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={guestInfo.phone}
                              onChange={handleGuestInfoChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="specialRequests">Special Requests (Optional)</label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            rows="4"
                            value={guestInfo.specialRequests}
                            onChange={handleGuestInfoChange}
                          ></textarea>
                        </div>

                        <div className="form-actions">
                          <button type="button" className="btn-back" onClick={handleBackToRooms}>
                            Back
                          </button>
                          <button type="submit" className="btn-confirm-booking">
                            Confirm Booking
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default BookingPage
