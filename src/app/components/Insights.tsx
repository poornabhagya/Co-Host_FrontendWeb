
import { Camera, Building2, Sparkles, TrendingUp } from "lucide-react";

export function Insights() {
  const insightItems = [
    { title: "Photo locations", icon: Camera, link: null },
    { title: "Real estate and development", icon: Building2, link: "#real-estate" },
    { title: "Experiences", icon: Sparkles, link: "#experiences" },
    { title: "Insights", icon: TrendingUp, link: null },
  ];
  return (
    <section
      id="insights"
      className="py-28 lg:py-36"
      style={{ background: "#ffffff" }}
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
              Other
              <br />
              
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
              Beyond property management discover our curated insights, exclusive guest experiences, and tailored real estate solutions designed for Sri Lanka's luxury hospitality sector.
            </p>
          </div>
        </div>

        {/* Grid of 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#023020]/10 auto-rows-fr">
          {insightItems.map((item) => {
            const Icon = item.icon;
            const cardContent = (
              <>
                {/* Icon - Fixed at top */}
                <div className="flex justify-center mb-6">
                  <Icon
                    size={28}
                    className="text-[#023020] group-hover:text-[#F5F5DC] transition-colors duration-500"
                    strokeWidth={1.2}
                  />
                </div>

                {/* Separator Line - Fixed below icon */}
                <div className="w-full border-t border-[#023020]/8 group-hover:border-[#F5F5DC]/10 mb-6 transition-colors duration-500" />

                {/* Title - Wraps naturally below */}
                <h3
                  className="text-[#023020] group-hover:text-[#F5F5DC] text-center transition-colors duration-500"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                    fontWeight: 400,
                    lineHeight: 1.45,
                  }}
                >
                  {item.title}
                </h3>
              </>
            );

            if (item.link) {
              return (
                <a
                  key={item.title}
                  href={item.link}
                  className="bg-white p-10 group hover:bg-[#023020] transition-all duration-500 cursor-pointer flex flex-col border-l border-r border-[#023020]/8 group-hover:border-[#F5F5DC]/10 h-full justify-start"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={item.title}
                className="bg-white p-10 group hover:bg-[#023020] transition-all duration-500 cursor-default flex flex-col border-l border-r border-[#023020]/8 group-hover:border-[#F5F5DC]/10 h-full justify-start"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

