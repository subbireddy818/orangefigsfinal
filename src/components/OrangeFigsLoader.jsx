import { useEffect, useState } from "react";

const LOGO = "/oflogo.png";

const word1 = "Orange".split("");
const word2 = "Figs".split("");

export default function OrangeFigsLoader({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      if (onDone) onDone();
    }, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!show) return null;

  let delay = 0.7;
  const chars = [];

  word1.forEach((ch) => {
    chars.push({ ch, type: "orange", delay });
    delay += 0.07;
  });
  chars.push({ ch: " ", type: "space", delay });
  delay += 0.04;
  word2.forEach((ch) => {
    chars.push({ ch, type: "plum", delay });
    delay += 0.07;
  });

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ldr-root {
          position: fixed;
          inset: 0;
          background: #fffaf6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 9999;
        }

        .ldr-logo {
          width: 160px;
          height: 160px;
          object-fit: contain;
          opacity: 0;
          transform: scale(0.82);
          animation: logoIn 1s cubic-bezier(.22,1,.36,1) 0.2s forwards;
        }

        @keyframes logoIn {
          to { opacity: 1; transform: scale(1); }
        }

        .ldr-chars {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .ldr-char {
          display: inline-block;
          font-family: 'AndesRounded', sans-serif;
          font-size: 42px;
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(40px);
          animation: charUp 0.5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ldr-char.orange {
          background: linear-gradient(130deg, #FA4A38, #FCAB52);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ldr-char.plum {
          background: linear-gradient(130deg, #B42A63, #D4145A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ldr-char.space { width: 12px; }

        @keyframes charUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .ldr-tagline {
          font-family: 'AndesRounded', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #FA4A38;
          margin-top: 10px;
          opacity: 0;
          transform: translateY(14px);
          animation: tagUp 0.6s ease 1.4s forwards;
        }

        @keyframes tagUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .ldr-line-wrap {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: fadeIn 0.6s ease 1.7s forwards;
        }

        @keyframes fadeIn { to { opacity: 1; } }

        .ldr-line {
          height: 2px;
          border-radius: 999px;
          width: 0;
          animation: lineGrow 0.7s ease 1.7s forwards;
        }
        .ldr-line.l { background: linear-gradient(90deg, #FA4A38, #B42A63); }
        .ldr-line.r { background: linear-gradient(90deg, #B42A63, #3BC7D5); }

        @keyframes lineGrow { to { width: 60px; } }

        .ldr-udot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #FCAB52;
        }

        .ldr-dots {
          margin-top: 44px;
          display: flex;
          gap: 8px;
          opacity: 0;
          animation: fadeIn 0.4s ease 2s forwards;
        }

        .ldr-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          animation: dotBounce 1.2s ease-in-out infinite;
        }

        @keyframes dotBounce {
          0%,100% { transform: translateY(0);     opacity: 0.4; }
          50%      { transform: translateY(-10px); opacity: 1;   }
        }
      `}</style>

      <div className="ldr-root">
        <img className="ldr-logo" src={LOGO} alt="Orange Figs" loading="eager" fetchPriority="high" />

        <div className="ldr-chars">
          {chars.map(({ ch, type, delay }, i) => (
            <span
              key={i}
              className={`ldr-char ${type}`}
              style={{ animationDelay: `${delay}s` }}
            >
              {ch}
            </span>
          ))}
        </div>

        <div className="ldr-tagline">The Culinary Lounge</div>

        <div className="ldr-line-wrap">
          <div className="ldr-line l" />
          <div className="ldr-udot" />
          <div className="ldr-line r" />
        </div>

        <div className="ldr-dots">
          {["#FA4A38","#B42A63","#3BC7D5","#FCAB52","#FA68A5"].map((color, i) => (
            <div
              key={i}
              className="ldr-dot"
              style={{ background: color, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
