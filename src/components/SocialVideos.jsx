import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// Dummy placeholder — replace with your own MP4s later
const socialVideos = [
    { id: 1, src: '/hero-baking.mp4' },
    { id: 2, src: '/hero-baking.mp4' },
    { id: 3, src: '/hero-baking.mp4' },
    { id: 4, src: '/hero-baking.mp4' },
    { id: 5, src: '/hero-baking.mp4' },
    { id: 6, src: '/hero-baking.mp4' },
];

const instagramReelsRaw = [
    'https://www.instagram.com/reel/C8wDMAuSOnH/?igsh=MXNuNzBpbXJoNW9tMg==',
    'https://www.instagram.com/reel/C8qt4-AyQy2/?igsh=bDk3NXUyMDMyZXp3',
    'https://www.instagram.com/reel/C8qt4-AyQy2/?igsh=bDk3NXUyMDMyZXp3',
    'https://www.instagram.com/reel/DU77yB5Esqn/?igsh=OWZzenNkZmxpYXY=',
];

function normalizeInstagramUrl(url) {
    if (!url) return '';
    const cleaned = url.trim().replace(/\/+$/, '');
    const withoutQuery = cleaned.split('?')[0].split('#')[0];
    return withoutQuery.endsWith('/') ? withoutQuery : `${withoutQuery}/`;
}

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

const InstagramCard = ({ url, index }) => {
    const permalink = normalizeInstagramUrl(url);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index, duration: 0.6 }}
            className="flex-shrink-0 w-[220px] md:w-[288px] h-[360px] md:h-[420px] rounded-[2rem] overflow-hidden bg-black relative group"
            style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)',
            }}
        >
            <div className="w-full h-full bg-white">
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={permalink}
                    data-instgrm-version="14"
                    style={{
                        background: '#fff',
                        border: 0,
                        margin: 0,
                        padding: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <a href={permalink} target="_blank" rel="noopener noreferrer">
                        View this reel on Instagram
                    </a>
                </blockquote>
            </div>
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 group-hover:ring-orange-400/40 transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

export const SocialVideos = () => {
    const scrollRef = useRef(null);
    const instaScrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canInstaScrollLeft, setCanInstaScrollLeft] = useState(false);
    const [canInstaScrollRight, setCanInstaScrollRight] = useState(true);

    const instagramReels = useMemo(() => {
        const seen = new Set();
        return instagramReelsRaw
            .map(normalizeInstagramUrl)
            .filter(Boolean)
            .filter((u) => (seen.has(u) ? false : (seen.add(u), true)));
    }, []);

    useEffect(() => {
        // Instagram's script loads async; poll briefly until it's ready, then process embeds.
        let tries = 0;
        const maxTries = 30; // ~3s
        const t = setInterval(() => {
            tries += 1;
            if (window?.instgrm?.Embeds?.process) {
                try {
                    window.instgrm.Embeds.process();
                } catch {
                    // ignore third-party embed errors
                }
                clearInterval(t);
            } else if (tries >= maxTries) {
                clearInterval(t);
            }
        }, 100);

        return () => clearInterval(t);
    }, [instagramReels.length]);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const checkInstaScroll = () => {
        if (instaScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = instaScrollRef.current;
            setCanInstaScrollLeft(scrollLeft > 0);
            setCanInstaScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        checkInstaScroll();
        // Add event listener for window resize since that can change scroll boundaries
        window.addEventListener('resize', checkScroll);
        window.addEventListener('resize', checkInstaScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            window.removeEventListener('resize', checkInstaScroll);
        };
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

    const instaScroll = (direction) => {
        if (instaScrollRef.current) {
            const scrollAmount = 280;
            instaScrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-100 bg-orange-50/50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 shadow-sm"
                    >
                        <Instagram size={18} />
                        Live from the Kitchen
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[0.95]"
                    >
                        Orange Figs <span className="gradient-text">Stories</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-500 leading-relaxed"
                    >
                        Watch our latest moments from classes, camps, and celebrations — and explore the reels below.
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
                    {instagramReels.map((url, idx) => (
                        <InstagramCard key={url} url={url} index={socialVideos.length + idx} />
                    ))}
                </div>
            </div>

            {/* Instagram reels row — same layout, placed below */}
            <div className="relative w-full mt-6">
                {/* Left Arrow */}
                {canInstaScrollLeft && (
                    <button
                        onClick={() => instaScroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
                        aria-label="Scroll Instagram Left"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} className="text-gray-700" />
                    </button>
                )}

                {/* Right Arrow */}
                {canInstaScrollRight && (
                    <button
                        onClick={() => instaScroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
                        aria-label="Scroll Instagram Right"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} className="text-gray-700" />
                    </button>
                )}

                {/* Horizontal scrolling container — edge to edge */}
                <div
                    ref={instaScrollRef}
                    onScroll={checkInstaScroll}
                    className="flex gap-4 overflow-x-auto py-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {instagramReels.map((url, idx) => (
                        <InstagramCard key={url} url={url} index={idx} />
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
