import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
    {
        id: 'monthly',
        name: 'Starter',
        price: 34.99,
        period: '/month',
        description: 'Perfect for trying us out.',
        features: [
            '1 themed baking kit',
            'Step-by-step recipe cards',
            'Kitchen tools included',
            'Online video tutorials',
            'Community access',
        ],
        highlight: false,
    },
    {
        id: 'quarterly',
        name: 'Family Favorite',
        price: 29.99,
        period: '/month',
        description: 'Best balance of value & flexibility.',
        features: [
            'Everything in Starter',
            '3 months prepaid (save 14%)',
            'Bonus seasonal recipe e-book',
            'Priority support',
            'Exclusive member badges',
            'Early access to new kits',
        ],
        highlight: true,
        badge: 'Most Popular',
    },
    {
        id: 'annual',
        name: 'Chef Pro',
        price: 24.99,
        period: '/month',
        description: 'Maximum value — 2 months free.',
        features: [
            'Everything in Family Favorite',
            '12 months prepaid (save 29%)',
            '2 months free',
            'Free birthday kit upgrade',
            'VIP workshop invitations',
            'Annual chef certificate',
        ],
        highlight: false,
    },
];

export const Pricing = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="pricing" className="pt-14 lg:pt-20 pb-8 lg:pb-12 bg-white overflow-hidden relative">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        Pricing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        Simple, Honest <span className="gradient-text">Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-gray-500 leading-relaxed"
                    >
                        All plans include free shipping and a 100% satisfaction guarantee. Cancel anytime.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className={`relative rounded-[2rem] flex flex-col transition-all duration-300 ${plan.highlight
                                    ? 'bg-gray-900 text-white shadow-2xl shadow-gray-900/20 ring-2 ring-orange-500/40 lg:scale-[1.03]'
                                    : 'bg-white border border-gray-100 hover:border-orange-200/60 hover:shadow-lg'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                                    <Sparkles size={11} />
                                    {plan.badge}
                                </div>
                            )}

                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-6">
                                    <h3 className={`text-lg font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm mt-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                                        ${plan.price}
                                    </span>
                                    <span className={`text-sm font-bold ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {plan.period}
                                    </span>
                                </div>

                                <div className={`h-px mb-6 ${plan.highlight ? 'bg-white/10' : 'bg-gray-100'}`} />

                                <ul className="space-y-3 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? 'bg-orange-500' : 'bg-orange-100'
                                                }`}>
                                                <Check size={10} className={plan.highlight ? 'text-white' : 'text-orange-600'} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={scrollToContact}
                                    className={`mt-8 w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] group ${plan.highlight
                                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                        }`}
                                >
                                    Get Started
                                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-gray-400 text-xs font-medium mt-8"
                >
                    All prices in USD. Billed according to your selected plan.
                </motion.p>
            </div>
        </section>
    );
};
