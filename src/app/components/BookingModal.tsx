import { useState, useEffect } from "react";
import { X, Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 🚀 අලුත් කැලැන්ඩර් ස්ටයිල් එක

const properties = [
  "Luna Laguna", "Lakeside Retreat Malsiripura", "Margossa Residence Kandy", 
  "Casa Heliconia", "Villa Morawala", "Camellia Residencies", "SinhaGiri Mansion", 
  "Villa Vista Haputale", "Boutique 87", "Sihina", "Camellia Ranch", 
  "Treasure Rock", "Liv - Unawatuna", "Lotus & Moon", "Heuvel Villa Kandy"
];

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", property: "", 
    guests: "", rooms: "", promo: ""
  });
  
  // 🚀 Dates වලට වෙනම State දෙකක් හැදුවා
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      if (e.detail?.property) {
        setForm(prev => ({ ...prev, property: e.detail.property }));
      }
    };

    window.addEventListener("openBookingModal", handleOpen);
    return () => window.removeEventListener("openBookingModal", handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      alert("Please select your check-in and check-out dates.");
      return;
    }
    alert("Booking request ready to be sent! (EmailJS will be added here)");
    setIsOpen(false); 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative bg-[#F5F5DC] w-full max-w-2xl rounded-sm shadow-2xl overflow-visible animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#023020]/60 hover:text-[#023020] transition-colors p-2 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-[#023020] text-3xl font-serif mb-2">Request a Booking</h2>
            <p className="text-[#023020]/60 text-xs uppercase tracking-widest font-sans">
              Enter your details to secure your stay
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Full Name *</label>
                <input required type="text" name="name" value={form.name} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Email Address *</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="your.email@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Phone / WhatsApp *</label>
                <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="+94 77 123 4567" />
              </div>
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Property *</label>
                <select required name="property" value={form.property} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors cursor-pointer">
                  <option value="" disabled>Select a property</option>
                  {properties.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>

            {/* 🚀 --- අලුත් DATE PICKERS ටික --- */}
            <div className="grid grid-cols-2 gap-6 relative z-50">
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Check-in *</label>
                <div className="relative cursor-pointer w-full">
                  <DatePicker
                    portalId="root" // 🚀 මේකෙන් කැලැන්ඩරේ Modal එකට උඩින්ම එනවා
                    wrapperClassName="w-full" // 🚀 මේකෙන් Input එකේ සයිස් එක හැදෙනවා
                    selected={checkInDate}
                    onChange={(date: Date | null) => setCheckInDate(date)}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={new Date()}
                    placeholderText="Select Date"
                    dateFormat="MMM dd, yyyy"
                    className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors cursor-pointer"
                  />
                  <CalendarIcon size={16} className="absolute right-0 top-2.5 text-[#023020]/50 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Check-out *</label>
                <div className="relative cursor-pointer w-full">
                  <DatePicker
                    portalId="root" // 🚀 මේකත් අනිවාර්යයි
                    wrapperClassName="w-full"
                    selected={checkOutDate}
                    onChange={(date: Date | null) => setCheckOutDate(date)}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={checkInDate || new Date()}
                    placeholderText="Select Date"
                    dateFormat="MMM dd, yyyy"
                    className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors cursor-pointer"
                  />
                  <CalendarIcon size={16} className="absolute right-0 top-2.5 text-[#023020]/50 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Guests *</label>
                <input required type="number" min="1" name="guests" value={form.guests} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="0" />
              </div>
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Rooms</label>
                <input type="number" min="1" name="rooms" value={form.rooms} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="1" />
              </div>
              <div>
                <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Promo Code</label>
                <input type="text" name="promo" value={form.promo} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors uppercase" placeholder="CODE" />
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full py-4 bg-[#023020] text-[#F5F5DC] uppercase tracking-widest text-xs font-bold hover:bg-[#023020]/90 transition-colors shadow-md">
                Request Booking
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}