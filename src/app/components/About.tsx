const ABOUT_IMAGE = `${import.meta.env.BASE_URL}webpageImg/about.jpg`;

// 🚀 Space එක වෙනුවට %20 දාලා ෆික්ස් කළා. දැන් අනිවාර්යයෙන්ම ලෝගෝ ටික පෙනේවි.
const companyLogos = [
  { name: "Property Logo 1", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%201.png` },
  { name: "Property Logo 2", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%202.png` },
  { name: "Property Logo 3", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%203.png` },
  { name: "Property Logo 4", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%204.png` },
  { name: "Property Logo 5", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%205.png` },
  { name: "Property Logo 6", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%206.png` },
  { name: "Property Logo 7", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%207.png` },
  { name: "Property Logo 8", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%208.png` },
  { name: "Property Logo 9", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2013.png` },
  { name: "Property Logo 10", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2010.png` },
  { name: "Property Logo 11", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2011.png` },
  { name: "Property Logo 12", src: `${import.meta.env.BASE_URL}propertyLogos/Artboard%2012.png` },
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
                our core elements are :
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

        {/* Full-width Logo Section at the bottom */}
        <div className="pt-16 border-t border-[#023020]/10">
          <p 
            className="text-[#023020]/40 text-[9px] tracking-[0.3em] uppercase mb-16 text-center font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            In Association With
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-15 lg:gap-8 opacity-90 px-4">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                // 🚀 මොබයිල් එකේ සයිස් එක h-20 ඉඳන් h-32 (සහ sm:h-40) දක්වා ලොකු කළා.
                // පළලත් max-w-[180px] කරලා ෆෝන් එකට ගැලපෙන්න හැදුවා.
                className="h-32 sm:h-45 md:h-48 lg:h-60 w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[250px] object-contain transition-transform duration-500 hover:scale-105 "
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}