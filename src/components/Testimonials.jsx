import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const parentTestimonials = [
    {
        id: 1,
        name: 'Samatha Tulla',
        role: 'Mother of Virender (8 years old)',
        content: "The programme helped my son give shape to his restaurant dream. Earlier, he struggled to express himself; now he can cook daily for our entire joint family, even our staff. I've seen confidence, clarity and purpose grow in him. The impact has been truly positive.",
        rating: 5,
    },
    {
        id: 2,
        name: 'Mamatha Madireddy',
        role: 'Mother of Dushyant (12 years old)',
        content: "Dushyant has always loved TCL, but after the summer programme, his understanding of food deepened remarkably. He now speaks about ingredients, sourcing and nutrition with clarity and detail. I'm incredibly happy to see how informed and passionate he has become.",
        rating: 5,
    },
    {
        id: 3,
        name: 'Sulogna Gupta',
        role: 'Mother of Ayushi (14 years old)',
        content: "Ayushi was always passionate about cooking, but TCL gave her direction. I've seen her become more patient, process-oriented and confident. She now understands that cooking is a complete journey, not just a dish. It's helping her move closer to her dream of becoming a chef.",
        rating: 5,
    },
    {
        id: 4,
        name: 'Keerti',
        role: 'Mother of Ritika',
        content: "This experience transformed Ritika. She found genuine passion and confidence in cooking like never before. Now she cooks independently at home, even earning and reinvesting her money into ingredients. I've seen remarkable growth, dedication and joy; something she hadn't discovered elsewhere.",
        rating: 5,
    },
];

const chefTestimonials = [
    {
        id: 5,
        name: 'Ronit',
        role: '13 years old',
        content: "Cooking has always excited me, but this programme showed me there's so much more to food than just recipes. I discovered the science, nutrition and friendships that come with it. Meeting inspiring chefs strengthened my dream of becoming an Italian chef and earning a place on TCL's chef wall.",
        rating: 5,
    },
    {
        id: 6,
        name: 'Nidhi',
        role: '13 years old',
        content: "Through the Summer Programme, I experienced how a professional kitchen truly works. I learnt advanced techniques and loved the cook-off challenge — it taught me confidence under pressure. Baking week strengthened my dream of opening my own bakery and proved big wonders can begin in small kitchens.",
        rating: 5,
    },
    {
        id: 7,
        name: 'Arjun',
        role: '9 years old',
        content: "I joined to gain hands-on cooking experience for my future food truck dream. The programme was fun, practical and inspiring. I made great friends and gained clarity about my ideas. Now, I feel more confident and excited to start shaping my food truck venture soon.",
        rating: 5,
    },
];

const TestimonialCard = ({ t, i }) => (
    <motion.div
        key={t.id}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="min-w-[85vw] md:min-w-[340px] lg:min-w-[380px] snap-center"
    >
        <div className="h-full bg-white/10 backdrop-blur-sm md:backdrop-blur-md border border-white/20 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 relative group hover:bg-white/15 transition-all duration-500">
            <Quote className="absolute top-8 right-8 text-white/10 group-hover:text-amber-400/20 transition-colors" size={50} />

            <div className="flex gap-0.5 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
            </div>

            <p className="text-white text-base lg:text-lg leading-relaxed italic relative z-10 font-medium tracking-tight">
                "{t.content}"
            </p>

            <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-white flex items-center justify-center text-orange-600 font-extrabold text-sm shadow-xl">
                    {t.name[0]}
                </div>
                <div>
                    <h4 className="text-white font-bold tracking-tight opacity-90">{t.name}</h4>
                    <p className="text-white/60 text-[11px] tracking-wide font-medium">{t.role}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const CarouselSection = ({ title, items }) => {
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
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -clientWidth * 0.7 : clientWidth * 0.7,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="mb-12">
            <div className="flex items-end justify-between mb-6 gap-4">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl lg:text-3xl font-black text-white tracking-tight"
                >
                    {title}
                </motion.h3>
                <div className="flex gap-2 shrink-0">
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
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((t, i) => (
                    <TestimonialCard key={t.id} t={t} i={i} />
                ))}
            </div>
        </div>
    );
};

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative min-h-[600px] flex flex-col justify-center py-14 lg:py-20 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #D97706 100%)',
            }}
        >
            <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
            <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-amber-300/10 blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10 w-full">
                <div className="mb-10 space-y-2">
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

                <CarouselSection title="What Parents Say" items={parentTestimonials} />
                <CarouselSection title="What Our Young Chefs Say" items={chefTestimonials} />
            </div>
        </section>
    );
};
