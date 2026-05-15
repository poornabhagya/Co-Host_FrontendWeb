import { useState, useRef } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle, Check } from "lucide-react";
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
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    // 🚀 ඔයාගේ අලුත් EmailJS Account එකේ IDs මෙතනට දාන්න
    const serviceID = "service_wn87x5p"; 
    const templateID = "template_cyz7hdj"; 
    const publicKey = "XQtQqbXWlJqLeM7ys"; 

    // Template එකේ variables වලට හරියටම මැච් වෙන්න Params හදාගමු
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
          setSubmitted(true); // 🚀 මේකෙන් අර luxury success screen එක පෙන්වනවා
          setForm(initialForm);
        },
        (error) => {
          setLoading(false);
          alert("Error sending email. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden bg-[#023020]">
      <div className="absolute inset-0 opacity-90" style={{ background: "rgba(2,48,32,0.88)" }} />
      
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#F5F5DC]/30" />
            <span className="text-[#F5F5DC]/50 text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Get in Touch
            </span>
            <div className="w-8 h-px bg-[#F5F5DC]/30" />
          </div>
          <h2 className="text-[#F5F5DC] max-w-2xl mx-auto mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.2 }}>
            Get in Touch With <br /><em className="italic">Us</em>
          </h2>
          <p className="text-[#F5F5DC]/50 max-w-lg mx-auto" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", lineHeight: 1.9 }}>
            Schedule a consultation and let's build something exceptional. We offer an obligation-free consultation for all qualifying properties.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 max-w-5xl mx-auto shadow-2xl overflow-hidden rounded-sm">
          {/* Contact Info Side */}
          <div className="lg:col-span-2 p-10 flex flex-col justify-between border-r border-[#F5F5DC]/10" style={{ background: "rgba(245,245,220,0.06)", backdropFilter: "blur(12px)" }}>
            <div>
              <h3 className="text-[#F5F5DC] mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 400 }}>
                Our Office
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-[#F5F5DC]/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[#F5F5DC]/80 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>57, Araliya Mawatha,</p>
                    <p className="text-[#F5F5DC]/50 text-xs mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Primrose Garden, Kandy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-[#F5F5DC]/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[#F5F5DC]/80 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>hello@cohostceylon.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={16} className="text-[#F5F5DC]/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[#F5F5DC]/80 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>+94 777 772 616</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8 h-px bg-[#F5F5DC]/10" />
            <div>
              <p className="text-[#F5F5DC]/40 text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Response Time</p>
              <p className="text-[#F5F5DC]/70 text-sm" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>Within 24 hours on all business days</p>
            </div>
          </div>

          {/* Form Side / Luxury Success Side */}
          <div className="lg:col-span-3 p-10" style={{ background: "#F5F5DC" }}>
            {submitted ? (
              // 🚀 --- LUXURY SUCCESS UI ---
              <div className="flex flex-col items-center justify-center h-full text-center py-16 animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-[#023020] rounded-full flex items-center justify-center shadow-xl mb-8">
                  <Check size={40} className="text-[#F5F5DC]" />
                </div>
                <h3 className="text-[#023020] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 400 }}>Message Received</h3>
                <p className="text-[#023020]/70 max-w-xs mx-auto mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  Thank you for reaching out. A Co-Host Ceylon strategist has been notified and will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-3 border border-[#023020] text-[#023020] uppercase tracking-widest text-[10px] font-bold hover:bg-[#023020] hover:text-[#F5F5DC] transition-all duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2">Full Name *</label>
                    <input type="text" name="from_name" required value={form.from_name} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2">Email Address *</label>
                    <input type="email" name="reply_to" required value={form.reply_to} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2">Phone Number</label>
                    <input type="tel" name="phone_number" value={form.phone_number} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="+94 ..." />
                  </div>
                  <div>
                    <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2">Property Type</label>
                    <select name="property_type" value={form.property_type} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 cursor-pointer">
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
                  <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2">Property Location</label>
                  <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 placeholder:text-[#023020]/30" placeholder="e.g. Galle, Mirissa, Ella..." />
                </div>

                <div>
                  <label className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2">Tell Us About Your Property *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange} className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 resize-none placeholder:text-[#023020]/30" placeholder="Share details about your property, current challenges, and your goals..." />
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={loading} className="group relative flex items-center gap-3 px-10 py-4 bg-[#023020] text-[#F5F5DC] text-xs tracking-[0.2em] uppercase hover:bg-[#023020]/90 transition-all duration-300 disabled:opacity-60 overflow-hidden">
                    {loading ? (
                      <><span className="w-3 h-3 border-2 border-[#F5F5DC]/30 border-t-[#F5F5DC] rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <>Schedule Consultation <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}