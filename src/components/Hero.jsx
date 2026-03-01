import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="hero-main">

            {/* ── Local video ── */}
            <div className="hero-vid-wrap w-full overflow-hidden">
                <video
                    className="hero-vid w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    src="https://res.cloudinary.com/dg5qkp09h/video/upload/v1772274787/IMG_0839_pjgvj2.mp4"
                />
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
