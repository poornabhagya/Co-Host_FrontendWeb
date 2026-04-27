import { useState, useRef } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser"; // EmailJS Import කළා

const CONTACT_BG =
  "https://images.unsplash.com/photo-1760942992111-a65227a3b266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3V0aXF1ZSUyMGhvdGVsJTIwdHJvcGljYWwlMjBnYXJkZW4lMjBwb29sfGVufDF8fHx8MTc3MjY0MDE2OHww&ixlib=rb-4.1.0&q=80&w=1920";

// EmailJS Template එකට ගැලපෙන්න Variables වෙනස් කළා
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
  
  // Form එක අල්ලගන්න Ref එක
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    // ⛔ IDs ටික කෙලින්ම මෙතන ලියන්න (Hardcode)
    // මේ IDs ටික EmailJS Dashboard එකෙන් අරන් මෙතනට පේස්ට් කරන්න
    const serviceID = "service_qxc03w7"; 
    const templateID = "template_7kvksyo"; // උදා: template_xxxxxxx
    const publicKey = "t6GvIYifrPC7L7ohR";   // උදා: xxxxxxxxxxxxxxx

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
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

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-28 lg:py-36 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CONTACT_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(2,48,32,0.88)" }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5F5DC]/30" />
              <span
                className="text-[#F5F5DC]/50 text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Get in Touch
              </span>
              <div className="w-8 h-px bg-[#F5F5DC]/30" />
            </div>
            <h2
              className="text-[#F5F5DC] max-w-2xl mx-auto mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Ready to Elevate Your Villa
              <br />
              <em className="italic">or Boutique Hotel?</em>
            </h2>
            <p
              className="text-[#F5F5DC]/50 max-w-lg mx-auto"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.9,
              }}
            >
              Schedule a consultation and let's build something exceptional.
              We offer an obligation-free consultation for all qualifying properties.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-0 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div
              className="lg:col-span-2 p-10 flex flex-col justify-between"
              style={{ background: "rgba(245,245,220,0.06)", backdropFilter: "blur(8px)" }}
            >
              <div>
                <h3
                  className="text-[#F5F5DC] mb-8"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                  }}
                >
                  Our Office
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-[#F5F5DC]/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p
                        className="text-[#F5F5DC]/80 text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        27 Galle Face Terrace
                      </p>
                      <p
                        className="text-[#F5F5DC]/50 text-xs mt-1"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Colombo 03, Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={16} className="text-[#F5F5DC]/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p
                        className="text-[#F5F5DC]/80 text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        hello@cohostceylon.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={16} className="text-[#F5F5DC]/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p
                        className="text-[#F5F5DC]/80 text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        +94 11 234 5678
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-[#F5F5DC]/10" />

              <div>
                <p
                  className="text-[#F5F5DC]/40 text-[10px] tracking-[0.3em] uppercase mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Response Time
                </p>
                <p
                  className="text-[#F5F5DC]/70 text-sm"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                  }}
                >
                  Within 24 hours on all business days
                </p>
              </div>
            </div>

            {/* Form */}
            <div
              className="lg:col-span-3 p-10"
              style={{ background: "#F5F5DC" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <CheckCircle
                    size={48}
                    className="text-[#023020] mb-6"
                    strokeWidth={1.2}
                  />
                  <h3
                    className="text-[#023020] mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                    }}
                  >
                    Thank You
                  </h3>
                  <p
                    className="text-[#333]/60 max-w-xs"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.8,
                    }}
                  >
                    Your enquiry has been received. A Co-Host Ceylon strategist
                    will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={form.from_name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        value={form.reply_to}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone_number"
                        value={form.phone_number}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        placeholder="+94 ..."
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Property Type
                      </label>
                      <select
                        name="property_type"
                        value={form.property_type}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
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
                    <label
                      className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Property Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      placeholder="e.g. Galle, Mirissa, Ella..."
                    />
                  </div>

                  <div>
                    <label
                      className="block text-[#023020]/60 text-[10px] tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Tell Us About Your Property *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#023020]/20 focus:border-[#023020] outline-none py-2 text-[#023020] text-sm transition-colors duration-300 resize-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      placeholder="Share details about your property, current challenges, and your goals..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-3 px-10 py-4 bg-[#023020] text-[#F5F5DC] text-xs tracking-[0.2em] uppercase hover:bg-[#023020]/80 transition-all duration-300 disabled:opacity-60"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {loading ? (
                        <>
                          <span className="w-3 h-3 border border-[#F5F5DC]/30 border-t-[#F5F5DC] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Schedule Consultation
                          <Send size={12} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#023020", borderTop: "1px solid rgba(245,245,220,0.08)" }}>
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <img
                  src="./logo.png"
                  alt="Co-Host Ceylon Logo"
                  className="h-22 w-auto object-contain"
                />
              </div>
              <p
                className="text-[#F5F5DC]/40 text-xs leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Luxury Hospitality Growth Partner
                <br />
                Sri Lanka
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p
                className="text-[#F5F5DC]/30 text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Navigation
              </p>
              <ul className="space-y-2">
                {["About", "Partnership Services", "Collection", "Other", "Book Now", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          const el = document.querySelector(
                            `#${item.toLowerCase()}`
                          );
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[#F5F5DC]/50 hover:text-[#F5F5DC] text-xs tracking-[0.1em] transition-colors duration-200"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Philosophy */}
            <div>
              <p
                className="text-[#F5F5DC]/30 text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Philosophy
              </p>
              <p
                className="text-[#F5F5DC]/40 text-xs leading-relaxed italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "Luxury is not defined by price.
                <br />
                It is defined by precision, care,
                <br />
                and the art of anticipation."
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#F5F5DC]/8">
            <p
              className="text-[#F5F5DC]/25 text-[10px] tracking-[0.1em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              © 2026 Co-Host Ceylon. All Rights Reserved.
            </p>
            <p
              className="text-[#F5F5DC]/25 text-[10px] tracking-[0.1em] mt-2 md:mt-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Privacy Policy · Terms of Engagement
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}