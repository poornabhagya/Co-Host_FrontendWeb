"use client";
import { useState, useRef } from "react";

const portfolioProperties = [
  { id: 1, name: "Luna Laguna", top: "39.25%", left: "27.5%", category: "Private Villa", description: "A stunning coastal escape offering absolute privacy and tranquil lagoon views.", image: "./propertiesCardImgs/lunaLaguna.jpg" },
  { id: 2, name: "Lakeside Retreat Malsiripura", top: "52.75%", left: "43%", category: "Boutique Hotel", description: "Nestled by a serene lake, offering a perfect blend of nature and luxury.", image: "./propertiesCardImgs/LakesideRetreat.jpg" },
  { id: 3, name: "Margossa Residence Kandy", top: "61.5%", left: "46.75%", category: "Heritage Villa", description: "Colonial charm meets modern tropical luxury in the heart of Kandy.", image: "./propertiesCardImgs/margossaResidence.jpg" },
  { id: 4, name: "Casa Heliconia", top: "63.5%", left: "35.5%", category: "Garden Estate", description: "An exotic jungle paradise surrounded by lush tropical vegetation.", image: "./propertiesCardImgs/casaHeliconia.jpg" },
  { id: 5, name: "Villa Morawala", top: "63%", left: "27.5%", category: "Beach Villa", description: "Breathtaking ocean views and pristine beaches right at your doorstep.", image: "./propertiesCardImgs/villaMorawala.jpg" },
  { id: 6, name: "Camellia Residencies", top: "70.75%", left: "29.25%", category: "Private Villa", description: "Modern luxury living with exceptional access to local attractions.", image: "./propertiesCardImgs/camelliaResidencies.webp" },
  { id: 7, name: "SinhaGiri Mansion", top: "68.5%", left: "51%", category: "Historic Residence", description: "A majestic mansion echoing the grandeur of Sri Lanka's rich history.", image: "./propertiesCardImgs/sinhagiri.jpg" },
  { id: 8, name: "Villa Vista Haputale", top: "74.75%", left: "55.5%", category: "Mountain Lodge", description: "Perched high in the misty mountains with panoramic views of the island.", image: "./propertiesCardImgs/villaVista.jpg" },
  { id: 9, name: "Boutique 87", top: "81.25%", left: "32%", category: "Boutique Hotel", description: "A uniquely designed Bawa-inspired property offering an intimate stay.", image: "./propertiesCardImgs/Boutique87.jpg" },
  { id: 10, name: "Sihina", top: "84%", left: "34.5%", category: "Private Villa", description: "A dreamlike escape combining contemporary design with tropical ease.", image: "./propertiesCardImgs/sihina.jpg" },
  { id: 11, name: "Camellia Ranch", top: "88%", left: "38.5%", category: "Garden Estate", description: "Expansive green landscapes offering a serene and private retreat.", image: "./propertiesCardImgs/camelliaRanch.jpg" },
  { id: 12, name: "Treasure Rock", top: "86.5%", left: "62.75%", category: "Eco Luxury", description: "Immerse yourself in nature without compromising on high-end comfort.", image: "./propertiesCardImgs/treasureRock.jpg" },
  { id: 13, name: "Liv - Unawatuna", top: "91%", left: "37%", category: "Coastal Villa", description: "Vibrant beachside living in one of Sri Lanka's most iconic bays.", image: "./propertiesCardImgs/liv.jpg" },
  { id: 14, name: "Lotus & Moon", top: "92.5%", left: "40.5%", category: "Boutique Hotel", description: "A mystical and calm hideaway perfect for relaxation and rejuvenation.", image: "./propertiesCardImgs/lotus.jpeg" },
  { id: 15, name: "Heuvel Villa Kandy", top: "63%", left: "50.5%", category: "Boutique Hotel", description: "A mystical and calm hideaway perfect for relaxation and rejuvenation.", image: "./propertiesCardImgs/heuvelKandy.png" },
];

