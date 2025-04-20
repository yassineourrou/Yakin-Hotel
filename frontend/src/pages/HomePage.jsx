"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import HeroSection from "../components/HeroSection"
import BookingForm from "../components/BookingForm"
import FacilitiesSection from "../components/FacilitiesSection"
import RoomsSection from "../components/RoomsSection"
import TestimonialsSection from "../components/TestimonialsSection"

import "./HomePage.css"
import img3 from "../assets/images/rooms/3.jpg"
import img4 from "../assets/images/rooms/4.jpg"
import img6 from "../assets/images/rooms/6.jpg"
import img7 from "../assets/images/rooms/7.jpg"

const HomePage = () => {
  const [featuredRooms, setFeaturedRooms] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured rooms from Laravel API
        const roomsResponse = await axios.get("http://localhost:8000/api/rooms/featured")
        setFeaturedRooms(roomsResponse.data)

        // Fetch testimonials from Laravel API
        const testimonialsResponse = await axios.get("http://localhost:8000/api/testimonials")
        setTestimonials(testimonialsResponse.data)

        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
//     setFeaturedRooms([{id:1,image_url:img3,name: "room1",short_description:"Television set , Extra sheets and breakfast",size:23,max_guests:"2",bed_type:"2 pr",price_per_night:45},
//     {id:2,image_url:img4,name: "room2",short_description:"Television set , Extra sheets and breakfast",size:23,max_guests:"2",bed_type:"2 pr",price_per_night:45},
//     {id:3,image_url:img6,name: "room3",short_description:"Television set , Extra sheets and breakfast",size:23,max_guests:"2",bed_type:"2 pr",price_per_night:45},
//     {id:4,image_url:img7,name: "room4",short_description:"Television set , Extra sheets and breakfast",size:23,max_guests:"2",bed_type:"2 pr",price_per_night:45}])
}, [])
  
  return (
    <div className="home-page">
      <HeroSection />
      <BookingForm />
      <FacilitiesSection />
      <RoomsSection rooms={featuredRooms} loading={loading} />
      <TestimonialsSection testimonials={testimonials} loading={loading} />
    </div>
  )
}

export default HomePage

