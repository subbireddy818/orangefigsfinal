import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

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
        <section className="bg-white pt-4 pb-8 lg:pb-10 overflow-hidden">
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

                    <div className="relative z-10 flex items-center justify-center min-h-[400px] py-12 lg:py-16">
                        {/* Form */}
                        <div className="flex items-center justify-center p-8 lg:p-16 xl:p-20 w-full">
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
