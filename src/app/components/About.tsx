const ABOUT_IMAGE = `${import.meta.env.BASE_URL}webpageImg/about.jpg`;

//  Space එක වෙනුවට %20 දාලා ෆික්ස් කළා. දැන් අනිවාර්යයෙන්ම ලෝගෝ ටික පෙනේවි.


export function About() {
  return (
    <section
      id="about"
      className="py-28 lg:py-36"
      style={{ background: "#F9F6F0" }}
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

        {/* Text and Image Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
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
              Where Exceptional Properties Meet Exceptional Hospitality
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
                Co Host Ceylon partners with a handpicked portfolio of luxury villas, private estates, and boutique hotels across Sri Lanka.
                Every property in our collection is personally selected for its character, quality, and
                potential.
              </p>
              <p>
                We work alongside property owners to maximise occupancy, unlock revenue potential, and
                strengthen their property's market presence through reservations management, digital
                marketing, travel trade partnerships, and guest experience development.
              </p>

              
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative mt-12 lg:mt-0">
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