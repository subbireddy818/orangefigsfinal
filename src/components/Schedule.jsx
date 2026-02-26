import React from 'react';
import { scheduleData } from '../data/mock';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Schedule = () => {
    return (
        <section id="schedule" className="section-padding bg-white relative overflow-hidden">
            {/* Background Decorative Circles Removed */}

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
                            Class Schedule
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
                        >
                            Planned for <br />
                            <span className="gradient-text">Busy Families.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Schedule Grid */}
                <div className="grid lg:grid-cols-3 gap-10">
                    {scheduleData.map((dayData, dayIndex) => (
                        <motion.div
                            key={dayData.day}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * dayIndex }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white">
                                    <Calendar size={24} />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 tracking-tight">{dayData.day}</h3>
                            </div>

                            <div className="space-y-6">
                                {dayData.sessions.map((session, sessionIndex) => (
                                    <motion.div
                                        key={session.id}
                                        whileHover={{ x: 10 }}
                                        className="p-8 rounded-[2rem] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-primary/10 group"
                                    >
                                        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-4">
                                            <Clock size={14} /> {session.time}
                                        </div>
                                        <h4 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors mb-2">
                                            {session.class}
                                        </h4>
                                        <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                                            Enrollment Open <ChevronRight size={12} className="text-primary" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Private Bookings Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 lg:p-16 rounded-[40px] bg-white border-2 border-dashed border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-10"
                >
                    <div className="space-y-4 text-center lg:text-left">
                        <h3 className="text-3xl font-black text-gray-900">Need a Custom Time?</h3>
                        <p className="text-xl text-subtle max-w-xl">
                            We offer private group workshops and birthday parties on Fridays and Sundays. Contact us to reserve your date.
                        </p>
                    </div>
                    <button className="h-16 px-10 rounded-2xl bg-gray-900 text-white font-black text-lg hover:bg-primary transition-all shadow-xl hover:shadow-2xl">
                        Inquire Private Event
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
