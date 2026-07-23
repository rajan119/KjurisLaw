// components/BestExperience.tsx

export default function BestExperience() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    const stats = [
      { pct: 70, label: "Case Win" },
      { pct: 20, label: "Case Lost" },
      { pct: 10, label: "Case Pending" },
    ];
  
    // Arc parameters (semi-circle)
    const ARC_RADIUS = 40;
    const ARC_CIRCUMFERENCE = Math.PI * ARC_RADIUS; // ≈ 125.66
  
    // Gold gradient for progress
    const getGradientId = (index: number) => `goldGradient${index}`;
  
    // Ribbon Icon component
    const RibbonIcon = () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[20px] h-[20px]"
        style={{ color: "#d3a542" }}
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M9 12.5L7 21l5-3 5 3-2-8.5" />
      </svg>
    );
  
    return (
      <section className="bg-white">
        <div className="max-w-[1300px] mx-auto px-6 py-[70px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[70px] items-center">
          {/* ========== LEFT: IMAGE ========== */}
          <div className="relative max-w-[460px] mx-auto md:mx-0">
            <div
              className="absolute z-0 rounded-[26px]"
              style={{
                backgroundColor: "#2a2a2e",
                top: 60,
                left: 40,
                right: -24,
                bottom: -24,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Senior lawyer at his desk"
              className="relative z-10 w-full block rounded-[26px] object-cover"
              style={{ aspectRatio: "4 / 4.6" }}
            />
          </div>
  
          {/* ========== RIGHT: CONTENT ========== */}
          <div>
            {/* Badge */}
            <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
              Best Experience
            </div>
  
            {/* Gold gradient line */}
            <div
              className="w-[60px] h-[3px] rounded-sm mb-6"
              style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
            />
  
            {/* Heading */}
            <h1
              style={{ fontFamily: playfair, color: "#2b2b30" }}
              className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
            >
              Find Us What We Actually Do For Giving Complete Solutions.
            </h1>
  
            {/* Description */}
            <p
              style={{ color: "#52565f" }}
              className="text-[16.5px] leading-[1.85] mb-11 max-w-[560px]"
            >
              When seeking legal action against management for any form of injustice
              or exploitation, employees require a labour lawyer. In addition, it is
              recommended to enlist their assistance in cases of compromise or
              bargaining during union strikes. The legal and institutional steps
              taken by these experts would prevent any accusations being made
              against the union.
            </p>
  
            {/* ========== STATS WITH ICONS INSIDE CIRCLES ========== */}
            <div className="flex flex-wrap justify-center md:justify-start gap-9 sm:gap-12">
              {stats.map((stat, index) => {
                const offset = ARC_CIRCUMFERENCE * (1 - stat.pct / 100);
                const gradientId = getGradientId(index);
  
                return (
                  <div key={stat.label} className="text-center">
                    {/* SVG – semi-circle with icon inside */}
                    <div className="w-[110px] h-[100px] mx-auto">
                      <svg viewBox="0 0 110 100" className="w-full h-full">
                        {/* Gold gradient */}
                        <defs>
                          <linearGradient
                            id={gradientId}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#d3a542" />
                            <stop offset="100%" stopColor="#b8942e" />
                          </linearGradient>
                        </defs>
  
                        {/* Grey background arc (full semi-circle) */}
                        <path
                          d="M30,90 A40,40 0 1,1 80,90"
                          fill="none"
                          stroke="#1f3f3d"
                          strokeWidth="9"
                        />
  
                        {/* Gold progress arc */}
                        <path
                          d="M30,90 A40,40 0 1,1 80,90"
                          fill="none"
                          stroke={`url(#${gradientId})`}
                          strokeWidth="9"
                          strokeLinecap="round"
                          strokeDasharray={ARC_CIRCUMFERENCE}
                          strokeDashoffset={offset}
                        />
  
                        {/* ====== ICON INSIDE CIRCLE (centered at 55, 50) ====== */}
                        <g transform="translate(55, 50)">
                          {/* Beige background circle */}
                          <circle cx="0" cy="0" r="18" fill="#f7ece0" />
                          {/* Ribbon icon */}
                          <foreignObject x="-11" y="-11" width="22" height="22">
                            <div className="flex items-center justify-center w-full h-full">
                              <RibbonIcon />
                            </div>
                          </foreignObject>
                        </g>
  
                        {/* Percentage text – inside SVG at bottom */}
                        <text
                          x="50%"
                          y="80%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            fill: "#2b2b30",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {stat.pct}%
                        </text>
                      </svg>
                    </div>
  
                    {/* Label below SVG */}
                    <div
                      style={{ color: "#2b2b30" }}
                      className="font-semibold text-base mt-2"
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }