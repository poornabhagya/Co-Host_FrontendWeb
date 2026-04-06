const COASTAL_IMG =
  "https://images.unsplash.com/photo-1566838345788-db81125cef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGNvYXN0YWwlMjBsdXh1cnklMjByZXNvcnQlMjBiZWFjaHxlbnwxfHx8fDE3NzI2NDAxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const WILDLIFE_IMG =
  "https://images.unsplash.com/photo-1501534131-95d4e830200e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdpbGRsaWZlJTIwc2FmYXJpJTIwU3JpJTIwTGFua2F8ZW58MXx8fHwxNzcyNjQwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const PLANTATION_IMG =
  "https://images.unsplash.com/photo-1585171328560-947fbd92d6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwQ2V5bG9uJTIwaGlsbHMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcyNjQwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const RIVER_IMG =
  "https://images.unsplash.com/photo-1764938774907-dda58ec84fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJpdmVyJTIwa2F5YWtpbmclMjBhZHZlbnR1cmUlMjBsdXNoJTIwZ3JlZW58ZW58MXx8fHwxNzcyNjQwMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CULINARY_IMG =
  "https://images.unsplash.com/photo-1658218615053-955e8af55947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYW4lMjBjdWlzaW5lJTIwZmluZSUyMGRpbmluZyUyMGZvb2QlMjBhcnR8ZW58MXx8fHwxNzcyNjQwMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const GEMS_IMG =
  "https://images.unsplash.com/photo-1627234553051-3d60e738b534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZXMlMjBnZW1zJTIwY3JhZnRzbWFuc2hpcCUyMGFydGlzYW4lMjBqZXdlbHJ5fGVufDF8fHx8MTc3MjY0MDE3Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const ART_IMG =
  "https://images.unsplash.com/photo-1761521998559-9816e8e8871f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGFydCUyMGN1bHR1cmUlMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBBc2lhfGVufDF8fHx8MTc3MjY0MDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const experiences = [
  {
    id: 1,
    emoji: "🌊",
    title: "Coastal Life & Ocean Traditions",
    location: "South · West · East Coasts",
    tagline: "Experience the rhythm of coastal Sri Lanka beyond the shoreline.",
    image: COASTAL_IMG,
    tag: "Sea & Shore",
    bullets: [
      "Sunrise fishing with local fishermen",
      "Traditional stilt fishing demonstrations",
      "Lagoon net casting",
      "Turtle conservation visits",
      "Whale watching excursions",
      "Private beach dining",
    ],
    featured: true,
  },
  {
    id: 2,
    emoji: "🐘",
    title: "Wildlife & Nature Safaris",
    location: "Yala · Udawalawe · Wilpattu · Hill Country",
    tagline:
      "Sri Lanka offers rare access to wild landscapes within short travel distances.",
    image: WILDLIFE_IMG,
    tag: "Nature & Wildlife",
    bullets: [
      "Leopard safaris",
      "Elephant encounters",
      "Birdwatching tours",
      "Rainforest and highland trekking",
    ],
    featured: false,
  },
  {
    id: 3,
    emoji: "🍃",
    title: "Plantation & Agricultural Heritage",
    location: "Hill Country · Baddegama · Uva",
    tagline: "Land, scent, and history intertwined.",
    image: PLANTATION_IMG,
    tag: "Culture & Heritage",
    bullets: [
      "Tea estate tours & tastings",
      "Cinnamon plantation immersion",
      "Spice garden walks",
      "Botanical exploration",
    ],
    featured: false,
  },
  {
    id: 4,
    emoji: "🚤",
    title: "River & Water Adventures",
    location: "Balapitiya · Bentota · Inland Lakes",
    tagline: "Water defines the island's quieter beauty.",
    image: RIVER_IMG,
    tag: "Adventure",
    bullets: [
      "Madu River mangrove safaris",
      "Cinnamon island visits",
      "Traditional wooden boat journeys",
      "Lagoon sunset charters",
    ],
    featured: false,
  },
  {
    id: 5,
    emoji: "🍲",
    title: "Culinary & Cultural Journeys",
    location: "Galle · Kandy · Jaffna · Rural Villages",
    tagline: "Food, faith, and daily life — experienced authentically.",
    image: CULINARY_IMG,
    tag: "Gastronomy",
    bullets: [
      "Sri Lankan cooking classes",
      "Village market visits",
      "Temple explorations",
      "Heritage town walks",
    ],
    featured: true,
  },
  {
    id: 6,
    emoji: "💎",
    title: "Gems, Jewelry & Craftsmanship",
    location: "Kandy · Colombo · Ratnapura",
    tagline:
      "From raw stone to finished piece — discover the artistry behind Sri Lanka's gemstones.",
    image: GEMS_IMG,
    tag: "Artisan & Craft",
    bullets: [
      "Private gem cutting demonstrations",
      "Sapphire sourcing insights",
      "Handmade jewelry workshops",
      "Ethical gem education sessions",
      "Custom jewelry design experiences",
    ],
    featured: false,
  },
  {
    id: 7,
    emoji: "🎨",
    title: "Art, Design & Creative Culture",
    location: "Colombo · Galle · Kandy",
    tagline: "Meet the creators shaping Sri Lanka's modern identity.",
    image: ART_IMG,
    tag: "Arts & Traditions",
    bullets: [
      "Studio visits with local artists",
      "Traditional mask carving workshops",
      "Batik and textile experiences",
      "Contemporary Sri Lankan art tours",
      "Architectural heritage walks",
    ],
    featured: false,
  },
];

