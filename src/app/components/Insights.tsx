import React from "react";
import { Calendar, Camera, Handshake, Utensils } from "lucide-react";

//  Local AI Generated Images Path Configuration
const RESERVATIONS_IMG = `${import.meta.env.BASE_URL}beyondReservationsImgs/BR1.png`;
const MARKETING_IMG = `${import.meta.env.BASE_URL}beyondReservationsImgs/BR2.png`;
const PARTNERSHIPS_IMG = `${import.meta.env.BASE_URL}beyondReservationsImgs/BR3.png`;
const EXPERIENCES_IMG = `${import.meta.env.BASE_URL}beyondReservationsImgs/BR4.png`;

const companyLogos = [
  { name: "Property Logo 1", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%201.png` },
  { name: "Property Logo 2", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%202.png` },
  { name: "Property Logo 3", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%203.png` },
  { name: "Property Logo 4", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%204.png` },
  { name: "Property Logo 5", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%205.png` },
  { name: "Property Logo 6", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%206.png` },
  { name: "Property Logo 7", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%207.png` },
  { name: "Property Logo 8", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%208.png` },
  { name: "Property Logo 9", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2013.png` },
  { name: "Property Logo 10", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2010.png` },
  { name: "Property Logo 11", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2011.png` },
  { name: "Property Logo 12", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2012.png` },
];

const insightItems = [
  { 
    title: "Reservations & Distribution", 
    icon: Calendar, 
    image: RESERVATIONS_IMG,
    subtext: "Airbnb • Booking.com • Agoda • Expedia • Direct Bookings",
    description: "Ensuring your property is visible to the right guests across the right channels."
  },
  { 
    title: "Marketing & Brand Presence", 
    icon: Camera, 
    image: MARKETING_IMG,
    subtext: "Social Media • Photography • Videography • Advertising",
    description: "Building a compelling brand that inspires trust and drives enquiries."
  },
  { 
    title: "Travel Trade Partnerships", 
    icon: Handshake, 
    image: PARTNERSHIPS_IMG,
    subtext: "Travel Agents • Tour Operators • DMCs • International Networks",
    description: "Connecting independent properties with valuable travel industry relationships."
  },
  { 
    title: "Guest Experience & Growth", 
    icon: Utensils, 
    image: EXPERIENCES_IMG,
    subtext: "Experiences • Property Positioning • Revenue Strategy • Hospitality Consulting",
    description: "Helping properties stand out in an increasingly competitive market."
  },
];

export function Insights() {
  const scrollToProperties = () => {
    const section = document.getElementById("all-properties");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="insights"
      className="py-28 lg:py-36"
      style={{ background: "#F9F6F0" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <div className="w-16 h-[1px] bg-[#023020]/40 mb-6" />
            <h2
              className="text-[#023020]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Beyond Reservations
            </h2>
          </div>
          <div>
            <p
              className="text-[#023020]/70 lg:pt-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
               We work alongside owners and on-site teams to strengthen visibility, increase bookings, and unlock growth opportunities
            </p>
          </div>
        </div>

        {/*  Grid of 4 Premium Aligned Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {insightItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden shadow-lg h-[480px] lg:h-[540px] flex flex-col justify-end rounded-sm"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/*  Updated Green Overlay: Translucency එක අඩු කළා (පින්තූර හොඳට පේන්න) */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none transition-all duration-500 bg-black/10 group-hover:bg-black/20"
                  style={{
                    background: "linear-gradient(to top, rgba(2,48,32,0.95) 0%, rgba(2,48,32,0.6) 50%, rgba(2,48,32,0.1) 80%, transparent 100%)",
                  }}
                />

                {/*  Content Box: Flex column එකක් දාලා content කොටස් ටික සමාන උසකට බෙදුවා */}
                <div className="relative z-20 p-6 lg:p-7 flex flex-col justify-end h-full w-full text-left">
                  
                  {/* Icon Section */}
                  <div className="mb-3 flex items-center">
                    <Icon size={22} strokeWidth={1.2} className="text-[#C8A97E]" />
                  </div>

                  {/* Title Section (Fixed height for perfect alignment) */}
                  <div className="min-h-[4rem] flex items-end mb-2">
                    <h3
                      className="text-white text-left w-full"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.35rem",
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtext Section (Fixed height so bullet items match horizontally) */}
                  <div className="min-h-[3.2rem] flex items-start mb-4">
                    <p 
                      className="text-[#C8A97E] text-[10.5px] uppercase tracking-wider font-semibold leading-relaxed text-left w-full"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.subtext}
                    </p>
                  </div>

                  {/* Description Section (Perfectly aligned at the bottom) */}
                  <div className="border-t border-white/10 pt-4 min-h-[4.5rem] flex items-start">
                    <p 
                      className="text-white/75 text-[12px] leading-relaxed text-left w-full"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}