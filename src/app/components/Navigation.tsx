"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Real Estate & Development", href: "#real-estate" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experiences", href: "#experiences" },
  { label: "Other", href: "#insights" },
  { label: "Partnership Process", href: "#partnership" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(2, 48, 32, 0.97)"
            : "rgba(2, 48, 32, 0.15)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid rgba(245,245,220,0.12)" : "none",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between gap-8 xl:gap-12">
          
          
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center whitespace-nowrap transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="./logo.png" 
              alt="Co-Host Ceylon Logo" 
              className="h-16 lg:h-20 xl:h-24 w-auto object-contain" 
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 flex-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors duration-200 text-[11px] 2xl:text-xs tracking-[0.1em] uppercase whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden lg:block px-5 py-2 border border-[#F5F5DC]/60 text-[#F5F5DC] text-xs tracking-[0.15em] uppercase hover:bg-[#F5F5DC] hover:text-[#023020] transition-all duration-300 whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </button>
            <button
              className="xl:hidden text-[#F5F5DC] z-[60]" 
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(2, 48, 32, 0.98)", backdropFilter: "blur(20px)" }}
      >
        {/* 💡 වෙනස් කරපු තැන: pt-32 දීලා උඩින් ඉඩ තිබ්බා, pb-12 දීලා යටින් ඉඩ තිබ්බා. justify-center අයින් කළා */}
        <div className="flex flex-col min-h-full px-8 pt-32 pb-12">
          
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-[#F5F5DC]/10 pb-4">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-[#F5F5DC] text-lg tracking-[0.08em] w-full text-left"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 💡 වෙනස් කරපු තැන: mt-auto දැම්මා, එතකොට බොත්තම ඉබේම පල්ලෙහාට තල්ලු වෙනවා */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-auto pt-10 px-8 py-4 bg-[#F5F5DC] text-[#023020] text-sm tracking-[0.15em] uppercase whitespace-nowrap w-full"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Schedule Consultation
          </button>
          
        </div>
      </div>
    </>
  );
}