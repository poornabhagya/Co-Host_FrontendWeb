"use client";
import { useState } from "react";

// Client ගේ ඇත්ත Map එකේ රතු Pins තියෙන තැන් වලට හරියන්නම මම Top/Left අගයන් හැදුවා
const portfolioProperties = [
  { id: 1, name: "Luna Laguna", top: "43%", left: "17%", category: "Private Villa", description: "A stunning coastal escape offering absolute privacy and tranquil lagoon views." },
  { id: 2, name: "Lakeside Retreat Malsiripura", top: "57%", left: "41%", category: "Boutique Hotel", description: "Nestled by a serene lake, offering a perfect blend of nature and luxury." },
  { id: 3, name: "Margossa Residence Kandy", top: "65%", left: "46%", category: "Heritage Villa", description: "Colonial charm meets modern tropical luxury in the heart of Kandy." },
  { id: 4, name: "Casa Heliconia", top: "68%", left: "28%", category: "Garden Estate", description: "An exotic jungle paradise surrounded by lush tropical vegetation." },
  { id: 5, name: "Villa Morawala", top: "68%", left: "19%", category: "Beach Villa", description: "Breathtaking ocean views and pristine beaches right at your doorstep." },
  { id: 6, name: "Camellia Residencies", top: "75%", left: "21%", category: "Private Villa", description: "Modern luxury living with exceptional access to local attractions." },
  { id: 7, name: "SinhaGiri Mansion", top: "73%", left: "50%", category: "Historic Residence", description: "A majestic mansion echoing the grandeur of Sri Lanka's rich history." },
  { id: 8, name: "Villa Vista Haputale", top: "78%", left: "57%", category: "Mountain Lodge", description: "Perched high in the misty mountains with panoramic views of the island." },
  { id: 9, name: "Boutique 87", top: "83%", left: "24%", category: "Boutique Hotel", description: "A uniquely designed Bawa-inspired property offering an intimate stay." },
  { id: 10, name: "Sihina", top: "89%", left: "26%", category: "Private Villa", description: "A dreamlike escape combining contemporary design with tropical ease." },
  { id: 11, name: "Camellia Ranch", top: "89%", left: "32%", category: "Garden Estate", description: "Expansive green landscapes offering a serene and private retreat." },
  { id: 12, name: "Treasure Rock", top: "90%", left: "68%", category: "Eco Luxury", description: "Immerse yourself in nature without compromising on high-end comfort." },
  { id: 13, name: "Liv - Unawatuna", top: "93%", left: "31%", category: "Coastal Villa", description: "Vibrant beachside living in one of Sri Lanka's most iconic bays." },
  { id: 14, name: "Lotus & Moon", top: "96%", left: "36%", category: "Boutique Hotel", description: "A mystical and calm hideaway perfect for relaxation and rejuvenation." }
];

