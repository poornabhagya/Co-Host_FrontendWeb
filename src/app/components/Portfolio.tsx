"use client";
import { useState, useRef } from "react";

// Helper function to resolve public asset URLs correctly across dev and production
const getAssetUrl = (path: string) => {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("//")) {
    return path;
  }
  const cleanPath = path.startsWith("./") ? path.slice(2) : path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// Global Distribution Local Asset Variable
const AgodaLogoPath = getAssetUrl("globalDistribution/logo1.png");

// Properties Array with Exact Logos Connected (Preserving all properties and coordinates)
const portfolioProperties = [
  { 
    id: 2, 
    name: "Lakeside Retreat - Malsiripura", 
    top: "52.75%", 
    left: "43%", 
    description: "Nestled by a serene lake, offering a perfect blend of nature and luxury.", 
    image: "./propertiesCardImgs/lakeside.jpg", 
    websiteLink: "https://lakesideretreatlk.com/", 
    logo: getAssetUrl("propertyLogos/Artboard 16.png") 
  },
  { 
    id: 3, 
    name: "Margossa Residence - Kandy", 
    top: "61.5%", 
    left: "48.75%", 
    description: "Colonial charm meets modern tropical luxury in the heart of Kandy.", 
    image: "./propertiesCardImgs/margossaResidence.jpg", 
    websiteLink: "https://www.airbnb.co.uk/rooms/1347809840414743566?source_impression_id=p3_1777884475_P3KuwuxgCxieAufw", 
    logo: getAssetUrl("propertyLogos/Artboard 3.png") 
  },
  { 
    id: 4, 
    name: "Casa Heliconia - Kaleliya ", 
    top: "63.5%", 
    left: "35.5%", 
    description: "An exotic jungle paradise surrounded by lush tropical vegetation.", 
    image: "./propertiesCardImgs/casaHeliconia.jpg", 
    websiteLink: "https://tropicalgardenvillas.com/casa-heliconia/", 
    logo: getAssetUrl("propertyLogos/Artboard 6.webp") 
  },
  { 
    id: 5, 
    name: "Villa Morawala - Negombo", 
    top: "63%", 
    left: "27.5%", 
    description: "Breathtaking ocean views and pristine beaches right at your doorstep.", 
    image: "./propertiesCardImgs/villaMorawala.jpg", 
    websiteLink: "#", 
    logo: getAssetUrl("propertyLogos/Artboard 19.png") 
  },
  { 
    id: 6, 
    name: "Camellia Residencies - Colombo", 
    top: "70.75%", 
    left: "29.25%",  
    description: "Modern luxury living with exceptional access to local attractions.", 
    image: "./propertiesCardImgs/camelliaResidencies.webp", 
    websiteLink: "https://camelliaresidencies.com/", 
    logo: getAssetUrl("propertyLogos/Artboard 11.png") 
  },
  { 
    id: 7, 
    name: "SinhaGiri Mansion - Nuwara Eliya", 
    top: "68.5%", 
    left: "51%", 
    description: "A majestic mansion echoing the grandeur of Sri Lanka's rich history.", 
    image: "./propertiesCardImgs/sinhagiri.jpg", 
    websiteLink: "https://tropicalgardenvillas.com/sinhagiri-mansion/", 
    logo: getAssetUrl("propertyLogos/Artboard 17.webp") 
  },
  { 
    id: 9, 
    name: "Boutique 87 - Bentota", 
    top: "81.25%", 
    left: "32%", 
    description: "A uniquely designed Bawa-inspired property offering an intimate stay.", 
    image: "./propertiesCardImgs/Boutique87.jpg", 
    websiteLink: "https://boutique-87.com/", 
    logo: getAssetUrl("propertyLogos/Artboard 7.png") 
  },
  { 
    id: 10, 
    name: "Sihina - Kosgoda", 
    top: "84%", 
    left: "34.5%",  
    description: "A dreamlike escape combining contemporary design with tropical ease.", 
    image: "./propertiesCardImgs/sihina.jpg", 
    websiteLink: "https://www.airbnb.com/rooms/13226681?source_impression_id=p3_1777884619_P3p2dfviqSantwtu", 
    logo: getAssetUrl("propertyLogos/Artboard 13.png") 
  },
  { 
    id: 11, 
    name: "Camellia Ranch - Galle", 
    top: "88%", 
    left: "38.5%", 
    description: "Expansive green landscapes offering a serene and private retreat.", 
    image: "./propertiesCardImgs/camelliaRanch.jpg", 
    websiteLink: "https://camelliaranch.com/", 
    logo: getAssetUrl("propertyLogos/Artboard 1.png") 
  },
  { 
    id: 13, 
    name: "Liv - Unawatuna", 
    top: "91%", 
    left: "37%", 
    description: "Vibrant beachside living in one of Sri Lanka's most iconic bays.", 
    image: "./propertiesCardImgs/liv.jpg", 
    websiteLink: "https://www.airbnb.com/rooms/1573838604856901592?guests=1&adults=1&s=67&unique_share_id=c05b7f93-247b-427a-ab45-39975daa69bc&source_impression_id=p3_1777891661_P3tjon9eGRv3vqtG", 
    logo: getAssetUrl("propertyLogos/Artboard 12.png") 
  },
  { 
    id: 14, 
    name: "Lotus & Moon - Habaraduwa", 
    top: "92.5%", 
    left: "40.5%",  
    description: "A mystical and calm hideaway perfect for relaxation and rejuvenation.", 
    image: "./propertiesCardImgs/lotus.jpeg", 
    websiteLink: "https://www.airbnb.com/rooms/1530906375827575079?source_impression_id=p3_1777884769_P3hTb6voa9vpkK11", 
    logo: getAssetUrl("propertyLogos/Artboard 10.png") 
  },
  { 
    id: 15, 
    name: "Heuvel Villa - Kandy", 
    top: "64%", 
    left: "47%",  
    description: "A mystical and calm hideaway perfect for relaxation and rejuvenation.", 
    image: "./propertiesCardImgs/heuvelKandy.png", 
    websiteLink: "https://heuvelvillakandy.com/", 
    logo: getAssetUrl("propertyLogos/Artboard 18.png") 
  },
  { 
    id: 16, 
    name: "CATUMARAN - Jaffna", 
    top: "14%",           
    left: "34%",          
    description: "Experience northern culture and tranquil coastal breezes in the heart of Jaffna.", 
    image: "./propertiesCardImgs/lakeside.jpg", 
    websiteLink: "#", 
    logo: getAssetUrl("propertyLogos/Artboard 16.png") 
  },
  { 
    id: 17, 
    name: "Hiyarapitiya House - Kandy", 
    top: "64%",           
    left: "51.5%",          
    description: "Perched amidst the misty hills, offering serenity with panoramic hillside views.", 
    image: "./propertiesCardImgs/heuvelKandy.png", 
    websiteLink: "https://hiyarapitiyahousekandy.com/", 
    logo: getAssetUrl("propertyLogos/Artboard 18.png") 
  },
];

