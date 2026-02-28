import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const partners = [
    {
        name: "KitchenAid",
        logo:
            "https://images.unsplash.com/photo-1590424753062-3251f4912dff?auto=format&fit=crop&q=80&w=1200",
    },
    {
        name: "Whole Foods",
        logo:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    },
    {
        name: "Le Creuset",
        logo:
            "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        name: "MasterChef Junior",
        logo:
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200",
    },
    {
        name: "Sur La Table",
        logo:
            "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80&w=1200",
    },
];

export const Partnerships = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
        <section className="relative pt-12 pb-8 lg:pb-10 bg-white overflow-hidden">
            <style>{`
                .partners-heading {
                    font-family: 'AndesRounded', system-ui, sans-serif;
                    font-size: clamp(28px, 5vw, 46px);
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    color: #1a1020;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s;
                    margin-bottom: 16px;
                }
                .partners-heading.on { opacity: 1; transform: translateY(0); }
                .partners-heading .grad {
                    background: linear-gradient(135deg, #FF6B1A, #F43F8A);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .partners-label {
                    font-family: 'AndesRounded', system-ui, sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #FF6B1A;
                    opacity: 0;
                    transform: translateY(12px);
                    transition: all 0.6s ease 0.15s;
                    margin-bottom: 12px;
                }
                .partners-label.on { opacity: 1; transform: translateY(0); }
            `}</style>
            <div className="container-custom relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <p className={`partners-label ${visible ? "on" : ""}`}>Our Partners</p>
                    <h2 className={`partners-heading ${visible ? "on" : ""}`}>
                        Partnering with <span className="grad">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-500 text-lg mt-4" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
                        Innovation is amplified when excellence collaborates.
                    </p>
                </div>

                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                {/* Carousel Track */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex gap-12 w-max"
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -6 }}
                            className="relative min-w-[320px] h-[200px] rounded-2xl overflow-hidden 
              border border-orange-100 
              bg-white 
              shadow-sm 
              transition-all duration-500 
              hover:shadow-lg 
              hover:border-orange-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};