import React, { useState } from 'react';

const services = [
  {
    id: 1,
    badge: "BIRTHDAY CELEBRATIONS",
    badgeColor: "#FF6B1A",
    title: "Birthday Celebrations",
    desc: "Give your child a birthday celebration they'll remember for a lifetime. At Orange Figs, birthdays go beyond games and cake — they become immersive culinary experiences where kids cook, create, and celebrate together.",
    bullets: ["Themed, chef-guided cooking experiences", "A unique, interactive celebration format", "Premium, Stress-Free Hosting", "Meaningful Fun"],
    wave1: "#FF6B1A", wave2: "#FF8C5A", wave3: "#FFD5BE",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  },
  {
    id: 2,
    badge: "WEEKEND KIDS CLUB",
    badgeColor: "#0891B2",
    title: "Kids Cooking Club",
    desc: "A weekend cooking club where kids bond over global cuisines, build real skills, and make meaningful friendships. We encourage kids to experiment, make mistakes, learn techniques, and grow in confidence.",
    bullets: ["Exploration of world cuisines", "Kitchen skills and techniques", "Foundational cooking methods", "Ingredient awareness and flavour pairing"],
    wave1: "#0891B2", wave2: "#22D3EE", wave3: "#CFFAFE",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
  },
  {
    id: 3,
    badge: "SUMMER CAMP",
    badgeColor: "#D97706",
    title: "Orange Figs Summer Camp",
    desc: "Where curious kids roll up their sleeves, try new flavours, experiment boldly, and discover what they're capable of in the kitchen. Hands-on, energetic, and designed to keep young minds engaged from day one.",
    bullets: ["2 weeks of structured culinary training", "Learning at premium restaurants", "Explore the world through food", "Skill-building, discipline & creativity"],
    wave1: "#D97706", wave2: "#FBBF24", wave3: "#FEF3C7",
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
  },
  {
    id: 4,
    badge: "DEEP-DIVE LEARNING",
    badgeColor: "#4F46E5",
    title: "Chef-Led Masterclasses",
    desc: "Focused, high-impact culinary experiences led by expert chefs and industry professionals. Children dive deep into a cuisine, technique, or theme — guided by world-class mentors who bring real industry knowledge.",
    bullets: ["Master one cuisine at a time", "MasterChef-level professionals", "Professional kitchen standards", "Go beyond basics — explore the craft"],
    wave1: "#4F46E5", wave2: "#818CF8", wave3: "#E0E7FF",
    img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600&q=80",
  },
];

