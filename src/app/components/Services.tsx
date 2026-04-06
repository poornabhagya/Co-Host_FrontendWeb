import {
  CalendarDays,
  TrendingUp,
  Megaphone,
  BarChart3,
  Settings2,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Reservations & Guest Relations Management",
    sectionTitle: "1. Reservations & Guest Relations Management",
    intro:
      "We manage the entire reservations ecosystem — ensuring seamless bookings, aligned calendars, and elevated guest communication from inquiry to departure.",
    listLabel: "Services Include:",
    highlights: [
      "Full OTA & Channel Manager integration (Airbnb, Booking.com, Agoda, Expedia)",
      "Inventory control & rate synchronization",
      "Direct booking engine setup & payment gateway integration",
      "Personalized reservation handling by fluent, professionally trained staff",
      "24/7 guest communication & pre-arrival coordination",
      "Review management & ranking optimization",
      "Upselling experiences (transfers, dining, excursions)",
      "Cancellation management & dispute handling",
    ],
    tagline:
      "Our team acts as your remote front office — structured, responsive, and brand-aligned.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Strategy & Performance Optimization",
    sectionTitle: "2. Revenue Strategy & Performance Optimization",
    intro:
      "We implement disciplined revenue management frameworks tailored to boutique properties — not generic pricing tools.",
    listLabel: "Revenue Services:",
    highlights: [
      "Dynamic pricing strategy (seasonal & demand-based)",
      "High-season structuring & minimum stay optimization",
      "Occupancy forecasting & performance analysis",
      "Competitor benchmarking & market positioning",
      "ADR and RevPAR monitoring",
      "Length-of-stay strategy",
      "Rate parity control across channels",
    ],
    tagline: "We focus on long-term yield growth — not short-term discounting.",
  },
  {
    icon: Megaphone,
    title: "Marketing, Brand Positioning & Distribution",
    sectionTitle: "3. Marketing, Brand Positioning & Distribution",
    intro: "Beyond bookings, we build brands.",
    listLabel: "Marketing Services:",
    highlights: [
      "Listing optimization & content refinement",
      "Professional photography direction",
      "Website content strategy & structure",
      "Travel agent outreach (local & international)",
      "Meta & Google Ads strategy",
      "Influencer & collaboration partnerships",
      "Social media positioning & brand storytelling",
      "Experience packaging & concept development",
    ],
    tagline:
      "We position each property as a distinct hospitality identity — not just another listing.",
  },
  {
    icon: BarChart3,
    title: "Financial Oversight & Accounts Coordination",
    sectionTitle: "4. Financial Oversight & Accounts Coordination",
    intro:
      "Transparency and structured financial reporting are central to our model.",
    listLabel: "Financial Management Includes:",
    highlights: [
      "Monthly reservations performance reports",
      "Commission reconciliation",
      "Revenue breakdown by channel",
      "Owner payout tracking",
      "Expense coordination with on-site management",
      "Budget planning for marketing & operational improvements",
      "Payment gateway monitoring",
    ],
    tagline:
      "We ensure owners understand performance clearly — in numbers, not assumptions.",
  },
  {
    icon: Settings2,
    title: "Operations Advisory & Systems Implementation",
    sectionTitle: "5. Operations Advisory & Systems Implementation",
    intro: "We help properties scale with structure.",
    listLabel: "Operational Support:",
    highlights: [
      "Channel manager implementation",
      "Booking engine & payment gateway setup",
      "SOP development for on-site staff",
      "Front office communication protocols",
      "Guest experience refinement",
      "Staff coordination support",
      "Vendor & partner network introductions",
    ],
    tagline:
      "We create operational clarity so properties run smoothly — even in the owner's absence.",
  },
  {
    icon: Heart,
    title: "Personalised Hospitality Model",
    sectionTitle: "6. Personalised Hospitality Model",
    intro:
      "What distinguishes Co-Host Ceylon is not automation — it is precision. Our reservations and guest communications are handled by fluent, trained professionals who understand:",
    listLabel: "",
    highlights: [
      "Cultural nuance",
      "Luxury guest expectations",
      "Travel behavior",
      "Sri Lankan destination knowledge",
    ],
    tagline:
      "Every booking is treated individually — not as a transaction, but as a curated stay.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-28 lg:py-36"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#023020]/40" />
            <span
              className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Services
            </span>
          </div>
          <h2
            className="text-[#023020] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Strategic Hospitality Management
            <br />
            <em className="italic">for Boutique Properties in Sri Lanka</em>
          </h2>
        </div>

        {/* Intro paragraph */}
        <div
          className="max-w-3xl mb-16 p-8 border-l-2 border-[#023020]/20"
          style={{ background: "rgba(2,48,32,0.03)" }}
        >
          <p
            className="text-[#333]/65 mb-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.95,
            }}
          >
            At Co-Host Ceylon, we operate as a dedicated reservations, revenue,
            and brand management partner for boutique villas and curated
            hospitality concepts across Sri Lanka.
          </p>
          <p
            className="text-[#333]/65"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.95,
            }}
          >
            Our approach combines structured financial oversight, dynamic
            revenue strategy, and personalized guest engagement — delivered by
            professionally trained, fluent, and hospitality-driven staff.
          </p>
        </div>

        {/* 6-Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#023020]/10 auto-rows-fr">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-10 group hover:bg-[#023020] transition-all duration-500 cursor-default flex flex-col border-l border-r border-[#023020]/8 group-hover:border-[#F5F5DC]/10 h-full"
              >
                {/* Header Section - Icon and Title */}
                <div className="mb-6">
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon
                      size={28}
                      className="text-[#023020] group-hover:text-[#F5F5DC] transition-colors duration-500"
                      strokeWidth={1.2}
                    />
                  </div>

                  <h3
                    className="text-[#023020] group-hover:text-[#F5F5DC] mb-3 transition-colors duration-500"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className="text-[#333]/60 group-hover:text-[#F5F5DC]/65 mb-5 transition-colors duration-500"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.85,
                  }}
                >
                  {service.intro}
                </p>

                {service.listLabel && (
                  <p
                    className="text-[#023020]/50 group-hover:text-[#F5F5DC]/40 mb-3 transition-colors duration-500"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.listLabel}
                  </p>
                )}

                <ul className="space-y-2 flex-1">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[#023020]/60 group-hover:text-[#F5F5DC]/60 transition-colors duration-500"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.72rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <span className="w-3 h-px bg-current opacity-50 flex-shrink-0 mt-2" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tagline */}
                <div className="mt-6 pt-5 border-t border-[#023020]/8 group-hover:border-[#F5F5DC]/10 transition-colors duration-500">
                  <p
                    className="text-[#023020]/45 group-hover:text-[#F5F5DC]/50 italic transition-colors duration-500"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.78rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
