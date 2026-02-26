import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, ChefHat, Bell, Gift } from 'lucide-react';
import { toast } from 'sonner';

const perks = [
    { icon: Bell, text: 'New workshop announcements' },
    { icon: Gift, text: 'Exclusive subscriber discounts' },
    { icon: ChefHat, text: 'Chef-approved home recipes' },
];

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success('Welcome to the Orange Figs family! 🎉');
        setTimeout(() => { setEmail(''); setName(''); setSubmitted(false); }, 4000);
    };

    return (
        <section className="bg-white pt-4 pb-14 lg:pb-20 overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="relative rounded-[3.5rem] overflow-hidden shadow-2xl"
                    style={{
                        background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #D97706 100%)',
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-300/10 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[550px]">
                        {/* LEFT: Copy */}
                        <div className="flex flex-col justify-center p-12 lg:p-16 xl:p-20 space-y-8">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 shadow-lg"
                                >
                                    <Sparkles size={14} className="text-amber-300" />
                                    VIP Access Only
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl lg:text-7xl font-black text-white leading-[1] tracking-tighter"
                                >
                                    Get the Best <br />
                                    <span className="text-amber-200">Kits First.</span>
                                </motion.h2>
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-white/80 text-lg lg:text-xl font-medium leading-relaxed max-w-md"
                            >
                                Join our inner circle for weekly recipes, secret discounts, and early access to limited edition boxes.
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                {perks.map((perk, i) => {
                                    const Icon = perk.icon;
                                    return (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-4 text-white font-bold text-base group cursor-default"
                                        >
                                            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-orange-600 transition-all duration-300 shadow-lg">
                                                <Icon size={18} className="transition-colors group-hover:text-orange-600" />
                                            </div>
                                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">{perk.text}</span>
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>
                        </div>

                        {/* RIGHT: Form */}
                        <div className="flex items-center justify-center p-8 lg:p-16 xl:p-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden group"
                            >
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                                {submitted ? (
                                    <div className="text-center py-12 space-y-6 relative z-10">
                                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto shadow-2xl shadow-orange-500/20">
                                            <CheckCircle2 size={40} className="text-orange-500" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-black text-white tracking-tight">Welcome Home!</h3>
                                        <p className="text-white/70 font-medium">We've sent a tasty surprise to your inbox. Let's get cooking!</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-10 space-y-2 relative z-10">
                                            <h3 className="text-3xl font-black text-white tracking-tight">Become a Member</h3>
                                            <p className="text-white/60 text-[13px] font-bold uppercase tracking-widest">Joining 3,000+ happy families</p>
                                        </div>

                                        <form onSubmit={handleSubscribe} className="space-y-5 relative z-10">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full h-15 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-bold text-[15px] focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-inner"
                                                />
                                            </div>

                                            <div className="relative">
                                                <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" />
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full h-15 pl-14 pr-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-bold text-[15px] focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-inner"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full h-16 rounded-2xl bg-white text-orange-600 font-black text-base transition-all active:scale-[0.98] hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] mt-4 shadow-xl"
                                            >
                                                Start My Journey →
                                            </button>

                                            <p className="text-center text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-4">
                                                No spam. Just recipes & joy.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
