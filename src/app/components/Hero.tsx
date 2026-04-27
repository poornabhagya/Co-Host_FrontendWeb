const HERO_IMAGE = `${import.meta.env.BASE_URL}webpageImg/hero.webp`;

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
      style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >

      {/* Layered overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,48,32,0.55) 0%, rgba(2,48,32,0.35) 50%, rgba(2,48,32,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,48,32,0.4) 100%)",
        }}
      />

      {/* Content: centered 'Co-Host Ceylon' with headline positioned below */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Centered stack: brand name with headline directly below */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-2 text-center px-4">
            <div
              className="text-[#F5F5DC] leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.4rem, 9vw, 7rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                marginTop: "10rem",
              }}
            >
              Co-Host Ceylon
            </div>

            <h1
              className="text-[#F5F5DC]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1rem, 2.8vw, 1.5rem)",
                fontWeight: 200,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginTop: "15rem",
              }}
            >
              Elevating Sri Lanka's Finest Villas
              
              <em className="italic">  &amp; </em> Boutique Hotels
            </h1>
          </div>
        </div>

        {/* Preserve structure for potential CTAs or subheadings (kept empty) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4" />
      </div>

      
    </section>
  );
}