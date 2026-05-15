import { Navigation } from "../components/Navigation"; 
import { Services } from "../components/Services";
import { PartnershipProcess } from "../components/PartnershipProcess"; 
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer"; 
import { Preloader } from "../components/Preloader";

export function PartnershipServicesPage() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
      <Preloader />
      <Navigation /> 
      
      {/* 🚀 වෙනස් කරපු Hero Section එක (h-screen දාලා Full Screen කළා) */}
      <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80')" 
          }}
        />
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-[#023020]/60 mix-blend-multiply" />
        
        {/* Title Content */}
        <div className="relative z-10 text-center px-6 mt-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#F5F5DC]/40" />
            <span className="text-[#F5F5DC]/80 text-[10px] tracking-[0.4em] uppercase font-bold">
              Work With Us
            </span>
            <div className="w-12 h-px bg-[#F5F5DC]/40" />
          </div>
          <h1 
            className="text-[#F5F5DC] text-4xl md:text-5xl lg:text-7xl drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Partnership Services
          </h1>
        </div>
      </div>
      
      {/* 1. Services 4 Grid එක */}
      <div className="pt-12">
        <Services />
      </div>
      
      {/* 2. Process එක සහ 'Other' Cards ටික! */}
      <PartnershipProcess />
      
      {/* 3. Contact section එක */}
      <Contact />
      
      {/* 4. Footer එක */}
      <Footer />
    </div>
  );
}