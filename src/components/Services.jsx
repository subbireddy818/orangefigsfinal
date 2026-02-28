import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Cake, Utensils, Star, Check } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: ChefHat,
        tag: 'Birthday Celebrations',
        badge: 'Immersive Culinary Parties',
        title: 'Birthday Celebrations',
        featureHeading: 'What makes it special:',
        description:
            'Give your child a birthday celebration they’ll remember for a lifetime. At Orange Figs, birthdays go beyond games and cake; they become immersive culinary experiences where kids cook, create, and celebrate together.',
        features: [
            'Themed, chef-guided cooking experiences',
            'A unique, interactive celebration format',
            'Premium, stress-free hosting',
            'Meaningful fun for kids and families',
        ],
        color: '#F97316',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
    },
    {
        id: 2,
        icon: Utensils,
        tag: 'Weekend Kids Club',
        title: 'Kids Cooking Club',
        featureHeading: 'What they learn:',
        description:
            'A weekend cooking club where kids bond over global cuisines, build real skills, and make meaningful friendships. We introduce children to their favourite kind of classroom, one where they are encouraged to experiment, make mistakes, learn techniques, and grow in confidence.',
        features: [
            'Exploration of world cuisines',
            'Kitchen skills and techniques',
            'Foundational cooking methods',
            'Ingredient awareness and flavour pairing',
        ],
        color: '#EA580C',
        image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80',
    },
    {
        id: 3,
        icon: Star,
        tag: 'Summer Camp',
        badge: 'Limited Seats',
        title: 'Orange Figs Summer Camp',
        featureHeading: 'What’s in store:',
        description:
            'Our Summer Camp is where curious kids roll up their sleeves, try new flavours, experiment boldly, and discover what they’re capable of in the kitchen. It’s hands-on, energetic, and designed to keep young minds engaged from day one. With chef-led sessions and exciting restaurant visits, children don’t just follow recipes — they experience the world of food up close.',
        features: [
            '2 weeks of structured, hands-on culinary training',
            'Learning exposure at premium restaurants',
            'Explore the world through food',
            'Skill-building, discipline and creativity wrapped in fun',
        ],
        color: '#D97706',
        image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80',
    },
    {
        id: 4,
        icon: Cake,
        tag: 'Deep-Dive Learning',
        title: 'Chef-Led Masterclasses',
        featureHeading: 'What sets it apart:',
        description:
            'Focused, high-impact culinary experiences led by expert chefs and industry professionals. These masterclasses allow children to dive deep into a cuisine, technique, or theme — guided by world-class mentors who bring real industry knowledge into the learning space.',
        features: [
            'Master one cuisine at a time',
            'Sessions led by domain experts and MasterChef-level professionals',
            'Exposure to professional kitchen standards',
            'Skill-building for serious, curious learners',
            'Go beyond basics and explore the craft with depth and discipline',
        ],
        color: '#F59E0B',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e03107?auto=format&fit=crop&q=80',
    },
];

