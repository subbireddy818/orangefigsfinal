import React, { useState, useEffect } from 'react';
import { stats } from '../data/mock';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter = ({ target, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            const duration = 2000;
            let timer = setInterval(() => {
                start += end / (duration / 16);
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-5xl lg:text-7xl font-black tracking-tighter">
            {count}{suffix}
        </span>
    );
};

export const About = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden" ref={sectionRef}>
            <style>{`
                .about-heading {
                    font-family: 'AndesRounded', system-ui, sans-serif;
                    font-size: clamp(28px, 5vw, 46px);
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    color: #1a1020;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s;
                }
                .about-heading.on { opacity: 1; transform: translateY(0); }
                .about-heading .grad {
                    background: linear-gradient(135deg, #FF6B1A, #F43F8A);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .about-label {
                    font-family: 'AndesRounded', system-ui, sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #FF6B1A;
                    opacity: 0;
                    transform: translateY(12px);
                    transition: all 0.6s ease 0.35s;
                    margin-bottom: 16px;
                    display: inline-block;
                }
                .about-label.on { opacity: 1; transform: translateY(0); }
            `}</style>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Image Montage or Premium Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-[60px] overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80"
                                alt="Culinary Workshop"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
                        </div>

                        {/* Decorative Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full flex items-center justify-center p-4 shadow-xl border-8 border-white uppercase text-center"
                        >
                            <div className="text-xs font-black tracking-widest text-gray-900 leading-tight">
                                Established <br />
                                <span className="text-2xl text-primary">2018</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <p className={`about-label ${visible ? "on" : ""}`}>Our Philosophy</p>
                            <h2 className={`about-heading ${visible ? "on" : ""}`}>
                                Where Small Hands Create <span className="grad">Big Flavor.</span>
                            </h2>
                            <p className="text-xl text-subtle leading-relaxed italic border-l-4 border-primary pl-6">
                                "Orange Figs was born from a simple belief: every child is an artist, and the kitchen is the most flavorful studio."
                            </p>
                            <p className="text-lg text-subtle leading-relaxed">
                                Our curriculum isn't just about recipes—it's about building confidence, fostering curiosity, and teaching the essential life skills of nutrition and cooperation in a world-class environment.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="space-y-2"
                                >
                                    <div className="gradient-text">
                                        <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