interface ExperienceCardProps {
  exp: (typeof experiences)[0];
  height?: string;
  showBullets?: boolean;
}

function ExperienceCard({ exp, height = "320px", showBullets = false }: ExperienceCardProps) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      style={{ height }}
    >
      <img
        src={exp.image}
        alt={exp.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(2,48,32,0.92) 0%, rgba(2,48,32,0.3) 55%, transparent 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">{exp.emoji}</span>
          <span
            className="text-[#F5F5DC]/50 text-[8px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {exp.location}
          </span>
        </div>
        <h3
          className="text-[#F5F5DC] mb-1"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem",
            fontWeight: 400,
          }}
        >
          {exp.title}
        </h3>
        {/* Bullets on hover */}
        <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-64">
          <ul className="mt-3 space-y-1">
            {exp.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[#F5F5DC]/65"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.7rem",
                  lineHeight: 1.6,
                }}
              >
                <span className="w-2 h-px bg-[#F5F5DC]/40 flex-shrink-0 mt-2" />
                {b}
              </li>
            ))}
          </ul>
          <p
            className="text-[#F5F5DC]/45 italic mt-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.72rem",
            }}
          >
            {exp.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Experiences() {
  return (
    <section
      id="experiences"
      className="py-28 lg:py-36"
      style={{ background: "#023020" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5F5DC]/30" />
              <span
                className="text-[#F5F5DC]/50 text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Curated Experiences
              </span>
            </div>
            <h2
              className="text-[#F5F5DC]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              experiences
              <br />
              
            </h2>
          </div>
          <div className="flex items-end">
            <div>
              <p
                className="text-[#F5F5DC]/60 mb-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.95,
                }}
              >
                Boutique hospitality is not just about location — it's about connection.
              </p>
              <p
                className="text-[#F5F5DC]/45"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.95,
                }}
              >
                Across the island, we curate experiences that bring guests closer to Sri Lanka's
                fishermen, artists, gem cutters, chefs, gardeners, and storytellers.
              </p>
            </div>
          </div>
        </div>

        {/* Magazine-style layout */}
        {/* Row 1: 1 large + 2 stacked */}
        <div className="grid lg:grid-cols-3 gap-3 mb-3">
          {/* Large featured — Coastal Life */}
          <div className="lg:col-span-2 group relative overflow-hidden cursor-pointer" style={{ height: "480px" }}>
            <img
              src={experiences[0].image}
              alt={experiences[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,48,32,0.92) 0%, rgba(2,48,32,0.2) 60%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{experiences[0].emoji}</span>
                <span
                  className="text-[#F5F5DC]/50 text-[9px] tracking-[0.35em] uppercase border border-[#F5F5DC]/15 px-3 py-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {experiences[0].location}
                </span>
              </div>
              <h3
                className="text-[#F5F5DC] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                }}
              >
                {experiences[0].title}
              </h3>
              {/* Bullets visible on large card */}
              <ul className="space-y-1.5 mb-4">
                {experiences[0].bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-[#F5F5DC]/65"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.78rem",
                    }}
                  >
                    <span className="w-3 h-px bg-[#F5F5DC]/40" />
                    {b}
                  </li>
                ))}
              </ul>
              <p
                className="text-[#F5F5DC]/45 italic text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {experiences[0].tagline}
              </p>
            </div>
          </div>

          {/* Stack: Wildlife + Plantation */}
          <div className="flex flex-col gap-3">
            {[experiences[1], experiences[2]].map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} height="232px" />
            ))}
          </div>
        </div>

        {/* Row 2: 4 equal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {[experiences[3], experiences[4], experiences[5], experiences[6]].map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} height="300px" />
          ))}
        </div>

        {/* Curated with Intention - closing section */}
        <div
          className="mt-3 p-12 lg:p-16 text-center"
          style={{ background: "rgba(245,245,220,0.04)", border: "1px solid rgba(245,245,220,0.07)" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#F5F5DC]/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5F5DC]/30" />
            <div className="w-10 h-px bg-[#F5F5DC]/20" />
          </div>
          <h3
            className="text-[#F5F5DC] mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.6rem",
              fontWeight: 400,
            }}
          >
            Curated with Intention
          </h3>
          <p
            className="text-[#F5F5DC]/50 max-w-2xl mx-auto mb-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.95,
            }}
          >
            We integrate experiences into pre-arrival communication, align them with
            property identity, and structure them as premium additions — supporting both
            storytelling and revenue growth.
          </p>
          <p
            className="text-[#F5F5DC]/35 max-w-xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontStyle: "italic",
              lineHeight: 1.8,
            }}
          >
            Because great stays are remembered through the people guests meet.
          </p>
        </div>
      </div>
    </section>
  );
}
