import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import {
    UserCheck,
    ShieldCheck,
    HeartPulse,
    Award,
    Star,
    ArrowUpRight,
} from "lucide-react";

const AnimatedCounter = ({ value, suffix }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (value % 1 !== 0) {
            return latest.toFixed(1);
        }
        return Math.round(latest).toLocaleString();
    });
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, value, count]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const reasons = [
    {
        id: 1,
        icon: UserCheck,
        number: "01",
        title: "Expert Instructors",
        description:
            "Guided by Michelin-experienced chefs who specialise in child development. Certified, passionate, and dedicated to every young chef.",
        image:
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        icon: ShieldCheck,
        number: "02",
        title: "Safety First",
        description:
            "State-of-the-art kitchen with induction heating, age-appropriate tools, and strict hygiene standards.",
    },
    {
        id: 3,
        icon: HeartPulse,
        number: "03",
        title: "Healthy Habits",
        description:
            "We cultivate a love for fresh, whole ingredients and lifelong nutritional literacy.",
    },
    {
        id: 4,
        icon: Award,
        number: "04",
        title: "Award-Winning Curriculum",
        description:
            "Recognised nationally for blending creativity, nutrition, and technique.",
    },
];

const stats = [
    { value: 1200, suffix: "+", label: "Students" },
    { value: 15, suffix: "+", label: "Chefs" },
    { value: 4.9, suffix: " / 5", label: "Rating" },
    { value: 50, suffix: "+", label: "Workshops" },
    { value: 6, suffix: " yrs", label: "Excellence" },
];

export const WhyChooseUs = () => {
    return (
        <section id="why" className="bg-white pt-12 pb-0 border-t border-orange-100">
            <div className="container-custom">

                {/* HEADER */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
                    <div className="space-y-5">
                        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-orange-600 border border-orange-200 px-4 py-2 rounded-full">
                            Why Choose Us
                        </span>

                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                            The Orange Figs{" "}
                            <span className="text-orange-500">Difference</span>
                        </h2>
                    </div>

                    <p className="text-gray-500 max-w-md font-semibold text-lg leading-relaxed">
                        We don’t just teach cooking — we build confidence,
                        creativity, and habits that last a lifetime.
                        And we do it all with a dash of fun and a sprinkle of magic!
                        Our secret ingredient? Passion. We believe that cooking is an art form, a science, and a way of life.
                        We’re here to share that passion with the next generation of culinary artists.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {/* FEATURE CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 rounded-3xl overflow-hidden relative group min-h-[400px] lg:min-h-[480px] will-change-transform"
                    >
                        <img
                            src={reasons[0].image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                            <div className="flex justify-between items-center">
                                <span className="text-7xl font-black text-white/10">
                                    01
                                </span>
                                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <UserCheck size={26} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <h3 className="text-3xl font-bold">
                                    {reasons[0].title}
                                </h3>

                                <p className="text-white/80 text-sm leading-relaxed">
                                    {reasons[0].description}
                                </p>

                                <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold uppercase tracking-wide">
                                    Meet The Team <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* OTHER CARDS */}
                    <div className="lg:col-span-7 grid gap-6">
                        {reasons.slice(1).map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div
                                    key={reason.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border border-gray-100 rounded-2xl p-8 flex gap-6 items-start hover:border-orange-200 transition-all"
                                >
                                    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                                        <Icon size={26} />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* STATS */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-orange-100 pt-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-black text-orange-600">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 mt-2">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};