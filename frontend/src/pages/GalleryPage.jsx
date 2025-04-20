import "./GalleryPage.css"

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      category: "rooms",
      image: "/images/gallery/room-1.jpg",
      title: "Deluxe Room",
    },
    {
      id: 2,
      category: "rooms",
      image: "/images/gallery/room-2.jpg",
      title: "Executive Suite",
    },
    {
      id: 3,
      category: "rooms",
      image: "/images/gallery/room-3.jpg",
      title: "Family Room",
    },
    {
      id: 4,
      category: "facilities",
      image: "/images/gallery/facility-1.jpg",
      title: "Swimming Pool",
    },
    {
      id: 5,
      category: "facilities",
      image: "/images/gallery/facility-2.jpg",
      title: "Fitness Center",
    },
    {
      id: 6,
      category: "facilities",
      image: "/images/gallery/facility-3.jpg",
      title: "Restaurant",
    },
    {
      id: 7,
      category: "dining",
      image: "/images/gallery/dining-1.jpg",
      title: "Main Restaurant",
    },
    {
      id: 8,
      category: "dining",
      image: "/images/gallery/dining-2.jpg",
      title: "Rooftop Bar",
    },
    {
      id: 9,
      category: "exterior",
      image: "/images/gallery/exterior-1.jpg",
      title: "Hotel Exterior",
    },
  ]

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our hotel through beautiful images</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filters">
            <button className="filter-button active">All</button>
            <button className="filter-button">Rooms</button>
            <button className="filter-button">Facilities</button>
            <button className="filter-button">Dining</button>
            <button className="filter-button">Exterior</button>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <div key={item.id} className="gallery-item" data-category={item.category}>
                <div className="gallery-image">
                  <img src={item.image || `/placeholder.svg?height=300&width=400`} alt={item.title} />
                  <div className="image-overlay">
                    <h3>{item.title}</h3>
                    <button className="btn-view">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
