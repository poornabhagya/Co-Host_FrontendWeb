const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1681034834429-9b2ee549eb06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZW9mZnJleSUyMEJhd2ElMjB0cm9waWNhbCUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjY0MDE2NXww&ixlib=rb-4.1.0&q=80&w=1080";

const pillars = [
  { number: "01", label: "Revenue Maximisation" },
  { number: "02", label: "Brand Positioning" },
  { number: "03", label: "Operational Excellence" },
  { number: "04", label: "Guest Experience" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-28 lg:py-36"
      style={{ background: "#F5F5DC" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#023020]/40" />
          <span
            className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            About Co-Host Ceylon
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <h2
              className="text-[#023020] mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              A Dedicated Growth Partner for Sri Lanka's Finest Properties
            </h2>

            <div
              className="space-y-5 text-[#333]/70"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.9,
              }}
            >
              <p>
                Co-Host Ceylon is a boutique hospitality growth partner dedicated
                exclusively to luxury villas and independent boutique hotels in Sri Lanka.
              </p>
              <p>
                We are not a property management company. We operate as a dedicated
                reservations, revenue, and brand management partner — combining structured
                financial oversight, dynamic revenue strategy, and personalised guest
                engagement, delivered by professionally trained, fluent, and
                hospitality-driven staff.
              </p>
              <p>
                Inspired by the philosophy of Geoffrey Bawa — where architecture dissolves
                into nature, and luxury is felt rather than announced — we apply this same
                sensibility to every property we represent.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-px mt-12 border border-[#023020]/15">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className="p-6 border border-[#023020]/10 hover:bg-[#023020]/5 transition-colors duration-300"
                >
                  <span
                    className="text-[#023020]/30 text-xs tracking-[0.2em]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {p.number}
                  </span>
                  <p
                    className="text-[#023020] mt-2 text-sm"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                    }}
                  >
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full border border-[#023020]/20"
              style={{ zIndex: 0 }}
            />
            <img
              src={ABOUT_IMAGE}
              alt="Tropical luxury architecture interior"
              className="relative z-10 w-full object-cover"
              style={{ height: "580px" }}
            />
            {/* Quote overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-8 z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,48,32,0.9) 0%, transparent 100%)",
              }}
            >
              <p
                className="text-[#F5F5DC] italic text-sm leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "Architecture should be experienced, not merely observed."
              </p>
              <p
                className="text-[#F5F5DC]/50 text-[10px] tracking-[0.25em] uppercase mt-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                — Geoffrey Bawa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}