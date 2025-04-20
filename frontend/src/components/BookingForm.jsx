"use client"

import { useState } from "react"
import axios from "axios"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./BookingForm.css"

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date(new Date().setDate(new Date().getDate() + 1)))
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const response = await axios.post("http://localhost:8000/api/check-availability", {
        check_in: checkIn,
        check_out: checkOut,
        adults,
        children,
        rooms,
      })

      if (response.data.available) {
        window.location.href = `/booking?check_in=${checkIn.toISOString()}&check_out=${checkOut.toISOString()}&adults=${adults}&children=${children}&rooms=${rooms}`
      } else {
        setMessage("No rooms available for the selected dates. Please try different dates.")
      }
    } catch (error) {
      console.error("Error checking availability:", error)
      setMessage("An error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date(checkIn.getTime() + 86400000)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Adults</label>
          <select value={adults} onChange={(e) => setAdults(Number.parseInt(e.target.value))} className="form-control">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Children</label>
          <select
            value={children}
            onChange={(e) => setChildren(Number.parseInt(e.target.value))}
            className="form-control"
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Rooms</label>
          <select value={rooms} onChange={(e) => setRooms(Number.parseInt(e.target.value))} className="form-control">
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="check-availability-btn" disabled={loading}>
          {loading ? "Checking..." : "Check Availability"}
        </button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  )
}

export default BookingForm

