import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Package, ChefHat, PartyPopper } from 'lucide-react';

// Brand color palette
const steps = [
    {
        id: 1,
        icon: ClipboardList,
        title: 'Subscribe',
        description: 'Pick a monthly, quarterly, or annual plan that suits your family best. Quick signup — takes under 2 minutes.',
        color: '#FA4A38',
        light: '#FFE5E2',
    },
    {
        id: 2,
        icon: Package,
        title: 'Receive Your Kit',
        description: 'A beautifully packaged box arrives at your door with recipes, tools, pre-measured ingredients, and access to video tutorials.',
        color: '#FCAB52',
        light: '#FFF4DC',
    },
    {
        id: 3,
        icon: ChefHat,
        title: 'Cook Together',
        description: 'Follow the step-by-step recipe cards as a family. Each kit is designed for kids aged 4–17 with clear, illustrated instructions.',
        color: '#3BC7D5',
        light: '#E0F7FA',
    },
    {
        id: 4,
        icon: PartyPopper,
        title: 'Share & Celebrate',
        description: 'Enjoy your creation together! Share photos, earn badges, and join our online community of young chefs around the world.',
        color: '#74B842',
        light: '#E8F5E0',
    },
];

export const HowItWorks = () => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
        <section id="how-it-works" className="pt-14 lg:pt-20 pb-8 lg:pb-12 bg-white overflow-hidden">
            <style>{`
                .section-heading { opacity: 0; transform: translateY(20px); transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s; margin-bottom: 16px; }
                .section-heading.on { opacity: 1; transform: translateY(0); }
                .section-label { opacity: 0; transform: translateY(12px); transition: all 0.6s ease 0.35s; }
                .section-label.on { opacity: 1; transform: translateY(0); }
            `}</style>

            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className={`section-heading ${visible ? "on" : ""}`}>
                        How It <span className="grad">Works</span>
                    </h2>
                    <p className={`section-label ${visible ? "on" : ""}`}>Four Simple Steps</p>
                </div>

                {/* Timeline — vertical on mobile, horizontal on desktop */}
                <div className="relative max-w-4xl mx-auto pl-8 lg:pl-0">
                    {/* Connecting line - brand colors gradient */}
                    <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-[3px] bg-gradient-to-r from-[#FA4A38] via-[#3BC7D5] to-[#74B842] z-0 rounded-full opacity-30" />
                    <div className="lg:hidden absolute top-0 bottom-0 left-4 w-[3px] bg-gradient-to-b from-[#FA4A38] via-[#3BC7D5] to-[#74B842] z-0 rounded-full opacity-30" />

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
                                    <div 
                                        className="lg:hidden absolute -left-6 top-[30px] w-4 h-4 rounded-full blur-sm animate-pulse"
                                        style={{ backgroundColor: step.color }}
                                    />

                                    <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-6 lg:text-center">
                                        {/* Circle with brand color background */}
                                        <div className="relative shrink-0">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 relative z-10"
                                                style={{ 
                                                    background: step.light,
                                                    border: `2px solid ${step.color}40`
                                                }}
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
                                                style={{ backgroundColor: step.light }}
                                            />
                                        </div>

                                        {/* Text Section */}
                                        <div className="space-y-2 pt-1">
                                            <h3 
                                                className="text-xl font-black tracking-tight leading-tight transition-colors"
                                                style={{ color: step.color }}
                                            >
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
