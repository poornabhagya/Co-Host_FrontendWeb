"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom"; 

const navItems = [
  { label: "Home", href: "/" },
  { label: "Partnership Services", href: "/partnership-services" },
  { label: "Collection", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Experiences", href: "/#insights" },
];

export function Navigation() {
  const [navState, setNavState] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      let currentState = "hero";

      if (window.scrollY > 60) {
        currentState = "scrolled";
      }

      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          currentState = "video";
        }
      }

      setNavState(currentState);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "unset";  
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
      return;
    }

    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      navigate(path);
      setTimeout(() => {
        const el = document.querySelector("#" + hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }

    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: 
            navState === "scrolled" ? "rgba(2, 48, 32, 0.97)" : 
            navState === "hero" ? "rgba(2, 48, 32, 0.15)" :     
            "rgba(0, 0, 0, 0)",                                 
          backdropFilter: 
            navState === "video" ? "none" : "blur(12px)",       
          borderBottom: 
            navState === "scrolled" ? "1px solid rgba(245,245,220,0.12)" : 
            navState === "hero" ? "1px solid rgba(245,245,220,0.05)" : 
            "none",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
          
          {/* Left: Menu Burger Icon */}
          <div className="flex justify-start">
            <button
              className="text-[#F5F5DC] group p-2 -ml-2" 
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={32} className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center whitespace-nowrap transition-transform duration-500 hover:scale-105"
            >
              <img 
                src="./logo.png" 
                alt="Co-Host Ceylon Logo" 
                className="h-20 lg:h-28 xl:h-32 w-auto object-contain" 
              />
            </button>
          </div>

          {/* Right: Book Now Button */}
          <div className="flex justify-end">
            {/* 🚀 Changed: "#contact" වෙනුවට "/partnership-services#contact" දැම්මා */}
            <button
              onClick={() => { setMobileOpen(false); // Mobile මෙනු එක ඕපන් වෙලා තිබ්බොත් වහනවා 
                window.dispatchEvent(new CustomEvent("openBookingModal")); // 🚀 Modal එක ඕපන් කරනවා
  }}
              className="hidden md:block px-6 py-2.5 border border-[#F5F5DC]/60 text-[#F5F5DC] text-[11px] tracking-[0.15em] uppercase hover:bg-[#F5F5DC] hover:text-[#023020] transition-all duration-300 whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Book Now
            </button>
          </div>

        </div>
      </nav>

      {/* Dark Overlay Background */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Left Side Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] sm:w-[420px] z-50 bg-[#023020] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        {/* Close Button (Top Right) */}
        <div className="flex justify-end pt-6 px-6">
          <button 
            onClick={() => setMobileOpen(false)} 
            className="text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-all duration-300 group p-2"
          >
            <X size={32} className="transform transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110" />
          </button>
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center px-6 pt-6 sm:pt-10 pb-2">
          <img 
            src="./logo.png" 
            alt="Co-Host Ceylon Logo" 
            className="h-32 sm:h-40 w-auto object-contain" 
          />
        </div>

        <div className="flex flex-col justify-start px-10 pb-10 mt-10">
          
          {/* Links Section */}
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label} className="overflow-hidden py-1">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="group relative text-[#F5F5DC]/80 hover:text-[#F5F5DC] w-full text-left transition-colors duration-300"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-[#F5F5DC] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" />
                  
                  <span 
                    className="block text-[14px] sm:text-[15px] tracking-[0.15em] uppercase transform transition-transform duration-300 group-hover:translate-x-5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Us Button */}
          <div className="mt-12 w-full">
            {/* 🚀 Changed: "#contact" වෙනුවට "/partnership-services#contact" දැම්මා */}
            <button
              onClick={() => handleNavClick("/partnership-services#contact")}
              className="w-full px-8 py-5 border border-[#F5F5DC]/60 text-[#F5F5DC] text-[12px] sm:text-[13px] tracking-[0.15em] uppercase hover:bg-[#F5F5DC] hover:text-[#023020] transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}