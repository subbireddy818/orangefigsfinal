import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
    {
        id: 1,
        question: 'What age groups are your kits designed for?',
        answer: 'Our kits cater to children aged 4–17. We have three tiers: Little Chefs (4–6), Junior Culinary Arts (7–12), and Teen Masterclass (13–17). Each tier is thoughtfully designed with age-appropriate recipes, tools, and skill levels.',
    },
    {
        id: 2,
        question: 'What comes in each monthly box?',
        answer: 'Every box includes pre-measured dry ingredients, step-by-step illustrated recipe cards, a fun kitchen tool or accessory, educational cooking facts, and access to our online video tutorial for that month\'s recipe.',
    },
    {
        id: 3,
        question: 'Are the recipes allergy-friendly?',
        answer: 'We offer nut-free, gluten-free, and dairy-free alternatives for most of our recipes. During sign-up, you can specify any allergies or dietary restrictions, and we\'ll tailor your kit accordingly.',
    },
    {
        id: 4,
        question: 'Can I cancel or pause my subscription?',
        answer: 'Absolutely! You can pause or cancel your subscription at any time from your account dashboard. Monthly subscribers can cancel before the next billing date. Prepaid plans are non-refundable but can be paused.',
    },
    {
        id: 5,
        question: 'Do you ship internationally?',
        answer: 'Currently, we ship within the United States, Canada, and the United Kingdom. We\'re expanding to more countries soon! Sign up for our newsletter to stay updated on new shipping destinations.',
    },
    {
        id: 6,
        question: 'Is adult supervision required?',
        answer: 'For Little Chefs (ages 4–6), adult supervision is required throughout. For Junior Culinary Arts (7–12), we recommend adult supervision especially when using the oven or stove. Teen Masterclass participants can work more independently.',
    },
    {
        id: 7,
        question: 'Can I gift a subscription?',
        answer: 'Yes! Gift subscriptions are one of our most popular options. You can purchase 1, 3, 6, or 12-month gift plans. We\'ll include a personalized gift card and can ship directly to the recipient.',
    },
    {
        id: 8,
        question: 'What makes Orange Figs different from other cooking kits?',
        answer: 'Orange Figs was developed by Michelin-experienced chefs and child development experts. Our curriculum focuses not just on cooking, but on building confidence, nutritional literacy, and creativity. Plus, every kit includes premium, ethically-sourced ingredients.',
    },
];

const FAQItem = ({ item, isOpen, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen
                ? 'bg-orange-50/50 border border-orange-200/50 shadow-premium'
                : 'bg-white border border-gray-100 hover:border-orange-100 shadow-sm hover:shadow-md'
                }`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-7 lg:p-8 text-left gap-4 group"
            >
                <h3 className={`text-lg lg:text-xl font-black transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-gray-900'}`}>
                    {item.question}
                </h3>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-orange-500 text-white rotate-180 shadow-lg shadow-orange-500/30' : 'bg-gray-100 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-400'
                    }`}>
                    <ChevronDown size={22} strokeWidth={2.5} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const [openId, setOpenId] = useState(1);
    const half = Math.ceil(faqData.length / 2);

    return (
        <section className="py-14 lg:py-12 bg-white overflow-hidden relative">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        <HelpCircle size={14} />
                        FAQ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        Got <span className="gradient-text">Questions?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 leading-relaxed"
                    >
                        Everything you need to know about Orange Figs. Can't find your answer? <a href="#contact" className="text-orange-500 font-bold underline underline-offset-2">Contact us</a>.
                    </motion.p>
                </div>

                {/* Two Column FAQ */}
                <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        {faqData.slice(0, half).map((item) => (
                            <FAQItem
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {faqData.slice(half).map((item) => (
                            <FAQItem
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
