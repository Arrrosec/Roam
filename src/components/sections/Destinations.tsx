const destinations = [
  {
    city: "Tokyo",
    country: "Japan",
    tag: "Culture & Food",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    trips: "12,400 trips planned",
  },
  {
    city: "Santorini",
    country: "Greece",
    tag: "Romance",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop",
    trips: "9,800 trips planned",
  },
  {
    city: "New York",
    country: "USA",
    tag: "City Breaks",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop",
    trips: "18,200 trips planned",
  },
  {
    city: "Bali",
    country: "Indonesia",
    tag: "Nature & Wellness",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    trips: "15,600 trips planned",
  },
  {
    city: "Paris",
    country: "France",
    tag: "Art & Culture",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
    trips: "21,000 trips planned",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop",
    trips: "7,300 trips planned",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
              Destinations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Trending right now
            </h2>
          </div>
          <button className="text-sm text-white/40 hover:text-white transition self-start md:self-auto">
            View all destinations →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest) => (
            <div
              key={dest.city}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.city}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-3 py-1 rounded-full">
                  {dest.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-2xl font-bold tracking-tight">
                  {dest.city}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white/50 text-sm">{dest.country}</span>
                  <span className="text-white/40 text-xs">{dest.trips}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;