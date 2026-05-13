import { useState } from "react";
import { Search, BarChart2, Map, Rocket, RefreshCw, Camera, Building2, Sparkles, Compass } from "lucide-react";
import { Link } from "react-router-dom";

// ==========================================
// 1. DATA FOR PARTNERSHIP PROCESS
// ==========================================
const steps = [
  {
    number: "01",
    icon: Search,
    title: "Property Evaluation",
    subtitle: "Initial Assessment",
    description: "We begin with a comprehensive evaluation of your property—its location, physical condition, existing performance data, competitive landscape, and owner aspirations. This stage defines the commercial opportunity.",
    deliverable: "Property Evaluation Report",
    duration: "Week 1–2",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Performance Audit",
    subtitle: "Deep Diagnostic",
    description: "A rigorous audit of your current operations: pricing strategy, channel mix, OTA performance, cost structure, team capability, and guest feedback. We identify gaps and quantify the revenue opportunity.",
    deliverable: "Performance Audit Document",
    duration: "Week 2–4",
  },
  {
    number: "03",
    icon: Map,
    title: "Strategic Roadmap",
    subtitle: "Bespoke Growth Plan",
    description: "We present a tailored Strategic Roadmap—a 12-month growth plan covering pricing, distribution, marketing, operational improvements, and financial targets. This becomes the foundation of our partnership.",
    deliverable: "12-Month Strategic Roadmap",
    duration: "Week 4–6",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementation",
    subtitle: "Activation & Execution",
    description: "With your approval, we execute the roadmap: activating channels, implementing pricing models, launching marketing campaigns, conducting staff training, and establishing reporting frameworks.",
    deliverable: "Full Operational Activation",
    duration: "Month 2–3",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Ongoing Optimisation",
    subtitle: "Continuous Improvement",
    description: "Hospitality is never static. We continuously monitor performance, adjust strategies in response to market conditions, review financials monthly, and meet quarterly to review the partnership's direction.",
    deliverable: "Monthly Reports & Quarterly Reviews",
    duration: "Ongoing",
  },
];

// ==========================================
// 2. DATA FOR 'OTHER' (INSIGHTS) SECTION
// ==========================================
const REAL_ESTATE_IMG = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1080&q=80";
const INSIGHTS_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80";

const insightItems = [
  { 
    title: "Real Estate & Development", 
    icon: Building2, 
    link: "#real-estate",
    image: REAL_ESTATE_IMG,
    tagline: "Guiding your next luxury investment.",
    bullets: ["Property sourcing", "Architectural consulting", "Project management"]
  },
  { 
    title: "Insights", 
    icon: Compass, 
    link: "#", 
    image: INSIGHTS_IMG,
    tagline: "Curated local experiences and guided excursions.",
    bullets: ["Personalized itineraries", "Cultural & heritage tours", "Wildlife & nature trails"]
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export function PartnershipProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];
  const StepIcon = active.icon;

  return (
    <>
      {/* -------------------------------------- */}
      {/* PARTNERSHIP PROCESS SECTION */}
      {/* -------------------------------------- */}
      

      {/* -------------------------------------- */}
      {/* OTHER (FORMERLY INSIGHTS) SECTION */}
      {/* -------------------------------------- */}
      <section id="insights" className="py-28 lg:py-36" style={{ background: "#F5F5DC" }}>
        <div className="max-w-screen-xl mx-auto px-6">
          
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#023020]/40" />
                <span className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Additional Services
                </span>
              </div>
              <h2 className="text-[#023020]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, lineHeight: 1.25 }}>
                Other
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#333]/60" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.875rem", lineHeight: 1.9 }}>
                Beyond property management, discover our curated insights, exclusive guest experiences, and tailored real estate solutions designed for Sri Lanka's luxury hospitality sector.
              </p>
            </div>
          </div>

          {/* 🚀 REDESIGNED: Grid of 2 Premium Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {insightItems.map((item) => {
              const Icon = item.icon;
              
              return (
                <div key={item.title} className="group relative overflow-hidden rounded-sm cursor-pointer h-[450px] lg:h-[520px] shadow-lg border border-[#023020]/10">
                  {/* Background Image */}
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Dark Green Gradient + Glass Effect on Hover */}
                  <div className="absolute inset-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:backdrop-blur-sm z-10 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(2,48,32,0.98) 0%, rgba(2,48,32,0.65) 45%, transparent 100%)" }} />

                  {/* Content Box */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-20 flex flex-col justify-end transition-all duration-500">
                    
                    {/* Always Visible: Icon & Title */}
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon size={24} className="text-[#F5F5DC]/80" strokeWidth={1.5} />
                        <div className="h-px bg-[#F5F5DC]/30 flex-grow" />
                      </div>
                      <h3 className="text-[#F5F5DC] drop-shadow-md flex items-start" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", fontWeight: 400, lineHeight: 1.3, minHeight: "4rem" }}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Hidden by Default, Revealed on Hover: Bullets & Tagline */}
                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <ul className="mt-2 space-y-3 mb-6">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#F5F5DC]/90" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", lineHeight: 1.5 }}>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5DC]/60 flex-shrink-0 mt-2" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        
                        <p className="text-[#F5F5DC]/60 italic border-t border-[#F5F5DC]/20 pt-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem" }}>
                          {item.tagline}
                        </p>

                        {/* Link / Button */}
                        {item.link.startsWith("/") ? (
                          <Link to={item.link} className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#F5F5DC] hover:text-white transition-colors mt-6 group/btn">
                            <span className="border-b border-[#F5F5DC]/50 pb-0.5 group-hover/btn:border-white transition-colors drop-shadow-sm font-semibold">Learn More</span>
                            <span className="text-sm transform group-hover/btn:translate-x-1 transition-transform drop-shadow-sm">→</span>
                          </Link>
                        ) : (
                          <a href={item.link || "#"} className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#F5F5DC] hover:text-white transition-colors mt-6 group/btn">
                            <span className="border-b border-[#F5F5DC]/50 pb-0.5 group-hover/btn:border-white transition-colors drop-shadow-sm font-semibold">Learn More</span>
                            <span className="text-sm transform group-hover/btn:translate-x-1 transition-transform drop-shadow-sm">→</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>
    </>
  );
}