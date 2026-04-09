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
    icon: TrendingUp,
    title: "Revenue Maximisation",
    sectionTitle: "1. Revenue Maximisation",
    intro:
      "We manage the entire reservations ecosystem ensuring seamless bookings, aligned calendars, and elevated guest communication from inquiry to departure.",
    listLabel: "Revenue Services:",
    highlights: [
      "Dynamic pricing strategy (seasonal & demand-based)",
      "Length-of-stay strategy & performance analysis",
      "Rate parity control across channels",
      "Monthly reservations performance reports",
      "Owner payout tracking",
      "Budget planning for marketing & operational improvements",
      "Payment gateway monitoring",
    ],
    
  },
  
  
  {
    icon: Megaphone,
    title: "Brand Positioning",
    sectionTitle: "2. Brand Positioning",
    intro: "Beyond bookings, we build brands.",
    listLabel: "Marketing Services:",
    highlights: [
      "Listing optimization & content refinement",
      "Professional photography direction",
      "Website content strategy & structure",
      "Travel agent outreach (local & international)",
      "Meta & Google Ads strategy",
    ],
    tagline:
      "We position each property as a distinct hospitality identity — not just another listing.",
  },
  {
    icon: Settings2,
    title: "Operational Excellence",
    sectionTitle: "3. Operational Excellence",
    intro: (
      <div className="mt-4 text-gray-600">
        <p className="mb-2">What distinguishes Co-Host Ceylon is not automation, it is precision. Our reservations and guest communications are handled by fluent, trained professionals who understand:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cultural nuance</li>
          <li>Luxury guest expectations</li>
          <li>Travel behavior</li>
          <li>Sri Lankan destination knowledge</li>
        </ul>
      </div>
    ),
    listLabel: "Operational Support:",
    highlights: [
      "Channel manager implementation",
      "Booking engine & payment gateway setup",
      "SOP development for on-site staff",
      "Guest experience refinement",
      "Vendor & partner network introductions",
    ],
    tagline:
      "We create operational clarity so properties run smoothly — even in the owner's absence.",
  },
  {
    icon: CalendarDays,
    title: "GUEST EXPERIENCE",
    sectionTitle: "4. GUEST EXPERIENCE",
    intro:
      "We manage the entire reservations ecosystem — ensuring seamless bookings, aligned calendars, and elevated guest communication from inquiry to departure.",
    listLabel: "Services Include:",
    highlights: [
      "Inventory control & rate synchronization",
      "Direct booking engine setup & payment gateway integration",
      "Personalized reservation handling by fluent, professionally trained staff",
      "24/7 guest communication & pre-arrival coordination",
      "Review management & ranking optimization",
      "Upselling experiences (transfers, dining, excursions)",
      "Cancellation management & dispute handling",
    ],
    
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
          
        </div>

        {/* Intro paragraph */}
       

        {/* 4-Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-[#023020]/10 auto-rows-fr">
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
