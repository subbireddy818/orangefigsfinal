import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Testimonial data ──────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Samatha Tulla",
    sub: "Mother of Virender (8 years old)",
    category: "Parents",
    quote:
      "The programme helped my son give shape to his restaurant dream. Earlier, he struggled to express himself; now he can cook daily for our entire joint family, even our staff. I've seen confidence, clarity and purpose grow in him. The impact has been truly positive.",
    gradientFrom: "#FDE8F2",
    gradientTo: "#FBCADC",
    waveColor: "#D41450",
  },
  {
    id: 2,
    name: "Mamatha Madireddy",
    sub: "Mother of Dushyant (12 years old)",
    category: "Parents",
    quote:
      "Dushyant has always loved TCL, but after the summer programme, his understanding of food deepened remarkably. He now speaks about ingredients, sourcing and nutrition with clarity and detail. I'm incredibly happy to see how informed and passionate he has become.",
    gradientFrom: "#FFF4DC",
    gradientTo: "#FFE4A8",
    waveColor: "#FCAB52",
  },
  {
    id: 3,
    name: "Sulogna Gupta",
    sub: "Mother of Ayushi (14 years old)",
    category: "Parents",
    quote:
      "Ayushi was always passionate about cooking, but TCL gave her direction. I've seen her become more patient, process-oriented and confident. She now understands that cooking is a complete journey, not just a dish. It's helping her move closer to her dream of becoming a chef.",
    gradientFrom: "#DFF8F9",
    gradientTo: "#B5EFF2",
    waveColor: "#3BC7D5",
  },
  {
    id: 4,
    name: "Keerti",
    sub: "Mother of Ritika",
    category: "Parents",
    quote:
      "This experience transformed Ritika. She found genuine passion and confidence in cooking like never before. Now she cooks independently at home, even earning and reinvesting her money into ingredients. I've seen remarkable growth, dedication and joy; something she hadn't discovered elsewhere.",
    gradientFrom: "#FFFCE5",
    gradientTo: "#FFF3A8",
    waveColor: "#FDD871",
  },
  {
    id: 5,
    name: "Ronit",
    sub: "13 years old",
    category: "Young Chefs",
    quote:
      "Cooking has always excited me, but this programme showed me there's so much more to food than just recipes. I discovered the science, nutrition and friendships that come with it. Meeting inspiring chefs strengthened my dream of becoming an Italian chef and earning a place on TCL's chef wall.",
    gradientFrom: "#E6EEFB",
    gradientTo: "#C0D2F5",
    waveColor: "#366BC4",
  },
  {
    id: 6,
    name: "Nidhi",
    sub: "13 years old",
    category: "Young Chefs",
    quote:
      "Through the Summer Programme, I experienced how a professional kitchen truly works. I learnt advanced techniques and loved the cook-off challenge — it taught me confidence under pressure. Baking week strengthened my dream of opening my own bakery and proved big wonders can begin in small kitchens.",
    gradientFrom: "#EFF5E0",
    gradientTo: "#D5E8B0",
    waveColor: "#748B42",
  },
  {
    id: 7,
    name: "Arjun",
    sub: "9 years old",
    category: "Young Chefs",
    quote:
      "I joined to gain hands-on cooking experience for my future food truck dream. The programme was fun, practical and inspiring. I made great friends and gained clarity about my ideas. Now, I feel more confident and excited to start shaping my food truck venture soon.",
    gradientFrom: "#FDE8F2",
    gradientTo: "#FBCADC",
    waveColor: "#FA4A38",
  },
];

