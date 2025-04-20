"use client"

import { useState } from "react"
import "./TestimonialsSection.css"

const TestimonialsSection = ({ testimonials, loading }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <div className="loading">Loading testimonials...</div>
        </div>
      </section>
    )
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>

        <div className="testimonials-slider">
          <button className="slider-arrow prev" onClick={handlePrev}>
            &lt;
          </button>

          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card ${index === activeIndex ? "active" : ""}`}>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.author_image || "/placeholder-avatar.jpg"} alt={testimonial.author_name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.author_name}</h4>
                    <p>{testimonial.author_title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={handleNext}>
            &gt;
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