function ServiceCard({ svc, index, isExpanded, onToggle, isMobile }) {
  const truncatedDesc = svc.desc.substring(0, 60) + '...';
  
  return (
    <div style={{
      position: "relative",
      background: "#fff",
      borderRadius: isMobile ? 16 : 24,
      overflow: "hidden",
      boxShadow: "0 6px 28px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      opacity: 0,
      animation: `fadeUp 0.6s ease ${index * 0.12}s forwards`,
    }}>
      {/* Image */}
      <div style={{ position: "relative", height: isMobile ? 100 : 200, overflow: "hidden", flexShrink: 0 }}>
        <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.22) 100%)" }} />
        <div style={{
          position: "absolute", top: isMobile ? 8 : 12, left: isMobile ? 8 : 12,
          background: svc.badgeColor, color: "#fff",
          fontFamily: "'Nunito', sans-serif", fontSize: isMobile ? 7 : 10, fontWeight: 900,
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: isMobile ? "3px 6px" : "5px 12px", borderRadius: 999,
        }}>
          {svc.badge}
        </div>
      </div>

      {/* Body */}
      <div style={{ 
        padding: isMobile 
          ? (isExpanded ? "12px 10px 120px" : "12px 10px 100px") 
          : "28px 28px 200px", 
        flex: 1, 
        position: "relative", 
        zIndex: 2 
      }}>
        {/* Title */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 13 : 22, fontWeight: 800, color: "#1a1020",
          letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: isMobile ? 6 : 12,
        }}>
          {svc.title}
        </h3>

        {/* Desc - truncated on mobile when collapsed */}
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: isMobile ? 10 : 13.5, fontWeight: 600, color: "#7a7f99",
          lineHeight: 1.6, marginBottom: isMobile ? 8 : 18,
        }}>
          {isMobile && !isExpanded ? truncatedDesc : svc.desc}
        </p>

        {/* Bullets - hidden on mobile when collapsed */}
        {(!isMobile || isExpanded) && (
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: isMobile ? 4 : 7 }}>
            {svc.bullets.map((b, i) => (
              <li key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 6,
                fontFamily: "'Nunito', sans-serif",
                fontSize: isMobile ? 9 : 13, fontWeight: 700, color: "#4a4f6a", lineHeight: 1.4,
              }}>
                <span style={{ width: isMobile ? 4 : 6, height: isMobile ? 4 : 6, borderRadius: "50%", background: svc.wave1, flexShrink: 0, marginTop: 4 }} />
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* View More/Less Button - only on mobile */}
        {isMobile && (
          <button
            onClick={onToggle}
            style={{
              marginTop: 10,
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 9,
              fontWeight: 800,
              color: svc.badgeColor,
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            {isExpanded ? "View Less" : "View More"}
            <svg 
              width="10" 
              height="10" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={svc.badgeColor} 
              strokeWidth="3"
              style={{ 
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        )}
      </div>

      {/* Wave bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: isMobile ? "100px" : "220px", overflow: "hidden",
        pointerEvents: "none", zIndex: 1,
      }}>
        <svg viewBox="0 0 400 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M0 30 Q50 10 100 25 Q150 40 200 20 Q250 0 300 18 Q350 36 400 15 L400 80 L0 80 Z" fill={svc.wave3}/>
          <path d="M0 40 Q60 18 120 35 Q180 52 240 30 Q300 8 360 28 Q390 38 400 25 L400 80 L0 80 Z" fill={svc.wave2} opacity="0.7"/>
          <path d="M0 52 Q70 30 140 48 Q210 66 280 44 Q340 24 400 45 L400 80 L0 80 Z" fill={svc.wave1} opacity="0.85"/>
        </svg>
      </div>
    </div>
  );
}

export const Services = () => {
  const [expandedCards, setExpandedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCard = (id) => {
    setExpandedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,800;0,900;1,900&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-root { 
          background: #fffaf6; 
          padding: 80px 40px 100px; 
        }
        @media (max-width: 767px) {
          .svc-root { 
            padding: 50px 16px 60px; 
          }
        }
        .svc-header { text-align: center; margin-bottom: 52px; }
        @media (max-width: 767px) {
          .svc-header { margin-bottom: 32px; }
        }
        .svc-label { 
          font-family: 'Nunito', sans-serif; 
          font-size: 11px; 
          font-weight: 900; 
          letter-spacing: 0.22em; 
          text-transform: uppercase; 
          color: #FF6B1A; 
          margin-bottom: 14px; 
        }
        @media (max-width: 767px) {
          .svc-label { font-size: 10px; margin-bottom: 10px; }
        }
        .svc-title { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(28px, 5vw, 52px); 
          font-weight: 900; 
          color: #1a1020; 
          letter-spacing: -0.025em; 
          line-height: 1.08; 
          margin-bottom: 16px; 
        }
        .svc-title .g { 
          font-style: italic; 
          background: linear-gradient(130deg, #FF6B1A, #F43F8A); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text; 
        }
        .svc-sub { 
          font-family: 'Nunito', sans-serif; 
          font-size: 16px; 
          font-weight: 600; 
          color: #9196b3; 
          max-width: 560px; 
          margin: 0 auto; 
          line-height: 1.7; 
        }
        @media (max-width: 767px) {
          .svc-sub { font-size: 14px; padding: 0 8px; }
        }
        .svc-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); 
          gap: 24px; 
          max-width: 1160px; 
          margin: 0 auto; 
        }
        @media (max-width: 767px) {
          .svc-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 12px; 
            max-width: 100%;
          }
        }
      `}</style>
      <section id="classes" className="svc-root">
        <div className="svc-header">
          <p className="svc-label">What We Offer</p>
          <h2 className="svc-title">Our <span className="g">Services</span></h2>
          <p className="svc-sub">Culinary experiences for every young chef — from birthdays and weekend clubs to summer camps and masterclasses.</p>
        </div>
        <div className="svc-grid">
          {services.map((svc, i) => (
            <ServiceCard 
              key={svc.id} 
              svc={svc} 
              index={i} 
              isExpanded={expandedCards.includes(svc.id)}
              onToggle={() => toggleCard(svc.id)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </section>
    </>
  );
};
