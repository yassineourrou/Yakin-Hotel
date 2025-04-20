"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import BookingForm from "../components/BookingForm"
import "./RoomsPage.css"

const RoomsPage = () => {
  const [rooms, setRooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    guests: "",
    bedType: "",
  })

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/rooms")
        setRooms(response.data)
        setFilteredRooms(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching rooms:", error)
        setLoading(false)
      }
    }

    fetchRooms()
  }, [])

  useEffect(() => {
    // Apply filters
    let result = rooms

    // Filter by price range
    result = result.filter(
      (room) => room.price_per_night >= filters.priceRange[0] && room.price_per_night <= filters.priceRange[1],
    )

    // Filter by guests
    if (filters.guests) {
      result = result.filter((room) => room.max_guests >= Number.parseInt(filters.guests))
    }

    // Filter by bed type
    if (filters.bedType) {
      result = result.filter((room) => room.bed_type === filters.bedType)
    }

    setFilteredRooms(result)
  }, [filters, rooms])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target
    const index = name === "minPrice" ? 0 : 1
    const newPriceRange = [...filters.priceRange]
    newPriceRange[index] = Number.parseInt(value)
    setFilters((prev) => ({
      ...prev,
      priceRange: newPriceRange,
    }))
  }

  return (
    <div className="rooms-page">
      <div className="rooms-hero">
        <div className="container">
          <h1>Rooms and Suites</h1>
          <p>Experience luxury and comfort in our carefully designed rooms and suites</p>
        </div>
      </div>

      <div className="container">
        <BookingForm />

        <div className="rooms-content">
          <div className="filters-sidebar">
            <h3>Filter Rooms</h3>

            <div className="filter-group">
              <label>Price Range</label>
              <div className="price-inputs">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.priceRange[0]}
                  onChange={handlePriceRangeChange}
                  min="0"
                />
                <span>to</span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.priceRange[1]}
                  onChange={handlePriceRangeChange}
                  min="0"
                />
              </div>
            </div>

            <div className="filter-group">
              <label>Guests</label>
              <select name="guests" value={filters.guests} onChange={handleFilterChange}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Bed Type</label>
              <select name="bedType" value={filters.bedType} onChange={handleFilterChange}>
                <option value="">Any</option>
                <option value="King">King</option>
                <option value="Queen">Queen</option>
                <option value="Two Queens">Two Queens</option>
                <option value="Twin">Twin</option>
                <option value="King + Sofa Bed">King + Sofa Bed</option>
              </select>
            </div>
          </div>

          <div className="rooms-grid">
            {loading ? (
              <div className="loading">Loading rooms...</div>
            ) : filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
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
                    <div className="room-actions">
                      <Link to={`/rooms/${room.id}`} className="view-details-btn">
                        View Details
                      </Link>
                      <Link to={`/booking?room_id=${room.id}`} className="book-now-btn">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-rooms">No rooms match your filters. Please try different criteria.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomsPage

