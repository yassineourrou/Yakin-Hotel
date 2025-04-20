import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import RoomsPage from "./pages/RoomsPage"
import RoomDetailPage from "./pages/RoomDetailPage"
import FacilitiesPage from "./pages/FacilitiesPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import BookingPage from "./pages/BookingPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:id" element={<RoomDetailPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage /> } />
          <Route path="/booking" element={<BookingPage /> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

