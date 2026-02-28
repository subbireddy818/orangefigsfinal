import React from "react";
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
    return (
        <section className="relative pt-12 pb-8 lg:pb-10 bg-white overflow-hidden">
            <div className="container-custom relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-[0.95]">
                        Partnering with{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="mt-6 text-gray-500 text-lg">
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