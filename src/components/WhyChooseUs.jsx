import React from "react";

// ── ICONS ──────────────────────────────────────────────────────────────────

const PricingIcon = () => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <path d="M7 24L27 7L47 24V46H34V32H20V46H7V24Z" fill="#D4A017" stroke="#8B6500" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="20" y="32" width="14" height="14" fill="#B8860B" stroke="#8B6500" strokeWidth="1"/>
    <circle cx="39" cy="40" r="9" fill="#FBF0C0" stroke="#D4A017" strokeWidth="1.5"/>
    <line x1="39" y1="33" x2="39" y2="47" stroke="#8B6500" strokeWidth="1.2"/>
    <line x1="33" y1="37" x2="45" y2="37" stroke="#8B6500" strokeWidth="1.2"/>
    <circle cx="33" cy="40" r="2.2" fill="#D4A017" stroke="#8B6500" strokeWidth="1"/>
    <circle cx="45" cy="40" r="2.2" fill="#D4A017" stroke="#8B6500" strokeWidth="1"/>
  </svg>
);

const CertifiedIcon = () => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <circle cx="27" cy="21" r="13" fill="#FBF0C0" stroke="#D4A017" strokeWidth="2"/>
    <circle cx="27" cy="21" r="9.5" fill="#D4A017" stroke="#8B6500" strokeWidth="1.5"/>
    <path d="M21 23.5L27 17L33 23.5V30H30V25H24V30H21V23.5Z" fill="#8B6500"/>
    <path d="M18 33L21 41L27 37L33 41L36 33L27 37.5Z" fill="#D4A017" stroke="#8B6500" strokeWidth="1"/>
    <circle cx="19.5" cy="21" r="1.5" fill="#8B6500"/>
    <circle cx="34.5" cy="21" r="1.5" fill="#8B6500"/>
  </svg>
);

const FinancingIcon = () => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <rect x="9" y="8" width="25" height="31" rx="2" fill="#FBF0C0" stroke="#D4A017" strokeWidth="1.5"/>
    <rect x="17" y="5" width="9" height="6" rx="1.5" fill="#D4A017" stroke="#8B6500" strokeWidth="1"/>
    <rect x="14" y="18" width="13" height="1.5" rx="0.75" fill="#8B6500"/>
    <rect x="14" y="23" width="9" height="1.5" rx="0.75" fill="#8B6500"/>
    <rect x="14" y="28" width="11" height="1.5" rx="0.75" fill="#8B6500"/>
    <circle cx="38" cy="40" r="10" fill="#D4A017" stroke="#8B6500" strokeWidth="2"/>
    <circle cx="38" cy="40" r="6.5" fill="#FBF0C0"/>
    <text x="38" y="44.5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#8B6500" fontFamily="Georgia,serif">$</text>
  </svg>
);

const SatisfactionIcon = () => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
    <circle cx="12" cy="19" r="5.5" fill="#FBF0C0" stroke="#D4A017" strokeWidth="1.5"/>
    <path d="M4 38C4 32 7.5 30 12 30" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="42" cy="19" r="5.5" fill="#FBF0C0" stroke="#D4A017" strokeWidth="1.5"/>
    <path d="M50 38C50 32 46.5 30 42 30" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="27" cy="17" r="7" fill="#D4A017" stroke="#8B6500" strokeWidth="1.5"/>
    <path d="M15 38C15 31 19.5 28 27 28C34.5 28 39 31 39 38" stroke="#8B6500" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M27 5L28.8 10.5H34.5L30 13.8L31.8 19.3L27 16.2L22.2 19.3L24 13.8L19.5 10.5H25.2L27 5Z" fill="#D4A017" stroke="#8B6500" strokeWidth="0.5"/>
  </svg>
);

// ── FEATURE ITEM ───────────────────────────────────────────────────────────

const FeatureItem = ({ icon, title, description, isFirst = false }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "56px 1fr",
      gap: 14,
      alignItems: "start",
      padding: "28px 0",
      borderTop: isFirst ? "none" : "1px solid #c5bbb0",
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 19,
          fontWeight: 700,
          color: "#1a1a1a",
          marginBottom: 8,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  </div>
);

// ── CTA LINK ───────────────────────────────────────────────────────────────

const CtaLink = ({ href = "#", children }) => {
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
        fontSize: 15,
        fontWeight: 600,
        color: "#8B1A1A",
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Sans+3:wght@400;600&display=swap');
      `}</style>

      <section
        id="why"
        style={{
          background: "#f0ebe4",
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
            padding: "50px 48px",
          }}
        >
          {/* Section Label */}
          <p style={{ fontSize: 14, color: "#555", marginBottom: 20 }}>
            / Why Razor?
          </p>

          {/* 
            Main grid — 3 columns:
            Col 1 (left block): text + Competitive/Certified features
            Col 2 (right col): Easy Financing + 100% Satisfaction
            Vertical line = border-left on right col
          */}
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
              <div style={{ paddingRight: 40 }}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(42px, 5vw, 68px)",
                    fontWeight: 800,
                    lineHeight: 1.04,
                    color: "#1a1a1a",
                    marginBottom: 24,
                    letterSpacing: "-0.02em",
                  }}
                >
                  The Razor<br />Difference
                </h2>

                <p
                  style={{
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.65,
                    marginBottom: 32,
                  }}
                >
                  For over a decade, we've been a proud service provider,
                  earning and maintaining the trust of the community in
                  Saskatoon, Martensville, Warman, and surrounding areas.
                </p>

                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <CtaLink href="#">Call Now ›</CtaLink>
                  <CtaLink href="#">Book Free Estimate ›</CtaLink>
                </div>
              </div>

              {/* Middle Features: Competitive + Certified — offset down */}
              <div style={{ paddingTop: 100, paddingRight: 32, paddingLeft: 40, marginLeft: 0 }}>
                <FeatureItem
                  isFirst
                  icon={<PricingIcon />}
                  title="Competitive Pricing"
                  description={<>Experience quality without<br />breaking the bank—we offer<br />fair and competitive pricing.</>}
                />
                <FeatureItem
                  icon={<CertifiedIcon />}
                  title="Certified Experts"
                  description={<>Choose Razor for proven<br />excellence backed by<br />certified professionals.</>}
                />
              </div>
            </div>

            {/* ── RIGHT COL: starts from top, single vertical line ── */}
            <div style={{ borderLeft: "1px solid #b0a89e", paddingLeft: 32, paddingBottom: 20, paddingTop: 40 }}>
              <FeatureItem
                isFirst
                icon={<FinancingIcon />}
                title="Easy Financing"
                description={
                  <>
                    Don't let budget constraints stop you—explore our hassle-free{" "}
                    <a href="#" style={{ color: "#8B1A1A", textDecoration: "underline" }}>
                      Financing
                    </a>{" "}
                    options.
                  </>
                }
              />
              <FeatureItem
                icon={<SatisfactionIcon />}
                title="100% Satisfaction"
                description={
                  <>
                    Don't just take our word for it—
                    <a href="#" style={{ color: "#8B1A1A", textDecoration: "underline" }}>
                      see
                    </a>{" "}
                    what Homeowners of Saskatoon say about Razor.
                  </>
                }
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
