import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Package, ChefHat, PartyPopper } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: ClipboardList,
        title: 'Subscribe',
        description: 'Pick a monthly, quarterly, or annual plan that suits your family best. Quick signup — takes under 2 minutes.',
        color: '#F97316',
    },
    {
        id: 2,
        icon: Package,
        title: 'Receive Your Kit',
        description: 'A beautifully packaged box arrives at your door with recipes, tools, pre-measured ingredients, and access to video tutorials.',
        color: '#EA580C',
    },
    {
        id: 3,
        icon: ChefHat,
        title: 'Cook Together',
        description: 'Follow the step-by-step recipe cards as a family. Each kit is designed for kids aged 4–17 with clear, illustrated instructions.',
        color: '#D97706',
    },
    {
        id: 4,
        icon: PartyPopper,
        title: 'Share & Celebrate',
        description: 'Enjoy your creation together! Share photos, earn badges, and join our online community of young chefs around the world.',
        color: '#F59E0B',
    },
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="pt-14 lg:pt-20 pb-8 lg:pb-12 bg-[#FFFBF5] overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-white text-orange-600 font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        Four Simple <span className="gradient-text">Steps</span>
                    </motion.h2>
                </div>

                {/* Timeline — vertical on mobile, horizontal on desktop */}
                <div className="relative max-w-4xl mx-auto pl-8 lg:pl-0">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-amber-200 z-0" />
                    <div className="lg:hidden absolute top-0 bottom-0 left-4 w-[2px] bg-gradient-to-b from-orange-200 via-orange-300 to-amber-200 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.2 * index, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                    className="relative group"
                                >
                                    {/* Connectivity indicators for mobile */}
                                    <div className="lg:hidden absolute -left-6 top-[30px] w-4 h-4 rounded-full bg-orange-200 blur-sm animate-pulse" />

                                    <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-6 lg:text-center">
                                        {/* Circle with animated glow */}
                                        <div className="relative shrink-0">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center bg-white border-2 shadow-premium group-hover:shadow-lg transition-all duration-500 relative z-10"
                                                style={{ borderColor: `${step.color}33` }}
                                            >
                                                <Icon size={28} strokeWidth={2} style={{ color: step.color }} />
                                            </motion.div>

                                            {/* Step ID badge */}
                                            <div
                                                className="absolute -top-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center text-white text-[12px] font-black shadow-lg z-20"
                                                style={{ backgroundColor: step.color }}
                                            >
                                                {step.id}
                                            </div>

                                            {/* Background pulse effect */}
                                            <div
                                                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                                style={{ backgroundColor: step.color }}
                                            />
                                        </div>

                                        {/* Text Section */}
                                        <div className="space-y-2 pt-1">
                                            <h3 className="text-xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                                                {step.description}
                                            </p>
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