// ── Wavy Blob Card ────────────────────────────────────────────────
function BlobCard({ item, isMobile }) {
  const gradId = `grad-${item.id}`;

  return (
    <div
      className={`relative flex-none cursor-default group ${isMobile ? "w-[280px]" : "w-[340px]"}`}
      style={{ transition: "transform 0.35s cubic-bezier(.34,1.4,.64,1)" }}
    >
      <div className="relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02]">
        {/* SVG Blob background */}
        <svg
          viewBox="0 0 360 480"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{
            filter:
              "drop-shadow(0 16px 44px rgba(0,0,0,0.13)) drop-shadow(0 4px 10px rgba(0,0,0,0.07))",
            transition: "filter 0.3s ease",
          }}
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.gradientFrom }} />
              <stop offset="100%" style={{ stopColor: item.gradientTo }} />
            </linearGradient>
          </defs>
          {/* Main blob shape — taller */}
          <path
            fill={`url(#${gradId})`}
            d="M38,28C10,14-6,50 10,86C24,116 6,150 14,192C22,234-5,262 8,304C20,344 0,378 15,416C28,446 66,468 106,463C146,458 180,474 218,467C256,460 295,474 326,456C355,438 374,406 368,372C362,338 378,306 374,274C370,242 384,210 374,178C364,146 380,110 359,84C339,58 302,46 266,52C230,58 194,42 158,46C122,50 84,38 52,54C38,60 42,36 38,28Z"
          />
          {/* Wavy top stripe */}
          <path
            fill={item.waveColor}
            opacity="0.9"
            d="M38,28C10,14-6,50 10,86C24,116 6,150 14,192C20,212 16,222 24,221C56,208 106,221 155,212C204,203 250,215 296,204C333,195 360,203 368,188C375,171 373,144 370,121C367,94 378,66 359,48C339,28 302,18 266,24C230,30 194,13 158,17C122,21 84,10 52,25C38,30 40,36 38,28Z"
          />
        </svg>

        {/* Card content — absolutely positioned over SVG */}
        <div
          className="absolute inset-0 flex flex-col"
          style={{ padding: isMobile ? "50px 24px 28px" : "58px 30px 32px" }}
        >
          {/* Name + sub */}
          <p
            className="font-bold text-[#1C0A08]"
            style={{
              fontFamily: "'AndesRounded', sans-serif",
              fontSize: isMobile ? "14px" : "16px",
              lineHeight: 1.2,
            }}
          >
            {item.name}
          </p>
          <p
            className="mb-2"
            style={{
              fontFamily: "'AndesRounded', sans-serif",
              fontSize: isMobile ? "10px" : "11.5px",
              fontWeight: 600,
              color: "rgba(28,10,8,0.5)",
              marginTop: "2px",
            }}
          >
            {item.sub}
          </p>

          {/* Big quote mark */}
          <span
            className="block leading-none mb-1"
            style={{
              fontFamily: "'AndesRounded', sans-serif",
              fontSize: isMobile ? "48px" : "64px",
              color: "rgba(28,10,8,0.09)",
              fontWeight: 800,
              lineHeight: 0.65,
            }}
          >
            "
          </span>

          {/* Quote text */}
          <p
            className="flex-1 text-[#2A1008] font-semibold"
            style={{
              fontFamily: "'AndesRounded', sans-serif",
              fontSize: isMobile ? "12px" : "13.5px",
              lineHeight: 1.68,
            }}
          >
            {item.quote}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function TestimonialsCarousel() {
  const GAP = 20;
  const CARD_W_MOBILE = 280;
  const CARD_W_DESKTOP = 340;

  const [activeFilter, setActiveFilter] = useState("All Stories");
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const trackRef = useRef(null);
  const startXRef = useRef(0);

  useEffect(() => { setTimeout(() => setHeadingVisible(true), 100); }, []);
  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const VISIBLE = isMobile ? 1 : 3;
  const CARD_W = isMobile ? CARD_W_MOBILE : CARD_W_DESKTOP;

  const filtered =
    activeFilter === "All Stories"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  const TOTAL = filtered.length;
  const PAGES = Math.max(1, TOTAL - VISIBLE + 1);

  const goTo = useCallback(
    (idx) => {
      const clamped = Math.max(0, Math.min(idx, PAGES - 1));
      setCurrent(clamped);
    },
    [PAGES]
  );

  // Reset to 0 when filter changes
  useEffect(() => {
    setCurrent(0);
  }, [activeFilter]);

  // Translate track
  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = isMobile ? CARD_W_MOBILE : CARD_W_DESKTOP;
      trackRef.current.style.transform = `translateX(-${current * (cardWidth + GAP)}px)`;
    }
  }, [current, isMobile, GAP]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  // Touch swipe
  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  };

  return (
    <>
      <style>{`
        .section-heading { opacity: 0; transform: translateY(20px); transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s; }
        .section-heading.on { opacity: 1; transform: translateY(0); }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rise-in { animation: riseIn 0.7s ease both; }
        .rise-in-delay { animation: riseIn 0.7s ease 0.3s both; }
      `}</style>

      {/* Section — yellow bg with wavy white edges */}
      <section
        id="testimonials"
        className="relative w-full overflow-hidden pt-10 md:pt-14 pb-8 lg:pb-10"
        style={{ background: "#FDD871" }}
      >
        {/* Wavy top white edge */}
        <div
          className="absolute top-0 left-0 w-full h-8 md:h-12 bg-white pointer-events-none"
          style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }}
        />
        {/* Wavy bottom white edge */}
        <div
          className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-white pointer-events-none"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />

        {/* Heading */}
        <div className="text-center px-4 mb-6 md:mb-8 rise-in">
          <h2 className={`section-heading ${headingVisible ? "on" : ""} mb-4 md:mb-6`}>
            See why families{" "}
            <span className="grad">love us...</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {["All Stories", "Parents", "Young Chefs"].map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className="px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-250 border-2"
                style={{
                  fontFamily: "'AndesRounded', sans-serif",
                  background: activeFilter === label ? "#B42A63" : "white",
                  color: activeFilter === label ? "white" : "#1C0A08",
                  borderColor: activeFilter === label ? "#B42A63" : "#1C0A08",
                  boxShadow: activeFilter === label
                    ? "0 6px 20px rgba(180,42,99,0.35)"
                    : "0 3px 10px rgba(0,0,0,0.08)",
                  transform: activeFilter === label ? "translateY(-2px)" : "none",
                }}
              >
                {label === "All Stories" && "✨ "}
                {label === "Parents" && "👨‍👩‍👧 "}
                {label === "Young Chefs" && "👨‍🍳 "}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full rise-in-delay">
          {/* Left Arrow */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200 border-2 border-[#1C0A08]/10 hover:border-[#1C0A08] text-[#1C0A08]"
            aria-label="Previous"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200 border-2 border-[#1C0A08]/10 hover:border-[#1C0A08] text-[#1C0A08]"
            aria-label="Next"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

          {/* Track wrapper */}
          <div className="overflow-hidden py-4 md:py-6">
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${GAP}px`,
                transition: "transform 0.55s cubic-bezier(.77,0,.175,1)",
                willChange: "transform",
                paddingLeft: isMobile ? `calc((100% - ${CARD_W}px) / 2)` : "24px",
                paddingRight: isMobile ? `calc((100% - ${CARD_W}px) / 2)` : "24px",
              }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {filtered.map((item) => (
                <BlobCard key={item.id} item={item} isMobile={isMobile} />
              ))}
            </div>
          </div>

          {/* Dots — bottom center */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-2">
            {Array.from({ length: PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? (isMobile ? "20px" : "28px") : "8px",
                  background: i === current ? "#B42A63" : "rgba(28,10,8,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Named export for App.js (header nav links to #testimonials)
export { TestimonialsCarousel as Testimonials };
