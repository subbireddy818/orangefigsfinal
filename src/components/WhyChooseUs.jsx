import React from "react";

// Brand color palette
const colors = {
  orange: { main: "#FCAB52", light: "#FFF4DC", dark: "#E8963A" },
  coral: { main: "#FA4A38", light: "#FFE5E2", dark: "#D93D2E" },
  teal: { main: "#3BC7D5", light: "#E0F7FA", dark: "#2BA5B0" },
  green: { main: "#74B842", light: "#E8F5E0", dark: "#5A9A32" },
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

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      style={{
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Source Sans 3', sans-serif",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          width: "100%",
          padding: "clamp(30px, 5vw, 50px) clamp(16px, 4vw, 48px)",
        }}
      >
        {/* Section Label */}
        <p style={{ fontSize: "clamp(11px, 1.5vw, 14px)", color: colors.coral.main, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "clamp(12px, 2vw, 20px)" }}>
          / Why Orange Figs?
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.4fr 1fr",
            gap: 0,
            alignItems: "stretch",
          }}
        >

          {/* ── LEFT BLOCK ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              alignItems: "start",
            }}
          >
            {/* Text Column */}
            <div style={{ paddingRight: "clamp(12px, 3vw, 40px)" }}>
              <h2
                style={{
                  fontFamily: "'AndesRounded', system-ui, sans-serif",
                  fontSize: "clamp(24px, 5vw, 52px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  color: "#1a1a1a",
                  marginBottom: "clamp(12px, 2vw, 24px)",
                  letterSpacing: "-0.02em",
                }}
              >
                The Orange Figs<br /><span style={{ background: `linear-gradient(135deg, ${colors.coral.main}, ${colors.orange.main})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Difference</span>
              </h2>

              <p
                style={{
                  fontSize: "clamp(11px, 1.5vw, 15px)",
                  color: "#555",
                  lineHeight: 1.65,
                  marginBottom: "clamp(16px, 3vw, 32px)",
                }}
              >
                We don't just teach cooking — we build confidence, creativity, and habits that last a lifetime. Our Michelin-experienced chefs create a nurturing environment where young minds flourish.
              </p>

              <div style={{ display: "flex", gap: "clamp(10px, 2vw, 20px)", alignItems: "center", flexWrap: "wrap" }}>
                <CtaLink href="#contact" color={colors.coral.main}>Book Free Trial ›</CtaLink>
                <CtaLink href="#contact" color={colors.teal.main}>Contact Us ›</CtaLink>
              </div>
            </div>

            {/* Middle Features */}
            <div style={{ paddingTop: "clamp(40px, 8vw, 100px)", paddingRight: "clamp(12px, 3vw, 32px)", paddingLeft: "clamp(12px, 3vw, 40px)" }}>
              <FeatureItem
                isFirst
                icon={<ExpertIcon color={colors.coral} />}
                title="Expert Instructors"
                description="Guided by Michelin-experienced chefs who specialise in child development and culinary arts."
                color={colors.coral}
              />
              <FeatureItem
                icon={<AwardIcon color={colors.orange} />}
                title="Award-Winning Curriculum"
                description="Recognised nationally for blending creativity, nutrition, and technique beautifully."
                color={colors.orange}
              />
            </div>
          </div>

          {/* ── RIGHT COL ── */}
          <div style={{ borderLeft: "2px solid #f0e6dc", paddingLeft: "clamp(12px, 3vw, 32px)", paddingBottom: 20, paddingTop: "clamp(20px, 4vw, 40px)" }}>
            <FeatureItem
              isFirst
              icon={<SafetyIcon color={colors.teal} />}
              title="Safety First"
              description="State-of-the-art kitchen with induction heating, age-appropriate tools, and strict hygiene standards."
              color={colors.teal}
            />
            <FeatureItem
              icon={<FamilyIcon color={colors.green} />}
              title="1200+ Happy Families"
              description={
                <>
                  Don't just take our word for it—
                  <a href="#testimonials" style={{ color: colors.green.main, textDecoration: "underline" }}>
                    see
                  </a>{" "}
                  what parents say about Orange Figs.
                </>
              }
              color={colors.green}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
