import { useState } from "react"
import "./ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real application, this would send data to your Laravel backend
      // const response = await axios.post('http://localhost:8000/api/contact', formData);

      // For demo purposes, we'll simulate a successful API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message. Our team will contact you shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        submitted: true,
        success: false,
        message: "There was an error sending your message. Please try again later.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to answer any questions you may have about our hotel and services</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <div className="info-item">
              <div className="info-icon">
                <i className="location-icon"></i>
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>123 Hotel Street, City Name</p>
                <p>State, Country, Postal Code</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="phone-icon"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>Reservations: +1 234 567 8900</p>
                <p>Front Desk: +1 234 567 8901</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="email-icon"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@yakinhotel.com</p>
                <p>reservations@yakinhotel.com</p>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-grid">
                <div className="day">Monday - Friday</div>
                <div className="time">24 hours</div>
                <div className="day">Saturday - Sunday</div>
                <div className="time">24 hours</div>
              </div>
              <p className="note">Front desk and concierge services available 24/7</p>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon facebook" aria-label="Facebook"></a>
                <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
                <a href="#" className="social-icon twitter" aria-label="Twitter"></a>
                <a href="#" className="social-icon linkedin" aria-label="LinkedIn"></a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>

            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Our Location</h2>
          <div className="map-container">
            {/* In a real application, this would be a Google Maps or other map component */}
            <div className="map-placeholder">
              <p>Interactive map would be displayed here</p>
              <p>123 Hotel Street, City Name, State, Country</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are the check-in and check-out times?</h3>
              <p>
                Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be
                arranged based on availability.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is breakfast included in the room rate?</h3>
              <p>
                Breakfast is included in some room rates. Please check the room details when booking or contact our
                reservations team for more information.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer airport transfers?</h3>
              <p>
                Yes, we offer airport transfers for an additional fee. Please contact us at least 24 hours before your
                arrival to arrange this service.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is there a cancellation fee?</h3>
              <p>
                Cancellation policies vary depending on the rate and dates of your reservation. Please refer to your
                booking confirmation for specific details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