export function Portfolio() {
  const [activeProperty, setActiveProperty] = useState(portfolioProperties[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const currentIndex = portfolioProperties.findIndex(p => p.id === activeProperty.id);
    const nextIndex = (currentIndex + 1) % portfolioProperties.length;
    setActiveProperty(portfolioProperties[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = portfolioProperties.findIndex(p => p.id === activeProperty.id);
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
    <section id="portfolio" className="py-12 lg:py-16 min-h-screen flex items-center" style={{ background: "#F5F5DC" }}>
      <div className="max-w-screen-xl w-full mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch">
          
          {/* Left Side: Client's Image Map */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[450px] lg:min-h-[600px]">
            <div 
              className="absolute inset-0 opacity-[0.30] pointer-events-none" 
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/topography.png')" }}
            />
            
            <div className="relative w-full max-w-[550px] scale-110 lg:scale-125 z-10 transition-transform duration-500 origin-center">
              <img 
                src="./sriLankanMap.png" 
                alt="Sri Lanka Map" 
                className="w-full h-auto object-contain mix-blend-multiply"
              />

              <div className="absolute inset-0 w-full h-full">
                {portfolioProperties.map((property) => {
                  const isActive = activeProperty.id === property.id;
                  return (
                    <div
                      key={property.id}
                      className="absolute cursor-pointer flex flex-col items-center justify-center"
                      style={{ 
                        top: property.top, 
                        left: property.left, 
                        transform: 'translate(-50%, -100%)' 
                      }}
                      onClick={() => setActiveProperty(property)}
                    >
                      <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-300 group
                        ${isActive ? "bg-[#023020]/20 border-2 border-[#023020] scale-100 lg:scale-110" : "bg-transparent hover:bg-white/40 hover:scale-110 lg:hover:scale-125 border-2 border-transparent hover:border-[#D32F2F]/50"}
                      `}>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#023020] animate-ping" />}
                      </div>
                      <span className={`absolute top-full mt-1 font-sans font-semibold text-[9px] lg:text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 bg-[#F5F5DC]/90 px-2 py-1 rounded shadow-sm border border-[#023020]/10
                          ${isActive ? "text-[#023020] opacity-100 z-20" : "text-[#333] opacity-0 hover:opacity-100"}`}
                      >
                        {property.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Text Area + Property Card */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#023020]/30" />
                <span className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Our Portfolio
                </span>
              </div>
              <h2 className="text-[#023020] font-serif text-4xl lg:text-5xl leading-tight mb-4">
                Properties We are <br className="hidden lg:block"/>
                <em className="italic">Proud to Partner With</em>
              </h2>
              <p className="text-[#333]/60 text-sm leading-relaxed mb-6 max-w-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                A carefully curated collection of Sri Lanka's finest independent villas and boutique hotels. Each property in our portfolio is selected for its architectural character, location, and guest experience potential.
              </p>
              <button 
                onClick={scrollToProperties}
                className="inline-flex items-center gap-3 px-6 py-3 border border-[#023020] text-[#023020] hover:bg-[#023020] hover:text-[#F5F5DC] transition-all duration-300 uppercase tracking-widest text-[10px] font-bold rounded-sm shadow-sm"
              >
                Collection
              </button>
            </div>

            
            {/* Interactive Property Details Card (Hover Reveal) */}
            <div className="w-full flex flex-col relative rounded-md shadow-2xl overflow-hidden border border-[#023020]/10 h-[400px] lg:h-[450px] group cursor-pointer">
              
              <div className="absolute top-[50%] left-0 right-0 flex justify-between px-4 z-40 pointer-events-none -translate-y-1/2">
                <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="w-10 h-10 rounded-full bg-white/80 border border-[#023020]/10 flex items-center justify-center text-[#023020] hover:bg-[#023020] hover:text-white transition-all shadow-md pointer-events-auto">
                  ←
                </button>
                <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="w-10 h-10 rounded-full bg-white/80 border border-[#023020]/10 flex items-center justify-center text-[#023020] hover:bg-[#023020] hover:text-white transition-all shadow-md pointer-events-auto">
                  →
                </button>
              </div>

              {/* Full Background Image */}
              <div className="absolute inset-0 w-full h-full bg-gray-200 overflow-hidden">
                {activeProperty.image ? (
                  <img src={activeProperty.image} alt={activeProperty.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" />
                ) : (
                  <div className="absolute inset-0 bg-[#023020]/10 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <svg className="w-10 h-10 text-[#023020]/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="font-sans tracking-widest text-[#023020]/50 text-[10px] uppercase">Preview</p>
                  </div>
                )}
                
                {/* Darker gradient that becomes even darker on hover to protect white text */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none opacity-70 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Bottom Box (Transparent) */}
              <div className="absolute bottom-0 w-full bg-transparent p-6 lg:p-8 text-[#F5F5DC] flex flex-col justify-end z-20 transition-all duration-500">
                
                {/* Always Visible Section (Name & Category) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="inline-block text-[#F5F5DC] text-[9px] tracking-[0.2em] uppercase font-sans mb-3 border border-white/40 px-2 py-1 bg-black/30 rounded-sm">
                    {activeProperty.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl lg:text-3xl text-white drop-shadow-md m-0">
                    {activeProperty.name}
                  </h3>
                </div>
                
                {/* Hidden by Default, Revealed on Hover Section (Description & Button) */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="font-sans text-[#F5F5DC]/90 text-xs leading-relaxed mb-4 mt-3 max-w-sm line-clamp-2 drop-shadow-sm">
                      {activeProperty.description}
                    </p>
                    
                    <button className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans hover:text-white transition-colors w-fit group/btn">
                      <span className="border-b border-[#F5F5DC]/50 pb-1 group-hover/btn:border-white transition-colors drop-shadow-sm">Step Inside</span>
                      <span className="text-sm transform group-hover/btn:translate-x-2 transition-transform drop-shadow-sm">→</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* 🚀 UPGRADED: Bottom Grid Section - 3 Cards per row */}
        <div id="all-properties" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-6 lg:mb-10">
            <h3 className="text-[#023020] font-serif text-2xl lg:text-3xl">Collection</h3>
            <div className="h-px bg-[#023020]/20 flex-grow max-w-xs" />
          </div>

          <div className="flex justify-end lg:hidden mb-4 pr-2">
            <span className="text-[10px] text-[#023020]/60 uppercase tracking-[0.2em] flex items-center gap-2 animate-pulse font-bold">
              Swipe for more
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </div>

          {/* 🚀 Changed: lg:grid-cols-3 (always 3 columns on large screens), increased gaps (gap-8 lg:gap-10) */}
          <div ref={scrollContainerRef} className="flex lg:grid lg:grid-cols-3 gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-8 lg:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {portfolioProperties.map((property) => (
              <div key={property.id} className="min-w-[85vw] sm:min-w-[320px] lg:min-w-0 snap-center bg-white rounded-sm shadow-md overflow-hidden flex flex-col border border-[#023020]/10 group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                
                {/* 🚀 Changed: Increased height to lg:h-64 so images look proportional on larger cards */}
                <div className="h-56 lg:h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#023020]/5 group-hover:scale-105 transition-transform duration-700 z-10" />
                  {property.image ? (
                    <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" />
                  ) : (
                    <svg className="w-8 h-8 text-[#023020]/30 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  )}
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <span className="text-[#023020]/60 text-[9px] tracking-[0.2em] uppercase font-sans mb-2">{property.category}</span>
                  <h4 className="font-serif text-xl lg:text-2xl text-[#023020] mb-3">{property.name}</h4>
                  <p className="font-sans text-[#333]/70 text-xs lg:text-sm leading-relaxed mb-6 flex-grow">{property.description}</p>
                  <button className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans text-[#023020] hover:text-[#D32F2F] transition-colors w-fit">
                    <span className="border-b border-[#023020]/30 pb-0.5 text-[#023020] font-bold">View Details</span>
                    <span className="text-xs transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}

            <div onClick={scrollGridToStart} className="min-w-[85vw] sm:min-w-[320px] lg:hidden snap-center bg-white/50 rounded-sm flex flex-col items-center justify-center border border-[#023020]/10 group cursor-pointer hover:bg-white transition-colors duration-300 py-20">
              <div className="w-14 h-14 rounded-full border border-[#023020]/30 flex items-center justify-center text-[#023020] group-hover:-rotate-180 transition-transform duration-700 mb-4 bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#023020]">Back to Start</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}