import { useState, useEffect } from "react";
import { X, Calendar as CalendarIcon, Check } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";

const properties = [
  "Luna Laguna - Kalpitiya", "Lakeside Retreat - Malsiripura", "Margossa Residence - Kandy", 
  "Casa Heliconia - Kaleliya", "Villa Morawala - Negombo", "Camellia Residencies - Colombo", "SinhaGiri Mansion - Nuwara Eliya", 
  "Villa Vista - Haputale", "Boutique 87 - Bentota", "Sihina - Kosgoda", "Camellia Ranch - Baddegama", 
  "Treasure Rock - Kirinda", "Liv - Unawatuna", "Lotus & Moon - Habaraduwa", "Heuvel Villa - Kandy"
];

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", property: "", 
    guests: "", rooms: "" // 👈 'promo' එක මෙතනින් අයින් කළා
  });
  
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      setIsSuccess(false);
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

    setIsSending(true);

    const templateParams = {
      full_name: form.name,
      email_address: form.email,
      phone_number: form.phone,
      property_name: form.property,
      check_in_date: checkInDate.toLocaleDateString(),
      check_out_date: checkOutDate.toLocaleDateString(),
      guests_count: form.guests,
      rooms_count: form.rooms || "1",
      promo_code: "N/A", // 👈 EmailJS එක බිඳෙන්නේ නැති වෙන්න මෙතනට කෙලින්ම "N/A" දුන්නා මචං
    };

    emailjs.send(
      'service_5mkcbc1', 
      'template_nyv954c', 
      templateParams,
      'TEZ0W1KnsoiILH1I_' 
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setIsSuccess(true);
       
       setForm({ name: "", email: "", phone: "", property: "", guests: "", rooms: "" });
       setCheckInDate(null);
       setCheckOutDate(null);
    })
    .catch((err) => {
       console.log('FAILED...', err);
       alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      setIsSending(false);
    });
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
          {/* --- SUCCESS UI SECTION --- */}
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#023020] rounded-full flex items-center justify-center shadow-xl">
                <Check size={40} className="text-[#F5F5DC]" />
              </div>
              <div className="text-center">
                <h3 className="text-[#023020] text-3xl font-serif mb-3">Request Received</h3>
                <p className="text-[#023020]/70 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for choosing <span className="font-bold text-[#023020]">Co Host Ceylon</span>. 
                  We have received your request and a confirmation has been sent to your email. 
                  Our team will contact you shortly.
                </p>
              </div>
              <button 
                onClick={() => { setIsOpen(false); setIsSuccess(false); }}
                className="mt-4 px-10 py-3 border border-[#023020] text-[#023020] uppercase tracking-widest text-[10px] font-bold hover:bg-[#023020] hover:text-[#F5F5DC] transition-all duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <>
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

                <div className="grid grid-cols-2 gap-6 relative z-50">
                  <div>
                    <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Check-in *</label>
                    <div className="relative cursor-pointer w-full">
                      <DatePicker
                        portalId="root"
                        wrapperClassName="w-full"
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
                        portalId="root"
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

                {/* 🔴 UPDATED: grid-cols-3 එක grid-cols-2 කරලා Promo Code ඉන්පුට් එක සම්පූර්ණයෙන්ම අයින් කළා */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Guests *</label>
                    <input required type="number" min="1" name="guests" value={form.guests} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-[#023020]/70 text-[10px] uppercase tracking-widest mb-2 font-sans">Rooms</label>
                    <input type="number" min="1" name="rooms" value={form.rooms} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] py-2 outline-none text-sm text-[#023020] font-sans transition-colors" placeholder="1" />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full py-4 bg-[#023020] text-[#F5F5DC] uppercase tracking-widest text-xs font-bold hover:bg-[#023020]/90 transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSending ? "Sending Request..." : "Request Booking"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}