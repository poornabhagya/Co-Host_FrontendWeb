import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VideoShowcase } from "./components/VideoShowcase";
import { Portfolio } from "./components/Portfolio";
import { Insights } from "./components/Insights";
import { Footer } from "./components/Footer"; 
import { BookingModal } from "./components/BookingModal";
import { Preloader } from "./components/Preloader";
import { Contact } from "./components/Contact";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== "#/") {
      setTimeout(() => {
        const targetId = hash.replace("#/", "#").split("#").pop();
        const element = document.getElementById(targetId || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Preloader />
      <Navigation />
      <Hero />
      <VideoShowcase />
      <About />
      <Portfolio />
      
      <Insights />
      <BookingModal />
      <Contact />
      <Footer />
    </div>
  );
}