"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./HeroSlider.css"

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/images/hero/hero-1.jpg",
      alt: "Luxury Hotel Exterior",
    },
    {
      id: 2,
      image: "/images/hero/hero-2.jpg",
      alt: "Hotel Pool",
    },
    {
      id: 3,
      image: "/images/hero/hero-3.jpg",
      alt: "Luxury Room",
    },
  ]

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <img 
                src={slide.image || "/placeholder.svg?height=800&width=1200"} 
                alt={slide.alt} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
