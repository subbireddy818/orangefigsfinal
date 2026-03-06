import React, { useState, useEffect } from "react";

// Same palette as Services section
const colors = {
  coral: { main: "#FA4A38", light: "#fde0dd", dark: "#D93D2E" },
  magenta: { main: "#B42A63", light: "#f5d0e0", dark: "#8F2250" },
  teal: { main: "#3BC7D5", light: "#d4f4f7", dark: "#2BA5B0" },
  blue: { main: "#366BC4", light: "#d6e4f7", dark: "#2954A0" },
};

// ── ICONS ──────────────────────────────────────────────────────────────

const ExpertIcon = ({ color }) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <circle cx="27" cy="21" r="13" fill={color.light} stroke={color.main} strokeWidth="2"/>
    <circle cx="27" cy="21" r="9.5" fill="white" stroke={color.main} strokeWidth="1.5"/>
    <path d="M21 23.5L27 17L33 23.5V30H30V25H24V30H21V23.5Z" fill={color.main}/>
    <path d="M18 33L21 41L27 37L33 41L36 33L27 37.5Z" fill={color.light} stroke={color.main} strokeWidth="1"/>
    <circle cx="19.5" cy="21" r="1.5" fill={color.main}/>
    <circle cx="34.5" cy="21" r="1.5" fill={color.main}/>
  </svg>
);

const AwardIcon = ({ color }) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <path d="M7 24L27 7L47 24V46H34V32H20V46H7V24Z" fill={color.light} stroke={color.main} strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="20" y="32" width="14" height="14" fill="white" stroke={color.main} strokeWidth="1"/>
    <circle cx="39" cy="40" r="9" fill={color.light} stroke={color.main} strokeWidth="1.5"/>
    <path d="M36 40L38 42L42 38" stroke={color.main} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SafetyIcon = ({ color }) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <rect x="9" y="8" width="25" height="31" rx="2" fill={color.light} stroke={color.main} strokeWidth="1.5"/>
    <rect x="17" y="5" width="9" height="6" rx="1.5" fill="white" stroke={color.main} strokeWidth="1"/>
    <rect x="14" y="18" width="13" height="2" rx="1" fill={color.main}/>
    <rect x="14" y="24" width="9" height="2" rx="1" fill={color.main}/>
    <rect x="14" y="30" width="11" height="2" rx="1" fill={color.main}/>
    <circle cx="38" cy="40" r="10" fill={color.light} stroke={color.main} strokeWidth="2"/>
    <path d="M33 40L36 43L43 36" stroke={color.main} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FamilyIcon = ({ color }) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <circle cx="12" cy="19" r="5.5" fill={color.light} stroke={color.main} strokeWidth="1.5"/>
    <path d="M4 40C4 32 7.5 28 12 28" stroke={color.main} strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="42" cy="19" r="5.5" fill={color.light} stroke={color.main} strokeWidth="1.5"/>
    <path d="M50 40C50 32 46.5 28 42 28" stroke={color.main} strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="27" cy="17" r="7" fill="white" stroke={color.main} strokeWidth="2"/>
    <path d="M15 42C15 33 19.5 28 27 28C34.5 28 39 33 39 42" stroke={color.main} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M27 5L28.8 10.5H34.5L30 13.8L31.8 19.3L27 16.2L22.2 19.3L24 13.8L19.5 10.5H25.2L27 5Z" fill={color.main}/>
  </svg>
);

// ── FEATURE ITEM ───────────────────────────────────────────────────────────

const FeatureItem = ({ icon, title, description, color, isFirst = false }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "48px 1fr",
      gap: 12,
      alignItems: "start",
      padding: "20px 0",
      borderTop: isFirst ? "none" : "1px solid #f0e6dc",
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: color.light,
        borderRadius: 12,
        border: `2px solid ${color.main}20`,
      }}
    >
      <div style={{ transform: "scale(0.7)" }}>{icon}</div>
    </div>
    <div>
      <h3
        style={{
          fontFamily: "'AndesRounded', system-ui, sans-serif",
          fontSize: "clamp(14px, 2vw, 18px)",
          fontWeight: 700,
          color: color.dark,
          marginBottom: 6,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "clamp(11px, 1.5vw, 14px)", color: "#666", lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  </div>
);

// ── CTA LINK ───────────────────────────────────────────────────────────────

const CtaLink = ({ href = "#", children, color }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: hovered ? 9 : 5,
        fontSize: "clamp(12px, 1.5vw, 15px)",
        fontWeight: 700,
        color: color,
        textDecoration: "none",
        transition: "gap 0.2s ease",
      }}
    >
      {children}
    </a>
  );
};

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────

