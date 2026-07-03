"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Send, Check, X, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  from_name: string;
  reply_to: string;
  phone_number: string;
  property_type: string;
  location: string;
  message: string;
};

const initialForm: FormData = {
  from_name: "",
  reply_to: "",
  phone_number: "",
  property_type: "",
  location: "",
  message: "",
};

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openContactModal", handleOpen);
    
    return () => window.removeEventListener("openContactModal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const serviceID = "service_wn87x5p"; 
    const templateID = "template_cyz7hdj"; 
    const publicKey = "XQtQqbXWlJqLeM7ys"; 

    const templateParams = {
      name: form.from_name,
      email: form.reply_to,
      phone: form.phone_number,
      property_type: form.property_type,
      location: form.location,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          setLoading(false);
          setSubmitted(true); 
          setForm(initialForm);
        },
        (error) => {
          setLoading(false);
          alert("Error sending email. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      onClick={() => { setIsOpen(false); setSubmitted(false); }}
    >
      
      {/* Main Modal Card Wrapper */}
      <div 
        className="relative w-full max-w-5xl bg-[#023020] rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/*  Close Button: මොබයිල් වලදී සුදු පාට වෙලා, ලොකු ස්ක්‍රීන් වලදී (lg:) තද කොළ පාට වෙනවා */}
        <button 
          onClick={() => { setIsOpen(false); setSubmitted(false); }}
          className="absolute top-4 right-4 text-white hover:scale-110 lg:text-[#023020]/60 lg:hover:text-[#023020] transition-all duration-300 z-50 p-2"
        >
          <X size={26} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          
          {/*  Form Side (Ivory Side): මොබයිල් වලදී order-1 දාලා උඩටම ගත්තා මචං */}
          <div className="lg:col-span-3 p-8 lg:p-12 order-1 lg:order-2" style={{ background: "#F3EEE7" }}>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 bg-[#023020] rounded-full flex items-center justify-center shadow-xl mb-6">
                  <Check size={40} className="text-[#F5F5DC]" />
                </div>
                <h3 className="text-[#023020] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 400 }}>Message Received</h3>
                <p className="text-[#023020]/70 max-w-xs mx-auto mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  Thank you for reaching out. A Co-Host Ceylon strategist has been notified and will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-3 border border-[#023020] text-[#023020] uppercase tracking-widest text-[10px] font-bold hover:bg-[#023020] hover:text-[#F5F5DC] transition-all duration-300 rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 pr-6">
                  <h2 className="text-[#023020] mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 400 }}>Get in Touch With Us</h2>
                  <p className="text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Schedule a property consultation</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Full Name *</label>
                      <input type="text" name="from_name" required value={form.from_name} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Email Address *</label>
                      <input type="email" name="reply_to" required value={form.reply_to} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Phone Number</label>
                      <input type="tel" name="phone_number" value={form.phone_number} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="+94 ..." />
                    </div>
                    <div>
                      <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Property Type</label>
                      <select name="property_type" value={form.property_type} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 cursor-pointer text-[#023020]/80">
                        <option value="">Select type...</option>
                        <option value="luxury-villa">Luxury Villa</option>
                        <option value="boutique-hotel">Boutique Hotel</option>
                        <option value="estate">Heritage Estate</option>
                        <option value="development">Development Project</option>
                        <option value="investment">Investment Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Property Location</label>
                    <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="e.g. Galle, Mirissa, Ella..." />
                  </div>

                  <div>
                    <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Tell Us About Your Property *</label>
                    <textarea name="message" required rows={3} value={form.message} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 resize-none placeholder:text-[#023020]/30" placeholder="Share details about your property, current challenges, and your goals..." />
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={loading} className="group relative flex items-center gap-3 px-8 py-3.5 bg-[#023020] text-[#F5F5DC] text-xs tracking-[0.2em] uppercase hover:bg-[#023020]/90 transition-all duration-300 disabled:opacity-60 overflow-hidden rounded-sm shadow-md">
                      {loading ? (
                        <><span className="w-3 h-3 border-2 border-[#F5F5DC]/30 border-t-[#F5F5DC] rounded-full animate-spin" /> Sending...</>
                      ) : (
                        <>Schedule Consultation <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" /></>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/*  Contact Info Side (Dark Green Side): මොබයිල් වලදී order-2 දාලා ෆෝම් එකට යටට තල්ලු කලා */}
          <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#F5F5DC]/10 bg-black/20 order-2 lg:order-1">
            <div>
              <h3 className="text-[#F5F5DC] mb-6 lg:mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 400 }}>
                Our Office
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#C8A97E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[#F5F5DC]/80 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>57, Araliya Mawatha,</p>
                    <p className="text-[#F5F5DC]/50 text-xs mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Primrose Garden, Kandy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-[#C8A97E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <a href="mailto:hello@cohostceylon.com" className="text-[#F5F5DC]/80 text-sm hover:text-[#C8A97E] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>hello@cohostceylon.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-[#C8A97E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <a href="tel:+94777772616" className="text-[#F5F5DC]/80 text-sm hover:text-[#C8A97E] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>+94 777 772 616</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 lg:my-8 h-[1px] bg-[#F5F5DC]/10" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-[#C8A97E]" />
                <p className="text-[#F5F5DC]/40 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Response Time</p>
              </div>
              <p className="text-[#F5F5DC]/70 text-sm" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>Within 24 hours on all business days</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}