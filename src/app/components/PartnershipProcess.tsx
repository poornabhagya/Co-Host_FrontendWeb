import { useState } from "react";
import { Search, BarChart2, Map, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Property Evaluation",
    subtitle: "Initial Assessment",
    description:
      "We begin with a comprehensive evaluation of your property—its location, physical condition, existing performance data, competitive landscape, and owner aspirations. This stage defines the commercial opportunity.",
    deliverable: "Property Evaluation Report",
    duration: "Week 1–2",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Performance Audit",
    subtitle: "Deep Diagnostic",
    description:
      "A rigorous audit of your current operations: pricing strategy, channel mix, OTA performance, cost structure, team capability, and guest feedback. We identify gaps and quantify the revenue opportunity.",
    deliverable: "Performance Audit Document",
    duration: "Week 2–4",
  },
  {
    number: "03",
    icon: Map,
    title: "Strategic Roadmap",
    subtitle: "Bespoke Growth Plan",
    description:
      "We present a tailored Strategic Roadmap—a 12-month growth plan covering pricing, distribution, marketing, operational improvements, and financial targets. This becomes the foundation of our partnership.",
    deliverable: "12-Month Strategic Roadmap",
    duration: "Week 4–6",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementation",
    subtitle: "Activation & Execution",
    description:
      "With your approval, we execute the roadmap: activating channels, implementing pricing models, launching marketing campaigns, conducting staff training, and establishing reporting frameworks.",
    deliverable: "Full Operational Activation",
    duration: "Month 2–3",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Ongoing Optimisation",
    subtitle: "Continuous Improvement",
    description:
      "Hospitality is never static. We continuously monitor performance, adjust strategies in response to market conditions, review financials monthly, and meet quarterly to review the partnership's direction.",
    deliverable: "Monthly Reports & Quarterly Reviews",
    duration: "Ongoing",
  },
];

export function PartnershipProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];
  const Icon = active.icon;

  return (
    <section
      id="partnership"
      className="py-28 lg:py-36"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#023020]/30" />
            <span
              className="text-[#023020]/60 text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Partnership Process
            </span>
            <div className="w-8 h-px bg-[#023020]/30" />
          </div>
          <h2
            className="text-[#023020] max-w-xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            How We Build a
            <br />
            <em className="italic">High-Performance Partnership</em>
          </h2>
        </div>

        {/* Horizontal step nav */}
        <div className="relative mb-12">
          {/* Connecting line */}
          <div
            className="absolute top-8 left-0 right-0 h-px hidden lg:block"
            style={{ background: "rgba(2,48,32,0.12)" }}
          />
          {/* Progress line */}
          <div
            className="absolute top-8 left-0 h-px hidden lg:block transition-all duration-500"
            style={{
              background: "#023020",
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center gap-3 group"
                >
                  {/* Circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-400 border"
                    style={{
                      background: isActive
                        ? "#023020"
                        : isPast
                        ? "#023020"
                        : "white",
                      borderColor: isActive || isPast ? "#023020" : "rgba(2,48,32,0.2)",
                    }}
                  >
                    <StepIcon
                      size={20}
                      strokeWidth={1.3}
                      className="transition-colors duration-300"
                      style={{
                        color: isActive || isPast ? "#F5F5DC" : "#023020",
                        opacity: isActive || isPast ? 1 : 0.4,
                      }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-[10px] tracking-[0.25em] mb-1"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        color: isActive ? "#023020" : "rgba(2,48,32,0.35)",
                      }}
                    >
                      {step.number}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.9rem",
                        color: isActive ? "#023020" : "rgba(2,48,32,0.5)",
                        fontWeight: 400,
                      }}
                    >
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detail */}
        <div
          className="grid lg:grid-cols-2 gap-0 overflow-hidden"
          style={{ border: "1px solid rgba(2,48,32,0.12)" }}
        >
          {/* Left panel */}
          <div className="p-12 lg:p-16" style={{ background: "#023020" }}>
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-[#F5F5DC]/20 text-6xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                }}
              >
                {active.number}
              </span>
              <div>
                <p
                  className="text-[#F5F5DC]/40 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {active.subtitle}
                </p>
                <h3
                  className="text-[#F5F5DC] mt-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                  }}
                >
                  {active.title}
                </h3>
              </div>
            </div>

            <Icon
              size={40}
              strokeWidth={1}
              className="text-[#F5F5DC]/20 mb-8"
            />

            <p
              className="text-[#F5F5DC]/65"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.875rem",
                lineHeight: 2,
              }}
            >
              {active.description}
            </p>
          </div>

          {/* Right panel */}
          <div
            className="p-12 lg:p-16 flex flex-col justify-between"
            style={{ background: "#F5F5DC" }}
          >
            <div>
              <p
                className="text-[#023020]/40 text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Key Deliverable
              </p>
              <p
                className="text-[#023020] text-lg mb-10"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                }}
              >
                {active.deliverable}
              </p>

              <p
                className="text-[#023020]/40 text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Timeline
              </p>
              <p
                className="text-[#023020] text-lg"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                }}
              >
                {active.duration}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-6 py-3 border border-[#023020]/20 text-[#023020] text-xs tracking-[0.15em] uppercase hover:bg-[#023020] hover:text-[#F5F5DC] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                }
                disabled={activeStep === steps.length - 1}
                className="px-6 py-3 bg-[#023020] text-[#F5F5DC] text-xs tracking-[0.15em] uppercase hover:bg-[#023020]/80 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}