const whyStyles = `
  .section-heading { opacity: 0; transform: translateY(20px); transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s; }
  .section-heading.on { opacity: 1; transform: translateY(0); }
  .section-label { opacity: 0; transform: translateY(12px); transition: all 0.6s ease 0.35s; }
  .section-label.on { opacity: 1; transform: translateY(0); }
  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: stretch; }
  .why-left { display: block; }
  .why-right { border-left: 2px solid #f0e6dc; }
  @media (max-width: 900px) {
    .why-grid { grid-template-columns: 1fr; }
    .why-left { grid-template-columns: 1fr; }
    .why-features { padding-top: 24px !important; }
    .why-right { border-left: none; border-top: 2px solid #f0e6dc; padding-top: 24px !important; padding-left: 0 !important; }
  }
  @media (max-width: 768px) {
    .why-wrap { padding: 24px 16px !important; }
  }
`;

export const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <>
      <style>{whyStyles}</style>
      <section
        id="why"
        style={{
          background: "#fffaf6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'AndesRounded', sans-serif",
          color: "#1a1a1a",
        }}
      >
        <div
          className="why-wrap"
          style={{
            maxWidth: 1140,
            width: "100%",
            padding: "clamp(30px, 5vw, 50px) clamp(16px, 4vw, 48px)",
          }}
        >
          {/* Centered heading block — top center */}
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            <h2 className={`section-heading ${visible ? "on" : ""}`} style={{ marginBottom: "16px" }}>
              The Orange Figs <span className="grad">Difference</span>
            </h2>
            <p className={`section-label ${visible ? "on" : ""}`} style={{ marginBottom: "clamp(16px, 2vw, 24px)" }}>
              Why Orange Figs?
            </p>
            <p
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                color: "#555",
                lineHeight: 1.65,
                marginBottom: "clamp(20px, 3vw, 28px)",
              }}
            >
              At Orange Figs, we craft meaningful culinary experiences rooted in creativity and culture. Every gathering is thoughtfully designed with warmth, precision, and attention to detail. We honour each milestone — from celebrations to first discoveries in the kitchen. Most importantly, we create safe, joyful spaces where children feel confident to explore, learn, and grow.
            </p>
            <div style={{ display: "flex", gap: "clamp(12px, 2vw, 20px)", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <CtaLink href="#contact" color={colors.teal.main}>Contact Us ›</CtaLink>
            </div>
          </div>

          <div className="why-grid">

          {/* ── LEFT BLOCK ── */}
          <div className="why-left">
            {/* Features */}
            <div className="why-features" style={{ paddingRight: "clamp(12px, 3vw, 32px)", paddingLeft: "clamp(12px, 3vw, 40px)" }}>
              <FeatureItem
                isFirst
                icon={<ExpertIcon color={colors.coral} />}
                title="Curated, Not Casual"
                description="Our programs are thoughtfully structured — not drop-in activities, but intentional culinary journeys designed with progression and purpose."
                color={colors.coral}
              />
              <FeatureItem
                icon={<AwardIcon color={colors.magenta} />}
                title="Culture Beyond Recipes"
                description="We go beyond cooking instructions. Children explore the stories, traditions, and global influences behind every dish."
                color={colors.magenta}
              />
            </div>
          </div>

          {/* ── RIGHT COL ── */}
          <div className="why-right" style={{ paddingLeft: "clamp(12px, 3vw, 32px)", paddingBottom: 20, paddingTop: "clamp(20px, 4vw, 40px)" }}>
              <FeatureItem
                isFirst
                icon={<SafetyIcon color={colors.teal} />}
                title="Professional Standards, Child-Centred Approach"
                description="Led by experienced chefs, our sessions balance real kitchen discipline with a nurturing, age-appropriate environment."
                color={colors.teal}
              />
              <FeatureItem
                icon={<FamilyIcon color={colors.blue} />}
                title="Growth You Can See"
                description="Children leave with more than a finished dish — they gain confidence, independence, collaboration skills, and a deeper relationship with food."
                color={colors.blue}
              />
          </div>

          </div>
        </div>
    </section>
    </>
  );
};

export default WhyChooseUs;
