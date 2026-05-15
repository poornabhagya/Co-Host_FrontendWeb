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

      {/* Cleaned up overlay: Yanthamata dark tint ekak witharai dunne akuru kiyawanna lesi wenna. Green eka ain kara. */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content: centered 'Co-Host Ceylon' with headline positioned below */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Centered stack: brand name with headline directly below */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-2 text-center px-4">
            

            <h1
              className="text-[#F5F5DC]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 7vw, 3.5rem)",
                fontWeight: 200,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginTop: "clamp(15rem, 40vh, 42rem)",
              }}
            >
              Curating Extraordinary Stays  
              
              <em className="italic">  &amp; </em> Experiences
            </h1>
          </div>
        </div>

        {/* Preserve structure for potential CTAs or subheadings (kept empty) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4" />
      </div>
      
    </section>
  );
}