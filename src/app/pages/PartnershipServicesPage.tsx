import { Navigation } from "../components/Navigation"; 
import { Services } from "../components/Services";
import { PartnershipProcess } from "../components/PartnershipProcess"; // 🚀 අලුතෙන් හදපු Component එක Import කළා
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer"; // 🚀 අලුත් ෆයිල් එක Import කළා
import { BookingModal } from "../components/BookingModal";

export function PartnershipServicesPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
      <Navigation /> 
      
      {/* 1. උඩින්ම Services 4 Grid එක පෙන්නනවා */}
      <Services />
      
      {/* 2. 🚀 මෙන්න අපි අලුතෙන් හදපු පියවර 5ක Process එක සහ 'Other' Cards ටික! */}
      <PartnershipProcess />
      
      {/* 3. යටින්ම Contact section එක පෙන්නනවා */}
      <Contact />
      <BookingModal />
      <Footer/>
    </div>
  );
}