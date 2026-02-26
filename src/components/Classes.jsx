import React from 'react';
import { ArrowRight, Clock, Users, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { classesData } from '../data/mock';
import { motion } from 'framer-motion';

export const Classes = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="classes" className="section-padding bg-white relative">
            {/* Decorative Background Text */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
                <div className="text-[20rem] font-black whitespace-nowrap tracking-tighter">
                    CULINARY ARTS • MASTERCLASS • LITTLE CHEFS •
                </div>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-xs uppercase tracking-[0.2em]"
                        >
                            Our Programs
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
                        >
                            Curated for Every <br />
                            <span className="gradient-text">Skill Level.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-subtle max-w-md leading-relaxed"
                    >
                        From kitchen beginners to aspiring master chefs, our programs are designed to inspire, educate, and empower.
                    </motion.p>
                </div>

                {/* Classes Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-5"
                    style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
                >

                    {classesData.map((classItem) => (
                        <motion.div key={classItem.id} variants={itemVariants}>
                            <Card className="group relative h-full overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(249,168,37,0.15)] transition-all duration-500 rounded-[32px] bg-white">
                                {/* Color Stripe */}
                                <div
                                    className="h-3 w-full"
                                    style={{ backgroundColor: classItem.color }}
                                />

                                <div className="p-6 flex flex-col h-full">

                                    <div className="flex justify-between items-start mb-8">
                                        <div className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white"
                                            style={{ backgroundColor: classItem.color }}>
                                            Age {classItem.ageRange}
                                        </div>
                                        <div className="text-3xl font-black text-gray-900">
                                            ${classItem.price}
                                            <span className="text-xs text-subtle font-normal block">/ session</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <h3 className="text-3xl font-black text-gray-900 group-hover:text-primary transition-colors">
                                            {classItem.title}
                                        </h3>
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest">
                                            {classItem.subtitle}
                                        </p>
                                        <p className="text-subtle leading-relaxed">
                                            {classItem.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-6 mb-8 text-xs font-bold uppercase tracking-wider text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} /> {classItem.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} /> Max {classItem.maxStudents}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {classItem.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                                <ChevronRight size={16} className="text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        onClick={scrollToContact}
                                        className="mt-auto h-14 w-full rounded-2xl bg-gray-50 text-gray-900 font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                    >
                                        Enroll Now
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Family Package - Premium Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 relative overflow-hidden rounded-[40px] bg-gradient-to-r from-gray-900 to-black p-12 lg:p-20 shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 transition-transform hover:scale-110 duration-1000">
                        <img
                            src="https://images.unsplash.com/photo-1551218808-94e220e03107?auto=format&fit=crop&q=80"
                            alt="Cooking Class"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 max-w-2xl space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest">
                            Special Family Offer
                        </div>
                        <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                            Siblings Cook <br />
                            Together & <span className="text-primary">Save.</span>
                        </h3>
                        <p className="text-xl text-gray-400">
                            Enroll multiple children from the same family and receive a 15% discount on all programs. Let the whole family join the culinary journey.
                        </p>
                        <Button
                            onClick={scrollToContact}
                            className="h-16 px-10 rounded-2xl bg-white text-gray-900 font-bold text-lg hover:bg-primary hover:text-white transition-all"
                        >
                            Claim Discount
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
