import React from 'react';
import { Palmtree, Home, Users, MapPin, Award } from 'lucide-react';

const HERO_IMAGE = `${import.meta.env.BASE_URL}webpageImg/hero.webp`;

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* 🚀 🚀 FIXED FOR ZOOM: h-screen සම්පූර්ණයෙන්ම අයින් කරලා min-h-screen විතරක් දැම්මා මචං.
       pt-32 සහ pb-16 දාලා තියෙන නිසා Zoom කරද්දී එක පිට එක තෙරපෙන්නේ නැතුව ලස්සනට පල්ලෙහාට දිග ඇරෙනවා */
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-0 overflow-hidden"
      style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🚀 Main Content Wrapper - py-12 දාලා ස්පේස් එක ආරක්ෂා කළා */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center my-auto py-12">
        
        {/* Heading */}
        <h1
          className="text-[#F5F5DC] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Unlocking the Full Potential of <br /> Exceptional Properties
        </h1>

        {/* Decorative Line with Icon */}
        <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-md mx-auto opacity-90">
          <div className="h-[1px] flex-1 bg-[#C8A97E]"></div>
          <Palmtree size={24} strokeWidth={1.5} className="text-[#C8A97E]" />
          <div className="h-[1px] flex-1 bg-[#C8A97E]"></div>
        </div>

        {/* Subheading */}
        <p
          className="text-[#F5F5DC]/90 max-w-3xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Reservations, marketing, travel trade partnerships, and revenue growth for luxury villas,
          private estates, and boutique hotels across Sri Lanka.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#023020] text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            PARTNER WITH US
          </button>
          <button
            onClick={() => handleScroll('#portfolio')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      {/* 🚀 Statistics Row (Bottom Bar) - FIXED FOR ZOOM: absolute bottom-0 අයින් කරලා flex flow එකට ගත්තා */}
      <div className="relative w-full z-30 bg-[#0A1F18] py-8 border-t border-[#C8A97E]/20 mt-auto flex-shrink-0">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          
          {/* Stat 1 */}
          <div className="flex items-center justify-center sm:justify-start gap-5">
            <Home size={44} strokeWidth={1} className="text-[#C8A97E] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-3xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>10+</h4>
              <p className="text-[#F5F5DC]/80 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mt-1 leading-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties<br/>Represented</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center sm:justify-start gap-5">
            <Users size={44} strokeWidth={1} className="text-[#C8A97E] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-3xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>50+</h4>
              <p className="text-[#F5F5DC]/80 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mt-1 leading-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>Travel Trade<br/>Partners</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center sm:justify-start gap-5">
            <MapPin size={44} strokeWidth={1} className="text-[#C8A97E] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-lg uppercase tracking-widest font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Islandwide</h4>
              <p className="text-[#F5F5DC]/80 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mt-1 leading-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>Portfolio</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center sm:justify-start gap-5">
            <Award size={44} strokeWidth={1} className="text-[#C8A97E] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-3xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>10+</h4>
              <p className="text-[#F5F5DC]/80 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mt-1 leading-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>Years Hospitality<br/>Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}