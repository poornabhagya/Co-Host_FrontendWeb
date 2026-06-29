import React from 'react';
import { Palmtree, Home, Users, MapPin, Award } from 'lucide-react';

const HERO_IMAGE = `${import.meta.env.BASE_URL}webpageImg/hero.webp`;

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-0 overflow-x-hidden"
      style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🚀 Main Content Wrapper: Flex-grow දාලා උසින් අඩු ෆෝන් වලදීත් බටන්ස් කපෙන්නේ නැති වෙන්න හැදුවා මචං */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center flex-grow py-8 lg:py-0">
        
        {/* Heading: Clamp එකෙන් screen size එකට අනුව font එක auto size වෙනවා */}
        <h1
          className="text-[#F5F5DC] mb-4 sm:mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Unlocking the Full Potential of <br /> Exceptional Properties
        </h1>

        {/* Decorative Line with Icon */}
        <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6 w-full max-w-xs sm:max-w-md mx-auto opacity-90">
          <div className="h-[1px] flex-1 bg-[#C8A97E]"></div>
          <Palmtree className="text-[#C8A97E] w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          <div className="h-[1px] flex-1 bg-[#C8A97E]"></div>
        </div>

        {/* Subheading */}
        <p
          className="text-[#F5F5DC]/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Reservations, marketing, travel trade partnerships, and revenue growth for luxury villas,
          private estates, and boutique hotels across Sri Lanka.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-[#023020] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            PARTNER WITH US
          </button>
          <button
            onClick={() => handleScroll('#portfolio')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-white text-white text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      {/* 🚀 Statistics Row (Bottom Bar): TV, Large Monitors, Laptops සහ කුඩාම මොබයිල් වලටත් හරියන්න හැදුවා */}
      <div className="relative w-full z-30 bg-[#0A1F18] py-4 sm:py-6 lg:py-8 border-t border-[#C8A97E]/20 mt-auto flex-shrink-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 md:gap-6">
          
          {/* Stat 1 */}
          <div className="flex items-center justify-start gap-2.5 sm:gap-4 pl-1 sm:pl-0">
            <Home strokeWidth={1} className="text-[#C8A97E] flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-lg sm:text-2xl lg:text-3xl font-medium leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>10+</h4>
              <p className="text-[#F5F5DC]/80 text-[8px] sm:text-[10px] lg:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-1 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties<br/>Represented</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-start gap-2.5 sm:gap-4 pl-1 sm:pl-0">
            <Users strokeWidth={1} className="text-[#C8A97E] flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-lg sm:text-2xl lg:text-3xl font-medium leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>50+</h4>
              <p className="text-[#F5F5DC]/80 text-[8px] sm:text-[10px] lg:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-1 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Travel Trade<br/>Partners</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-start gap-2.5 sm:gap-4 pl-1 sm:pl-0">
            <MapPin strokeWidth={1} className="text-[#C8A97E] flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-[11px] sm:text-base lg:text-lg uppercase tracking-wider font-medium leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>Islandwide</h4>
              <p className="text-[#F5F5DC]/80 text-[8px] sm:text-[10px] lg:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-1 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Portfolio</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-start gap-2.5 sm:gap-4 pl-1 sm:pl-0">
            <Award strokeWidth={1} className="text-[#C8A97E] flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <div className="text-left">
              <h4 className="text-[#C8A97E] text-lg sm:text-2xl lg:text-3xl font-medium leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>10+</h4>
              <p className="text-[#F5F5DC]/80 text-[8px] sm:text-[10px] lg:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-1 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Years Hospitality<br/>Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}