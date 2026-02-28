import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
    {
        id: 1,
        question: 'What age group is Orange Figs suitable for?',
        answer: 'Our programmes are designed for children aged 6 to 16 years, with sessions tailored to different age groups and skill levels.',
    },
    {
        id: 2,
        question: 'Do children need prior cooking experience?',
        answer: 'Not at all. We welcome beginners and experienced young cooks alike. Our curriculum adapts to each child\'s learning stage.',
    },
    {
        id: 3,
        question: 'Is safety ensured in the kitchen?',
        answer: 'Absolutely. All sessions are supervised by trained chefs. We maintain strict safety, hygiene and equipment guidelines appropriate for children.',
    },
    {
        id: 4,
        question: 'What is the batch size?',
        answer: 'We keep batches small to ensure individual attention, structured learning and a premium experience.',
    },
    {
        id: 5,
        question: 'What does a typical session include?',
        answer: 'Hands-on cooking, ingredient awareness, technique-building, plating, tasting and reflection — along with teamwork and discipline.',
    },
    {
        id: 6,
        question: 'Are ingredients and equipment provided?',
        answer: 'Yes. All ingredients, tools and chef aprons are provided by us.',
    },
    {
        id: 7,
        question: 'Do you accommodate dietary restrictions?',
        answer: 'Yes. Please inform us in advance about allergies or dietary preferences, and we will do our best to accommodate them.',
    },
    {
        id: 8,
        question: 'How is Summer Camp different from the Cooking Club?',
        answer: 'Summer Camp is an intensive, structured multi-day experience with restaurant exposure. The Cooking Club is a weekend-based, ongoing skill-building programme.',
    },
    {
        id: 9,
        question: 'Can parents stay during sessions?',
        answer: 'We encourage independent learning. However, parents are invited for showcase days and special events.',
    },
    {
        id: 10,
        question: 'How do I register?',
        answer: 'You can register through the website form or contact us directly via phone or WhatsApp.',
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
        <section className="pt-14 lg:pt-12 pb-8 lg:pb-10 bg-white overflow-hidden relative">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-6 space-y-4">
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
