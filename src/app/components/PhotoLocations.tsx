import { MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const photoLocations = [
  {
    id: 1,
    name: "Mirissa Beach Paradise",
    category: "Coastal Retreat",
    location: "South Coast",
    description: "Golden sands meet azure waters in this iconic beachside sanctuary. Perfect for sunset photography and seaside romance.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop",
    highlights: ["Sunset Views", "Beach Access", "Coastal Villa"],
  },
  {
    id: 2,
    name: "Kandy Temple Gardens",
    category: "Cultural Heritage",
    location: "Central Highlands",
    description: "Serene temple grounds surrounded by misty mountains and sacred history. A photographer's dream for spiritual and landscape shots.",
    image: "https://images.unsplash.com/photo-1548690312-e4f0e98b3a1f?w=1200&h=900&fit=crop",
    highlights: ["Temple Grounds", "Mountain Backdrop", "Heritage Site"],
  },
  {
    id: 3,
    name: "Nuwara Eliya Tea Plantations",
    category: "Highland Escapes",
    location: "Central Province",
    description: "Rolling emerald tea gardens with cool mountain breezes. Capture the essence of Sri Lanka's most picturesque highlands.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop",
    highlights: ["Tea Gardens", "Mountain Views", "Colonial Charm"],
  },
  {
    id: 4,
    name: "Ella Railway Views",
    category: "Adventure Spots",
    location: "Uva Province",
    description: "The iconic Nine Arch Bridge and verdant valleys create an enchanting backdrop. A favorite for adventurous luxury seekers.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop",
    highlights: ["Nine Arch Bridge", "Train Tracks", "Valley Views"],
  },
  {
    id: 5,
    name: "Sigiriya Rock Fortress",
    category: "Historical Icons",
    location: "Central Region",
    description: "Ancient rock fortress towering above lush jungle. Dramatic lighting and archaeological wonder make for unforgettable imagery.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop",
    highlights: ["Ancient Fortress", "Jungle Backdrop", "Historical Depth"],
  },
  {
    id: 6,
    name: "Horton Plains Wilderness",
    category: "Nature Escapes",
    location: "Central Highlands",
    description: "Mist-shrouded plateaus with dramatic cliff edges. World's End offers breathtaking vistas for premium landscape photography.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop",
    highlights: ["World's End", "Misty Plateaus", "Pristine Nature"],
  },
  {
    id: 7,
    name: "Galle Fort Ramparts",
    category: "Architectural Gems",
    location: "South Coast",
    description: "UNESCO World Heritage fortress overlooking turquoise waters. Colonial elegance meets tropical beauty in every frame.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop",
    highlights: ["UNESCO Site", "Rampart Walks", "Sunset Vistas"],
  },
  {
    id: 8,
    name: "Colombo Riverside Luxury",
    category: "Urban Elegance",
    location: "Western Province",
    description: "Modern skyline meets colonial heritage. Contemporary boutique hotels nestled in the vibrant heart of Sri Lanka's capital.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop",
    highlights: ["Modern Architecture", "Riverside Setting", "Urban Chic"],
  },
  {
    id: 9,
    name: "Arugambe Surf Cove",
    category: "Beach Lifestyle",
    location: "East Coast",
    description: "Turquoise lagoon and golden dunes backed by coconut palms. Perfect for capturing the laid-back luxury beach lifestyle.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop",
    highlights: ["Lagoon Views", "Surf Beach", "Tropical Paradise"],
  },
];

export function PhotoLocations() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="photo-locations"
      className="py-28 lg:py-36 min-h-screen"
      style={{ background: "#F5F5DC" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px" style={{ background: "rgba(2, 48, 32, 0.3)" }} />
            <span
              className="text-[10px] font-bold uppercase"
              style={{
                color: "#023020",
                letterSpacing: "0.4em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Iconic Destinations
            </span>
          </div>

          <h2
            className="text-4xl lg:text-6xl font-light mb-6 leading-tight"
            style={{
              color: "#023020",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Photo <em className="italic">Locations</em>
          </h2>

          <p
            className="max-w-2xl text-base lg:text-lg leading-relaxed"
            style={{
              color: "rgba(51, 51, 51, 0.7)",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Discover the most photogenic corners of Sri Lanka. From misty highlands to pristine beaches, each location tells a story of luxury, heritage, and natural beauty.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {photoLocations.map((location) => (
            <div
              key={location.id}
              className="group/card flex flex-col h-full cursor-pointer"
              onMouseEnter={() => setHoveredId(location.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() =>
                setActiveLocation(activeLocation === location.id ? null : location.id)
              }
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden rounded-sm mb-6">
                {/* Image with Zoom Effect */}
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Dark Green Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(2,48,32,0.98) 0%, rgba(2,48,32,0.65) 45%, transparent 100%)",
                  }}
                />

                {/* Glassmorphism Overlay on Hover */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredId === location.id ? "opacity-100 backdrop-blur-sm" : "opacity-0"
                  }`}
                  style={{
                    background: "rgba(2,48,32,0.25)",
                    backdropFilter: hoveredId === location.id ? "blur(4px)" : "blur(0px)",
                  }}
                />

                {/* Location Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(245, 245, 220, 0.95)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <MapPin size={14} style={{ color: "#023020" }} />
                    <span
                      className="text-xs font-semibold"
                      style={{
                        color: "#023020",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {location.location}
                    </span>
                  </div>
                </div>

                {/* Category Tag - Bottom Left */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span
                    className="text-[9px] font-bold uppercase block"
                    style={{
                      color: "#F5F5DC",
                      letterSpacing: "0.3em",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {location.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col">
                <h3
                  className="text-2xl lg:text-2xl font-light mb-2 leading-tight"
                  style={{
                    color: "#023020",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {location.name}
                </h3>

                <p
                  className="text-sm lg:text-base mb-6 leading-relaxed flex-1"
                  style={{
                    color: "rgba(51, 51, 51, 0.65)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {location.description}
                </p>

                {/* Highlights - Expandable */}
                <div
                  className={`mb-6 overflow-hidden transition-all duration-500 ${
                    activeLocation === location.id || hoveredId === location.id
                      ? "max-h-32 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-2">
                    {location.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(2, 48, 32, 0.08)",
                          color: "#023020",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Button */}
                <div className="group/btn inline-flex items-center gap-2 text-sm font-light">
                  <a
                    href="#"
                    className="text-[#023020] transition-all duration-300 pb-1 border-b border-[#023020]/30 hover:border-[#023020] group-hover/btn:text-[#023020]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Explore Location
                  </a>
                  <ArrowUpRight
                    size={16}
                    style={{
                      color: "#023020",
                      transition: "transform 0.3s ease",
                    }}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="rounded-sm py-16 lg:py-20 px-8 lg:px-12 text-center"
          style={{
            background: "#023020",
          }}
        >
          <h3
            className="text-3xl lg:text-4xl font-light mb-6 text-center"
            style={{
              color: "#F5F5DC",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Ready to Experience Luxury Photography?
          </h3>

          <p
            className="max-w-2xl mx-auto text-base lg:text-lg mb-10"
            style={{
              color: "rgba(245, 245, 220, 0.8)",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Let our team help you find the perfect location for your luxury content, brand campaign, or unforgettable getaway.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="group/btn inline-flex items-center gap-2">
              <button
                className="px-8 py-3 transition-all duration-300 pb-2 border-b-2 border-[#F5F5DC] hover:border-[#F5F5DC]"
                style={{
                  color: "#F5F5DC",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Schedule a Tour
              </button>
              <ArrowUpRight
                size={16}
                style={{ color: "#F5F5DC" }}
                className="group-hover/btn:translate-x-1 transition-transform duration-300"
              />
            </div>

            <a
              href="#contact"
              className="px-8 py-3 transition-all duration-300"
              style={{
                color: "#023020",
                background: "#F5F5DC",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#023020";
                e.currentTarget.style.color = "#F5F5DC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F5F5DC";
                e.currentTarget.style.color = "#023020";
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