export const Services = () => {
    const [expandedMobileCards, setExpandedMobileCards] = useState([]);

    const toggleMobileCard = (id) => {
        setExpandedMobileCards((prev) =>
            prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
        );
    };

    return (
        <section id="classes" className="bg-white pt-0 pb-8 lg:pb-12 font-andes-rounded">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-black uppercase tracking-[0.2em] text-orange-600 bg-orange-50 border border-orange-200/50 px-4 py-2 rounded-full"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight"
                    >
                        Culinary Experiences for Every <span className="gradient-text">Young Chef</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-gray-500 leading-relaxed"
                    >
                        From birthdays and weekend clubs to summer camps and masterclasses, Orange Figs offers curated culinary experiences for every age and level of curiosity.
                    </motion.p>
                </div>

                {/* MOBILE VIEW — Programs Grid (Floating styling, hidden on md) */}
                <div className="block md:hidden">
                    <div className="programs-grid gap-y-10">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="flex flex-col items-center bg-transparent min-w-0"
                            >
                                {/* Floating Image Container (NOT in a card) */}
                                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden mb-5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.15)] group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Colored Overlay Banner on Bottom Right */}
                                    {service.badge && (
                                        <div
                                            className="absolute bottom-0 right-0 px-5 py-3 rounded-tl-[1.5rem] shadow-lg flex items-center justify-center text-center"
                                            style={{ backgroundColor: service.color, minWidth: '65%' }}
                                        >
                                            <span className="text-white text-[13px] font-bold block leading-snug mx-auto">
                                                {service.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Centered Floating Content */}
                                <div className="flex flex-col items-center text-center px-1 w-full">
                                    {/* Title */}
                                    <h3 className="text-[22px] font-black text-gray-900 leading-tight mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Tag Pill */}
                                    <div className="px-5 py-1.5 rounded-full bg-[#FCF6F6] text-[#A63C4E] border border-[#F3E2E4] font-bold text-[13px] tracking-wide mb-3">
                                        {service.tag}
                                    </div>

                                    {/* Mobile description + bullets with View more / View less */}
                                    {(() => {
                                        const isExpanded = expandedMobileCards.includes(service.id);
                                        const maxChars = 110;
                                        const shouldTruncate = service.description.length > maxChars;
                                        const visibleText =
                                            !shouldTruncate || isExpanded
                                                ? service.description
                                                : service.description.substring(0, maxChars) + '...';

                                        return (
                                            <>
                                                <p className="text-[13px] font-medium text-gray-500 leading-snug max-w-[320px]">
                                                    {visibleText}
                                                </p>

                                                {isExpanded && (
                                                    <div className="mt-3 text-left w-full max-w-[340px]">
                                                        {service.featureHeading && (
                                                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-1">
                                                                {service.featureHeading}
                                                            </p>
                                                        )}
                                                        <ul className="space-y-1.5">
                                                            {service.features.map((f, i) => (
                                                                <li key={i} className="flex items-start gap-2">
                                                                    <div
                                                                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                                                                        style={{ backgroundColor: `${service.color}15` }}
                                                                    >
                                                                        <Check size={10} strokeWidth={3} style={{ color: service.color }} />
                                                                    </div>
                                                                    <span className="text-[12px] font-semibold text-gray-700 leading-snug">
                                                                        {f}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {shouldTruncate && (
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleMobileCard(service.id)}
                                                        className="mt-3 text-[12px] font-bold uppercase tracking-[0.16em] text-orange-600"
                                                    >
                                                        {isExpanded ? 'View less' : 'View more'}
                                                    </button>
                                                )}
                                            </>
                                        );
                                    })()}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* DESKTOP VIEW — Old Big Content Cards (hidden on mobile, grid on md+) */}
                <div className="hidden md:block">
                    <div className="programs-grid">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={`desktop-${service.id}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="group relative rounded-[1.25rem] overflow-hidden border border-gray-100 bg-white shadow-premium shadow-premium-hover flex flex-col min-w-0"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden shrink-0" style={{ height: 'clamp(80px, 22vw, 13rem)' }}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                        <div
                                            className="absolute top-2 left-2 px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-wider text-white backdrop-blur-md border border-white/20"
                                            style={{ backgroundColor: `${service.color}cc` }}
                                        >
                                            {service.tag}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 lg:p-8 flex flex-col gap-5 flex-1 bg-white">
                                        {/* Icon + Title */}
                                        <div className="flex flex-col gap-4 mb-2">
                                            <div
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                                                style={{ backgroundColor: service.color, boxShadow: `0 8px 24px -6px ${service.color}66` }}
                                            >
                                                <Icon size={24} strokeWidth={2.5} />
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-black text-gray-900 leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-[15px] font-medium text-gray-500 leading-relaxed border-b border-gray-100 pb-5">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3 mb-4">
                                            {service.featureHeading && (
                                                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gray-500">
                                                    {service.featureHeading}
                                                </p>
                                            )}
                                            <ul className="space-y-2">
                                                {service.features.map((f, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div
                                                            className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                                                            style={{ backgroundColor: `${service.color}15` }}
                                                        >
                                                            <Check size={12} strokeWidth={4} style={{ color: service.color }} />
                                                        </div>
                                                        <span className="text-[13px] font-semibold text-gray-700 leading-snug">
                                                            {f}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

