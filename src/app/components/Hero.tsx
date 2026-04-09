const HERO_IMAGE = "https://images.unsplash.com/photo-1704797390049-1004ea1c866c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHRyb3BpY2FsJTIwaW5maW5pdHklMjBwb29sJTIwU3JpJTIwTGFua2F8ZW58MXx8fHwxNzcyNjQwMTY0fDA&ixlib=rb-4.1.0&q=80&w=1920";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        

        

        {/* Headline */}
        <h1
          className="text-[#F5F5DC] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Elevating Sri Lanka's
          <br />
          <em className="italic">Finest Villas &amp; Boutique Hotels</em>
        </h1>

        {/* Subheading */}
        <p
          className="text-[#F5F5DC]/75 mb-12 max-w-2xl"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
            letterSpacing: "0.2em",
            lineHeight: 2,
          }}
        >
          
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
        
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span
          className="text-[#F5F5DC]/50 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#F5F5DC]/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}