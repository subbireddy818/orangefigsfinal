import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="hero-main">

            {/* ── Local video ── */}
            <div className="hero-vid-wrap w-full h-screen overflow-hidden">
                <video
                    className="hero-vid w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    {/* Meera birthday video from public/meera bday.mp4 */}
                    <source src="/meera bday.mp4" type="video/mp4" />
                </video>
            </div>

            {/* ── 2 lines below video ── */}
            <motion.div
                className="hero-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="hero-line">Premium baking kits delivered monthly.</p>
                <p className="hero-line">Real recipes, professional tools, and family memories served in every box.</p>
            </motion.div>

        </section>
    );
};