export function Portfolio() {
  const [activeProperty, setActiveProperty] = useState(portfolioProperties[0]);

  // ඉස්සරහට යන්න (Next)
  const handleNext = () => {
    const currentIndex = portfolioProperties.findIndex(p => p.id === activeProperty.id);
    const nextIndex = (currentIndex + 1) % portfolioProperties.length;
    setActiveProperty(portfolioProperties[nextIndex]);
  };

  // පස්සට යන්න (Prev)
  const handlePrev = () => {
    const currentIndex = portfolioProperties.findIndex(p => p.id === activeProperty.id);
    const prevIndex = (currentIndex - 1 + portfolioProperties.length) % portfolioProperties.length;
    setActiveProperty(portfolioProperties[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28" style={{ background: "#F5F5DC" }}>
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#023020]/30" />
            <span
              className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Portfolio
            </span>
            <div className="w-8 h-px bg-[#023020]/30" />
          </div>
        
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-[#023020] font-serif text-4xl lg:text-5xl leading-tight">
            Properties We are
            <br />
            <em className="italic">Proud to Partner With</em>
          </h2>
        </div>

        <div className="flex items-end mb-16">
            <p
              className="text-[#333]/60 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.9,
              }}
            >
              A carefully curated collection of Sri Lanka's finest independent
              villas and boutique hotels. Each property in our portfolio is
              selected for its architectural character, location, and guest
              experience potential.
            </p>
          </div>

        {/* 💡 වෙනස් කරපු තැන: Main Container එකෙන් bg එකයි shadow එකයි අයින් කරලා gap එකක් (gap-8 lg:gap-12) දැම්මා */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] gap-8 lg:gap-12 relative">
          
          {/* Left Side: Client's Image Map with Hotspots */}
{/* 💡 කොටුව (Box) පේන එක නැති කරන්න shadow, border, bg අයින් කළා */}
<div className="w-full lg:w-1/2 relative p-6 lg:p-10 flex items-center justify-center min-h-[500px]">
  
  {/* 🌟 Topographic Pattern (මේක සම්පූර්ණ section එකටම ලාවට පේන්න තියෙයි) */}
  <div 
    className="absolute inset-0 opacity-[0.30] pointer-events-none" 
    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/topography.png')" }}
  />

  <div className="relative w-full max-w-[450px] z-10">
    <img 
      src="./client-map-transparent.png" 
      alt="Sri Lanka Map" 
      className="w-full h-auto object-contain mix-blend-multiply"
    />

    {/* Invisible Clickable Hotspots */}
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
            {/* Interactive Target Area */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group
              ${isActive ? "bg-[#023020]/20 border-2 border-[#023020] scale-110" : "bg-transparent hover:bg-white/40 hover:scale-125 border-2 border-transparent hover:border-[#D32F2F]/50"}
            `}>
              {isActive && <div className="w-2 h-2 rounded-full bg-[#023020] animate-ping" />}
            </div>

            {/* Property Name */}
            <span className={`absolute top-full mt-1 font-sans font-semibold text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 bg-[#F5F5DC]/90 px-2 py-1 rounded shadow-sm border border-[#023020]/10
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

          {/* Right Side: Property Details Card */}
          {/* 💡 මෙතනටත් අලුතින් rounded-sm, shadow-lg, border එකතු කළා */}
          <div className="w-full lg:w-1/2 flex flex-col bg-white relative rounded-sm shadow-lg overflow-hidden border border-[#023020]/10">
            
            {/* Navigation Arrows */}
            <div className="absolute top-[50%] left-0 right-0 flex justify-between px-4 z-30 pointer-events-none -translate-y-1/2 lg:translate-y-0 lg:top-1/4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/80 border border-[#023020]/10 flex items-center justify-center text-[#023020] hover:bg-[#023020] hover:text-white transition-all shadow-md pointer-events-auto"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/80 border border-[#023020]/10 flex items-center justify-center text-[#023020] hover:bg-[#023020] hover:text-white transition-all shadow-md pointer-events-auto"
              >
                →
              </button>
            </div>

            <div className="h-[300px] lg:h-[50%] w-full bg-gray-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#023020]/10 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <svg className="w-12 h-12 text-[#023020]/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="font-sans tracking-widest text-[#023020]/50 text-xs uppercase">Property Image Preview</p>
              </div>
            </div>

            <div className="h-auto lg:h-[50%] bg-[#023020] p-10 lg:p-14 text-[#F5F5DC] flex flex-col justify-center relative overflow-hidden">
              <span className="absolute -bottom-4 right-4 text-white/5 font-serif text-[120px] leading-none pointer-events-none select-none">
                {String(activeProperty.id).padStart(2, "0")}
              </span>

              <span className="text-[#F5F5DC]/50 text-[10px] tracking-[0.2em] uppercase font-sans mb-4 border border-[#F5F5DC]/20 px-3 py-1 w-fit">
                {activeProperty.category}
              </span>
              
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 text-[#F5F5DC]">
                {activeProperty.name}
              </h3>
              
              <p className="font-sans text-[#F5F5DC]/80 text-sm leading-relaxed mb-10 max-w-md">
                {activeProperty.description}
              </p>

              <button className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans hover:text-white transition-colors w-fit group">
                <span className="border-b border-[#F5F5DC]/30 pb-1 group-hover:border-white transition-colors">Step Inside</span>
                <span className="text-lg transform group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}