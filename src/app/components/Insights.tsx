import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Revenue Strategy",
    title: "How to Increase ADR in Sri Lanka's Boutique Villa Market",
    excerpt:
      "A deep dive into average daily rate optimisation for boutique villas across Sri Lanka — covering dynamic pricing, rate segmentation, length-of-stay structuring, and direct booking conversion strategy.",
    focusPoints: [
      "Dynamic pricing",
      "Rate segmentation",
      "Length-of-stay structuring",
      "Direct booking strategy",
    ],
    seoKeywords: ["boutique villa revenue Sri Lanka", "increase ADR Sri Lanka hotel", "dynamic pricing boutique hotel"],
    readTime: "8 min read",
    date: "February 2026",
  },
  {
    id: 2,
    category: "Distribution",
    title: "Why Channel Managers Are Essential for Independent Hotels in Sri Lanka",
    excerpt:
      "A practical breakdown of channel management for independent Sri Lankan hotels — covering inventory sync, rate parity, overbooking prevention, and how to balance automation with personalised guest service.",
    focusPoints: [
      "Inventory sync",
      "Rate parity",
      "Overbooking prevention",
      "Automation vs personalization",
    ],
    seoKeywords: ["channel manager Sri Lanka", "hotel booking engine Sri Lanka", "OTA management Sri Lanka"],
    readTime: "11 min read",
    date: "January 2026",
  },
  {
    id: 3,
    category: "Design & Landscape",
    title: "Designing Tropical Landscapes That Age Beautifully",
    excerpt:
      "How landscape design — rooted in native species, mature tree selection, and climate intelligence — becomes the most powerful brand differentiator for boutique properties in Sri Lanka. Inspired by the Geoffrey Bawa lineage.",
    focusPoints: [
      "Native species",
      "Mature tree sourcing",
      "Climate considerations",
      "Landscape as brand identity",
    ],
    seoKeywords: ["tropical landscape design Sri Lanka", "boutique hotel garden design", "Geoffrey Bawa landscape inspiration"],
    readTime: "7 min read",
    date: "December 2025",
  },
  {
    id: 4,
    category: "Investment",
    title: "Boutique Hotel vs Luxury Villa – Which Investment Model Performs Better?",
    excerpt:
      "An analytical framework comparing the financial performance, staffing models, RevPAR benchmarks, and scalability of boutique hotel ownership versus private luxury villa investment in Sri Lanka's evolving tourism economy.",
    focusPoints: [
      "Operational complexity",
      "Staffing models",
      "RevPAR comparison",
      "Scalability",
    ],
    seoKeywords: ["invest in boutique hotel Sri Lanka", "luxury villa investment Sri Lanka", "hotel feasibility Sri Lanka"],
    readTime: "14 min read",
    date: "November 2025",
  },
  {
    id: 5,
    category: "Pre-Opening",
    title: "Pre-Opening Checklist for Independent Boutique Hotels",
    excerpt:
      "The definitive pre-opening roadmap for boutique hospitality properties in Sri Lanka — covering staffing, SOPs, systems setup, revenue planning, brand alignment, and launch sequencing from concept to first guest arrival.",
    focusPoints: [
      "Staffing",
      "SOPs",
      "Systems setup",
      "Revenue planning",
      "Brand alignment",
    ],
    seoKeywords: ["hotel pre opening checklist", "boutique hotel launch Sri Lanka", "hotel setup consultancy Sri Lanka"],
    readTime: "12 min read",
    date: "October 2025",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="py-28 lg:py-36"
      style={{ background: "#F5F5DC" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#023020]/40" />
              <span
                className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Insights & Intelligence
              </span>
            </div>
            <h2
              className="text-[#023020]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Thinking Deeply About
              <br />
              <em className="italic">Sri Lankan Hospitality</em>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[#333]/60"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.9,
              }}
            >
              Positioned for SEO and authority — our editorial intelligence covers revenue
              strategy, design, investment, and operations. Written for property owners
              who want to understand the mechanics of luxury hospitality at depth.
            </p>
          </div>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#023020]/10 mb-px">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Bottom row — 2 wider cards */}
        <div className="grid md:grid-cols-2 gap-px bg-[#023020]/10">
          {articles.slice(3).map((article) => (
            <ArticleCard key={article.id} article={article} wide />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-3 text-[#023020] text-xs tracking-[0.2em] uppercase border-b border-[#023020]/30 hover:border-[#023020] pb-1 transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            View All Articles
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  wide = false,
}: {
  article: (typeof articles)[0];
  wide?: boolean;
}) {
  return (
    <article className="bg-[#F5F5DC] p-8 lg:p-10 group cursor-pointer hover:bg-white transition-colors duration-300 flex flex-col">
      {/* Top row */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="text-[9px] tracking-[0.3em] uppercase px-3 py-1"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            background: "rgba(2,48,32,0.07)",
            color: "#023020",
          }}
        >
          {article.category}
        </span>
        <span
          className="text-[#333]/35 text-[10px]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {article.date}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-[#023020] mb-4 group-hover:text-[#023020]/75 transition-colors duration-300"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: wide ? "1.2rem" : "1.05rem",
          fontWeight: 400,
          lineHeight: 1.45,
        }}
      >
        {article.title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-[#333]/55 mb-5 flex-1"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.78rem",
          lineHeight: 1.95,
        }}
      >
        {article.excerpt}
      </p>

      {/* Focus points */}
      <div className="mb-5">
        <p
          className="text-[#023020]/35 text-[9px] tracking-[0.25em] uppercase mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Focus
        </p>
        <div className="flex flex-wrap gap-2">
          {article.focusPoints.map((fp) => (
            <span
              key={fp}
              className="text-[9px] tracking-[0.08em] px-2 py-1 border border-[#023020]/15 text-[#023020]/50"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {fp}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#023020]/8 pt-4">
        <span
          className="text-[#023020]/35 text-[10px]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {article.readTime}
        </span>
        <button
          className="flex items-center gap-2 text-[#023020] text-[10px] tracking-[0.2em] uppercase group-hover:gap-3 transition-all duration-300"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Read Article
          <ArrowRight size={10} />
        </button>
      </div>
    </article>
  );
}
