import React from "react";

const styles = `
  .hero-outer {
    font-family: 'AndesRounded', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    background: url('/6M7A6770%20(1).jpg') center/cover no-repeat;
  }

  .hero-outer::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(26,18,11,0.55) 0%, rgba(26,18,11,0.2) 45%, rgba(26,18,11,0.05) 100%);
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 80px 48px 80px clamp(48px, 8vw, 100px);
    max-width: 560px;
  }

  .hero-title {
    font-family: 'AndesRounded', system-ui, sans-serif;
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #fff;
    margin-bottom: 1.25rem;
    text-shadow: 0 2px 12px rgba(0,0,0,0.25), 0 4px 24px rgba(0,0,0,0.15);
  }

  .hero-sub {
    font-family: 'AndesRounded', system-ui, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: rgba(255,255,255,0.95);
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 420px;
    text-shadow: 0 1px 8px rgba(0,0,0,0.2);
  }

  .btn-explore {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%);
    color: #fff;
    text-decoration: none;
    border-radius: 9999px;
    padding: 16px 36px;
    font-family: 'AndesRounded', system-ui, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.25);
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
    box-shadow: 0 4px 24px rgba(249,115,22,0.35),
                0 2px 8px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.2);
  }
  .btn-explore:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 36px rgba(249,115,22,0.45),
                0 6px 16px rgba(0,0,0,0.2),
                inset 0 1px 0 rgba(255,255,255,0.25);
  }
  .btn-explore .btn-arrow {
    transition: transform 0.3s ease;
  }
  .btn-explore:hover .btn-arrow {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    .hero-outer {
      min-height: 100svh;
      align-items: flex-end;
    }
    .hero-outer::before {
      background: linear-gradient(180deg, rgba(26,18,11,0.2) 0%, rgba(26,18,11,0.4) 40%, rgba(26,18,11,0.7) 100%);
    }
    .hero-content {
      padding: 80px 1.25rem 40px;
      padding-bottom: max(40px, env(safe-area-inset-bottom));
    }
    .hero-title {
      font-size: clamp(1.75rem, 8vw, 2.5rem);
      margin-bottom: 1rem;
    }
    .hero-sub {
      font-size: 0.9375rem;
      margin-bottom: 1.5rem;
    }
    .btn-explore {
      padding: 14px 28px;
      font-size: 0.9375rem;
    }
  }
  @media (max-width: 480px) {
    .hero-content {
      padding: 60px 1rem 32px;
    }
  }
`;

function Hero() {
  return (
    <>
      <style>{styles}</style>
      <section className="hero-outer">
        <div className="hero-content">
          <h1 className="hero-title">A Space to Cook, Create, and Grow</h1>
          <p className="hero-sub">
            A thoughtfully curated culinary experience for growing minds.
          </p>
          <a href="#why" className="btn-explore">
            Know more
            <span className="btn-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

export { Hero };
export default Hero;
