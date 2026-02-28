import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// Video cards only (Instagram row removed)
const socialVideos = [
    { id: 1, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772274787/IMG_0839_pjgvj2.mp4' },
    { id: 2, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772274826/IMG_0807_ocqxex.mp4' },
    { id: 3, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772274875/IMG_0837_wgrarx.mp4' },
    { id: 4, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772274915/IMG_0838_jx1d2h.mp4' },
    { id: 5, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772274997/IMG_0836_rcnagd.mp4' },
    { id: 6, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772275005/IMG_0824_h2kxy8.mp4' },
    { id: 7, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772275018/IMG_0823_ti3s2l.mp4' },
    { id: 8, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772275027/IMG_0809_nnzfxc.mp4' },
    { id: 9, src: 'https://res.cloudinary.com/dg5qkp09h/video/upload/v1772275040/IMG_0808_ricrtt.mp4' },
];

const VideoCard = ({ video, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index, duration: 0.6 }}
            className="flex-shrink-0 w-[220px] md:w-[288px] h-[360px] md:h-[420px] rounded-[2rem] overflow-hidden bg-black cursor-pointer relative group"
            style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)'
            }}
        >
            {/* Auto-playing looped video */}
            <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
            />

            {/* Premium top fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

            {/* Hover glow ring */}
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 group-hover:ring-orange-400/40 transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

export const SocialVideos = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 280;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="pt-16 pb-8 lg:pb-10 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-6 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold text-xs uppercase tracking-wider mb-3 shadow-lg shadow-orange-200/50"
                    >
                        <Instagram size={16} />
                        Live from the Kitchen
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight"
                    >
                        Orange Figs <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Stories</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-500 leading-relaxed"
                    >
                        Watch our latest moments from classes, camps, and celebrations.
                    </motion.p>
                </div>

            </div>

            {/* Scrollable Video Row — full width, no side padding */}
            <div className="relative w-full">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} className="text-gray-700" />
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} className="text-gray-700" />
                    </button>
                )}

                {/* Horizontal scrolling container — edge to edge */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex gap-4 overflow-x-auto py-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {socialVideos.map((video, index) => (
                        <VideoCard key={video.id} video={video} index={index} />
                    ))}
                </div>
            </div>

            {/* Follow CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-10"
            >
                <a
                    href="https://www.instagram.com/orangefigs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-200 group"
                >
                    Follow @orangefigs
                    <Instagram size={18} className="group-hover:rotate-12 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
};
