import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'The Cooper Family',
        content: "Our kids ask for Orange Figs every month! It's screen-free, hands-on fun that brings everyone into the kitchen. They're learning, laughing, and baking all at once!",
        rating: 5,
    },
    {
        id: 2,
        name: 'Amanda K.',
        content: "We're a homeschooling family, and this kit fits perfectly into our weekly routine. It's cooking, reading, and math all rolled into one sweet experience!",
        rating: 5,
    },
    {
        id: 3,
        name: 'Kelly Dinger.',
        content: "I bought a few kits for gifts, and now all my friends are hooked! Perfect for birthdays, holidays, or just a fun surprise.",
        rating: 5,
    },
    {
        id: 4,
        name: 'Nicole F.',
        content: "We love how Orange Figs combines fun and learning. My kids are practicing math, reading, and teamwork — and they don't even realize it. It's genius!",
        rating: 5,
    },
    {
        id: 5,
        name: 'Ben Saper.',
        content: "I gifted Orange Figs to my sister's family, and they haven't stopped raving about it. The kids loved it more than any toy. Best gift ever!",
        rating: 5,
    },
    {
        id: 6,
        name: 'Megan Aglow.',
        content: "Orange Figs turned our Sunday afternoon into the best family day ever. The kids worked together, learned patience, and had a blast. Plus, the treats came out delicious!",
        rating: 5,
    },
    {
        id: 7,
        name: 'Sarah Linter',
        content: "Orange Figs has become our favorite family tradition! The kids love measuring and mixing, and I love that it's completely screen-free fun.",
        rating: 5,
    },
    {
        id: 8,
        name: 'David Miller',
        content: "Safe, educational, and most importantly, fun. Orange Figs has nailed the balance between learning and play perfectly.",
        rating: 5,
    },
];

export const Testimonials = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScroll);
            checkScroll();
            setTimeout(checkScroll, 100);
        }
        return () => currentRef?.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.7;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="testimonials"
            className="relative lg:h-[calc(100vh-90px)] min-h-[600px] flex flex-col justify-center py-10 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #D97706 100%)',
            }}
        >
            {/* Ambient Background Glows - Hidden on mobile for performance */}
            <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
            <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-amber-300/10 blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10 w-full flex flex-col h-full">

                {/* Header Section - Strikingly Compact */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
                    <div className="space-y-2">
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/20"
                        >
                            Success Stories
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight"
                        >
                            Loved by <span className="text-amber-200 underline underline-offset-4 decoration-amber-400/50">Parents</span> & Kids.
                        </motion.h2>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all ${canScrollLeft
                                ? 'border-white/30 text-white bg-white/10 hover:bg-white hover:text-orange-600'
                                : 'border-white/5 text-white/10 cursor-not-allowed bg-transparent'
                                }`}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all ${canScrollRight
                                ? 'border-white/30 text-white bg-white/10 hover:bg-white hover:text-orange-600'
                                : 'border-white/5 text-white/10 cursor-not-allowed bg-transparent'
                                }`}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Carousel Area */}
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="min-w-[85vw] md:min-w-[340px] lg:min-w-[380px] snap-center h-full"
                        >
                            <div className="h-full bg-white/10 backdrop-blur-sm md:backdrop-blur-md border border-white/20 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 relative group hover:bg-white/15 transition-all duration-500 will-change-transform">
                                <Quote className="absolute top-8 right-8 text-white/10 group-hover:text-amber-400/20 transition-colors" size={50} />

                                <div className="flex gap-0.5 relative z-10">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-white text-lg lg:text-xl leading-relaxed italic relative z-10 font-medium tracking-tight">
                                    "{t.content}"
                                </p>

                                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-white flex items-center justify-center text-orange-600 font-extrabold text-sm shadow-xl shadow-amber-500/10">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight opacity-90">{t.name}</h4>
                                        <p className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-black">Verified Parent</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Counter / Progress indicator */}
                <div className="mt-4 flex justify-between items-center opacity-40">
                    <span className="h-px w-20 bg-white/20" />
                    <span className="text-white text-[8px] font-black uppercase tracking-[0.5em]">Swipe for {testimonials.length} Stories</span>
                    <span className="h-px w-20 bg-white/20" />
                </div>
            </div>
        </section>
    );
};