// Global Distribution Platforms
const globalChannels = [
  { name: "Airbnb", src: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/airbnb.svg" },
  { name: "Booking.com", src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" },
  { name: "Agoda", src: AgodaLogoPath }, 
];

export function Portfolio() {
  const [activeProperty, setActiveProperty] = useState(portfolioProperties[0]);
  const [hoveredProperty, setHoveredProperty] = useState<typeof portfolioProperties[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentIndex = portfolioProperties.findIndex((p) => p.id === activeProperty.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % portfolioProperties.length;
    setActiveProperty(portfolioProperties[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + portfolioProperties.length) % portfolioProperties.length;
    setActiveProperty(portfolioProperties[prevIndex]);
  };

  const scrollToProperties = () => {
    const section = document.getElementById("all-properties");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollGridToStart = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="scroll-mt-24 py-14 lg:py-20 min-h-screen flex flex-col justify-center" style={{ background: "#F9F6F0" }}>
      <div className="max-w-screen-2xl w-full mx-auto px-6 xl:px-12 flex-grow flex flex-col justify-center">
        
        {/* Split Screen Interactive Map & Property Details */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center lg:items-center">
          
          {/* Left Side: Stylized Watercolor Map with Interactive Pins */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[480px] lg:min-h-[640px]">
            {/* Subtle luxury ambient texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.22] pointer-events-none rounded-2xl" 
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/topography.png')" }}
            />
            
            <div className="relative w-full max-w-[540px] z-10 select-none">
              {/* Watercolor Base Map Image */}
              <img 
                src={getAssetUrl("finalfinalmap.webp")} 
                alt="Sri Lanka Watercolor Map - CoHost Ceylon" 
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(2,48,32,0.12)] transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Interactive Dots / Pins Overlay */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                {portfolioProperties.map((property, index) => {
                  const isActive = activeProperty.id === property.id;
                  const isHovered = hoveredProperty?.id === property.id;

                  return (
                    <div
                      key={property.id}
                      className="absolute pointer-events-auto cursor-pointer flex flex-col items-center justify-center group"
                      style={{ 
                        top: property.top, 
                        left: property.left, 
                        transform: "translate(-50%, -50%)",
                        zIndex: isActive ? 30 : isHovered ? 25 : 15
                      }}
                      onClick={() => setActiveProperty(property)}
                      onMouseEnter={() => setHoveredProperty(property)}
                      onMouseLeave={() => setHoveredProperty(null)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${property.name}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveProperty(property);
                        }
                      }}
                    >
                      {/* Active Pulse Radar Waves */}
                      {isActive && (
                        <>
                          <div className="absolute w-8 h-8 rounded-full bg-[#023020]/25 animate-ping pointer-events-none" />
                          <div className="absolute w-12 h-12 rounded-full border border-[#023020]/30 animate-pulse pointer-events-none" />
                        </>
                      )}

                      {/* Pin Marker */}
                      <div 
                        className={`relative rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                          isActive 
                            ? "w-7 h-7 bg-[#023020] text-[#F5F5DC] border-2 border-white ring-4 ring-[#023020]/20 scale-110" 
                            : "w-4 h-4 bg-white/90 border-2 border-[#023020]/70 hover:w-6 hover:h-6 hover:bg-[#023020] hover:border-white hover:scale-110"
                        }`}
                      >
                        {isActive ? (
                          <div className="w-2 h-2 rounded-full bg-[#F5F5DC]" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#023020] group-hover:bg-[#F5F5DC] transition-colors" />
                        )}
                      </div>

                      {/* Floating Tooltip Label */}
                      <div 
                        className={`absolute bottom-full mb-2 pointer-events-none font-sans whitespace-nowrap transition-all duration-300 flex flex-col items-center ${
                          isActive 
                            ? "opacity-100 scale-100 translate-y-0" 
                            : isHovered 
                              ? "opacity-100 scale-95 translate-y-0" 
                              : "opacity-0 scale-90 translate-y-1"
                        }`}
                      >
                        <div className={`px-2.5 py-1 rounded shadow-lg border text-[10px] uppercase font-semibold tracking-wider backdrop-blur-md transition-colors ${
                          isActive 
                            ? "bg-[#023020] text-[#F5F5DC] border-[#023020]" 
                            : "bg-[#F9F6F0]/95 text-[#023020] border-[#023020]/20"
                        }`}>
                          <span className="opacity-75 mr-1 font-mono text-[9px]">{String(index + 1).padStart(2, "0")}.</span>
                          {property.name}
                        </div>
                        {/* Little caret indicator */}
                        <div className={`w-2 h-2 rotate-45 -mt-1 ${
                          isActive ? "bg-[#023020]" : "bg-[#F9F6F0]"
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Typography + Dynamic Active Property Card */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center xl:pr-4">
            
            {/* Typography Section */}
            <div className="mb-6 xl:mb-8">
              <div className="flex items-center gap-4 mb-2 lg:mb-3">
                <div className="w-8 h-px bg-[#023020]/40" />
                <span className="text-[#023020]/70 text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Curated Portfolio
                </span>
              </div>
              
              <h2 className="text-[#023020] font-serif text-3xl lg:text-4xl xl:text-5xl leading-tight mb-3">
                Properties We <em className="italic"> Represent</em>
              </h2>
              
              <p className="text-[#333]/70 text-xs xl:text-sm leading-relaxed mb-4 xl:mb-5 max-w-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Co Host Ceylon represents a handpicked portfolio of luxury villas, private estates, and
                boutique hotels across Sri Lanka. Click on any destination pin to explore our exclusive residences.
              </p>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={scrollToProperties}
                  className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#023020] text-[#023020] hover:bg-[#023020] hover:text-[#F5F5DC] transition-all duration-300 uppercase tracking-widest text-[9px] font-bold rounded-sm shadow-sm cursor-pointer"
                >
                  See Full Collection
                </button>
                <span className="text-xs text-[#023020]/60 font-medium tracking-wider">
                  <span className="font-bold text-[#023020]">{String(currentIndex + 1).padStart(2, "0")}</span> / {String(portfolioProperties.length).padStart(2, "0")} Selected
                </span>
              </div>
            </div>

            {/* Dynamic Active Property Details Card */}
            <div className="w-full flex flex-col relative rounded-lg shadow-2xl overflow-hidden border border-[#023020]/15 h-[340px] lg:h-[360px] xl:h-[400px] group bg-[#023020]">
              
              {/* Card Navigation Arrows (Previous & Next) */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 md:px-4 z-40 pointer-events-none -translate-y-1/2">
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    handlePrev(); 
                  }} 
                  aria-label="Previous Property"
                  className="w-10 h-10 rounded-full bg-white/85 hover:bg-[#023020] text-[#023020] hover:text-white border border-[#023020]/10 flex items-center justify-center transition-all duration-300 shadow-lg pointer-events-auto cursor-pointer backdrop-blur-sm transform hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    handleNext(); 
                  }} 
                  aria-label="Next Property"
                  className="w-10 h-10 rounded-full bg-white/85 hover:bg-[#023020] text-[#023020] hover:text-white border border-[#023020]/10 flex items-center justify-center transition-all duration-300 shadow-lg pointer-events-auto cursor-pointer backdrop-blur-sm transform hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Full Background Image with Smooth Crossfade */}
              <div className="absolute inset-0 w-full h-full bg-[#023020] overflow-hidden">
                {activeProperty.image ? (
                  <img 
                    key={activeProperty.id}
                    src={getAssetUrl(activeProperty.image)} 
                    alt={activeProperty.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 animate-fadeIn" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#023020]/20 flex flex-col items-center justify-center">
                    <svg className="w-10 h-10 text-white/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-sans tracking-widest text-white/50 text-[10px] uppercase">Preview</p>
                  </div>
                )}
                
                {/* Gradient Overlays for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 z-10 pointer-events-none" />
              </div>

              {/* Top Property Brand Logo (if available) */}
              {activeProperty.logo && (
                <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded border border-white/15">
                  <img 
                    key={`logo-${activeProperty.id}`}
                    src={activeProperty.logo} 
                    alt={`${activeProperty.name} Logo`} 
                    className="h-7 w-auto object-contain brightness-0 invert opacity-90 transition-opacity duration-300"
                  />
                </div>
              )}

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 w-full p-6 lg:p-7 xl:p-8 text-[#F5F5DC] flex flex-col justify-end z-20">
                <div className="mb-2">
                  
                  <h3 className="font-serif text-2xl lg:text-3xl text-white drop-shadow-md m-0">
                    {activeProperty.name}
                  </h3>
                </div>
                
                <p className="font-sans text-[#F5F5DC]/90 text-xs xl:text-sm leading-relaxed mb-4 max-w-md drop-shadow-sm line-clamp-2">
                  {activeProperty.description}
                </p>

                <div className="flex items-center gap-4 pt-1 border-t border-white/15">
                  {/* Step Inside Link */}
                  <a 
                    href={activeProperty.websiteLink !== "#" ? activeProperty.websiteLink : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans font-bold transition-all ${
                      activeProperty.websiteLink !== "#" 
                        ? "text-[#F5F5DC] hover:text-white group/btn" 
                        : "text-[#F5F5DC]/40 cursor-not-allowed"
                    }`}
                  >
                    <span className={`border-b pb-0.5 ${
                      activeProperty.websiteLink !== "#" ? "border-[#F5F5DC]/60 group-hover/btn:border-white" : "border-transparent"
                    }`}>
                      {activeProperty.websiteLink !== "#" ? "Step Inside" : "Link Coming Soon"}
                    </span>
                    {activeProperty.websiteLink !== "#" && (
                      <span className="text-xs transform group-hover/btn:translate-x-1.5 transition-transform">→</span>
                    )}
                  </a>

                  {/* Book Now Action */}
                  <button 
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("openBookingModal", { detail: { property: activeProperty.name } }));
                    }}
                    className="ml-auto inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase font-bold font-sans bg-[#F5F5DC] text-[#023020] hover:bg-white px-4 py-2 rounded-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Reserve Stay</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Grid Section: Full Property Collection */}
        <div id="all-properties" className="mt-20 lg:mt-28 scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#023020]/60 text-[10px] tracking-[0.3em] uppercase font-semibold">Explore All</p>
              <h3 className="font-serif text-2xl lg:text-3xl text-[#023020]">All Represented Properties</h3>
            </div>

            <div className="flex lg:hidden pr-2">
              <span className="text-[10px] text-[#023020]/70 uppercase tracking-[0.2em] flex items-center gap-2 animate-pulse font-bold">
                Swipe for more →
              </span>
            </div>
          </div>

          <div ref={scrollContainerRef} className="flex lg:grid lg:grid-cols-3 gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-8 lg:pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {portfolioProperties.map((property) => (
              <div 
                key={property.id} 
                onClick={() => {
                  setActiveProperty(property);
                  const portfolioTop = document.getElementById("portfolio");
                  if (portfolioTop) {
                    portfolioTop.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`min-w-[85vw] sm:min-w-[320px] lg:min-w-0 snap-center bg-white rounded-sm shadow-md overflow-hidden flex flex-col border transition-all duration-300 group cursor-pointer hover:shadow-xl ${
                  activeProperty.id === property.id ? "border-[#023020] ring-2 ring-[#023020]/15" : "border-[#023020]/10 hover:border-[#023020]/30"
                }`}
              >
                
                {/* IMAGE BOX */}
                <div className="h-56 lg:h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                  
                  {/* Base Image */}
                  {property.image ? (
                    <img 
                      src={getAssetUrl(property.image)} 
                      alt={property.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" 
                    />
                  ) : (
                    <svg className="w-8 h-8 text-[#023020]/30 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}

                  {/* Darken Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#023020]/5 group-hover:bg-black/50 transition-all duration-500 z-10" />

                  {/* Centered Logo Overlay on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                    {property.logo && (
                      <img 
                        src={property.logo} 
                        alt={`${property.name} Logo`} 
                        className="h-24 max-h-[60%] w-auto object-contain brightness-0 invert transform scale-95 group-hover:scale-100 transition-all duration-500"
                      />
                    )}
                  </div>
                </div>

                {/* Bottom Card Content Info */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  
                  <h4 className="font-serif text-xl lg:text-2xl text-[#023020] mb-3">{property.name}</h4>
                  <p className="font-sans text-[#333]/70 text-xs lg:text-sm leading-relaxed mb-6 flex-grow">{property.description}</p>
                  
                  <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-[#023020]/10">
                    {/* Explore Link */}
                    <a 
                      href={property.websiteLink !== "#" ? property.websiteLink : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans w-fit transition-colors ${
                        property.websiteLink !== "#" ? "text-[#023020] hover:text-[#D32F2F] group/bottomBtn" : "text-[#023020]/40 cursor-not-allowed"
                      }`}
                    >
                      <span className={`border-b pb-0.5 font-bold transition-colors ${
                        property.websiteLink !== "#" ? "border-[#023020]/30" : "border-transparent"
                      }`}>
                        {property.websiteLink !== "#" ? "View Property" : "Coming Soon"}
                      </span>
                      {property.websiteLink !== "#" && (
                        <span className="text-xs transform group-hover/bottomBtn:translate-x-1 transition-transform">→</span>
                      )}
                    </a>

                    {/* Book Now Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.dispatchEvent(new CustomEvent("openBookingModal", { detail: { property: property.name } }));
                      }}
                      className="flex items-center gap-2 text-[10px] lg:text-[11px] tracking-[0.2em] uppercase font-bold font-sans w-fit transition-all duration-300 bg-[#023020] text-white hover:bg-[#023020]/85 px-4 py-2.5 rounded-sm shadow-sm group/bookBtn cursor-pointer"
                    >
                      <span>Book Now</span>
                      <span className="text-xs transform group-hover/bookBtn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}

            <div onClick={scrollGridToStart} className="min-w-[85vw] sm:min-w-[320px] lg:hidden snap-center bg-white/50 rounded-sm flex flex-col items-center justify-center border border-[#023020]/10 group cursor-pointer hover:bg-white transition-colors duration-300 py-20">
              <div className="w-14 h-14 rounded-full border border-[#023020]/30 flex items-center justify-center text-[#023020] group-hover:-rotate-180 transition-transform duration-700 mb-4 bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#023020]">Back to Start</span>
            </div>
          </div>
        </div>

        {/* Integrated Global Booking Platforms Section */}
        <div className="mt-24 pt-12 border-t border-[#023020]/10 text-center w-full max-w-4xl mx-auto">
          <p className="text-[#023020]/50 text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Global Distribution
          </p>
          
          <h3 className="text-[#023020] text-xl md:text-2xl font-serif mb-8 font-normal">
            Integrated with Leading Global Platforms
          </h3>

          <div className="flex items-center justify-center gap-12 md:gap-20">
            {globalChannels.map((logo) => (
              <div key={logo.name} className="h-8 md:h-10 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}