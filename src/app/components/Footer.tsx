// components/Footer.tsx
export function Footer() {
  return (
    <footer style={{ background: "#023020", borderTop: "1px solid rgba(245,245,220,0.08)" }}>
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="./logo.png"
                alt="Co-Host Ceylon Logo"
                className="h-16 lg:h-20 xl:h-24 w-auto object-contain"
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
              {["About", "Partnership Services", "Our Portfolio", "Beyond Reservations","Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(
                          `#${item.toLowerCase().replace(/\s+/g, '-')}`
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

          {/* Contact Info */}
          <div>
            <p
              className="text-[#F5F5DC]/30 text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </p>
            <div className="space-y-3">
              <div>
                <p
                  className="text-[#F5F5DC]/50 text-xs mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+94777772616"
                  className="text-[#F5F5DC]/70 hover:text-[#F5F5DC] text-xs transition-colors duration-200"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +94 777 772 616
                </a>
              </div>
              <div>
                <p
                  className="text-[#F5F5DC]/50 text-xs mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@cohostceylon.com"
                  className="text-[#F5F5DC]/70 hover:text-[#F5F5DC] text-xs break-all transition-colors duration-200"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  hello@cohostceylon.com
                </a>
              </div>
              <div>
                <p
                  className="text-[#F5F5DC]/50 text-xs mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Address
                </p>
                <p
                  className="text-[#F5F5DC]/70 text-xs leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  57, Araliya Mawatha,
                  <br />
                  Primrose Garden, Kandy
                </p>
              </div>
            </div>
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
  );
}