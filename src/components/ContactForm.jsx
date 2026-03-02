import React, { useState, useEffect } from "react";
import {
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// Primary recipient email
const PRIMARY_EMAIL = "go9346089096@gmail.com";
// CC email (will also receive the form submission)
const CC_EMAIL = "Chakradhar@theculinarylounge.com";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focused, setFocused] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        childName: "",
        childAge: "",
        selectedClass: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Using FormSubmit.co - free email service, no signup required
            const response = await fetch(`https://formsubmit.co/ajax/${PRIMARY_EMAIL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    _subject: `New Inquiry from ${formData.parentName} - Orange Figs`,
                    _cc: CC_EMAIL,
                    "Parent's Name": formData.parentName,
                    "Email": formData.email,
                    "Child's Name": formData.childName,
                    "Child's Age": formData.childAge,
                    "Message": formData.message,
                    _template: "table",
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log('Email sent successfully:', result);
                
                setIsSubmitting(false);
                setIsSubmitted(true);

                toast.success("Inquiry Sent Successfully!", {
                    description: "We'll get back to you within 24 hours.",
                });

                // Auto-revert to form after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        parentName: "",
                        email: "",
                        childName: "",
                        childAge: "",
                        selectedClass: "",
                        message: "",
                    });
                }, 5000);
            } else {
                throw new Error(result.message || "Failed to send");
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            setIsSubmitting(false);
            toast.error("Failed to send inquiry", {
                description: "Please try again or contact us directly.",
            });
        }
    };

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="contact" className="relative pt-12 pb-8 lg:pb-10 bg-white overflow-hidden">
            <style>{`
                .contact-heading {
                    font-family: 'AndesRounded', system-ui, sans-serif;
                    font-size: clamp(28px, 5vw, 46px);
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    color: #1a1020;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s;
                    margin-bottom: 16px;
                }
                .contact-heading.on { opacity: 1; transform: translateY(0); }
                .contact-heading .grad {
                    background: linear-gradient(135deg, #FF6B1A, #F43F8A);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .contact-label {
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
                }
                .contact-label.on { opacity: 1; transform: translateY(0); }
            `}</style>

            {/* Premium ambient lighting */}
            <div className="absolute top-[-200px] left-1/4 w-[700px] h-[700px] bg-orange-200/30 rounded-full blur-[180px]" />
            <div className="absolute bottom-[-150px] right-1/4 w-[600px] h-[600px] bg-orange-300/20 rounded-full blur-[180px]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-center">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-5 space-y-6">
                        <p className={`contact-label ${visible ? "on" : ""}`}>Direct Inquiry</p>
                        <h2 className={`contact-heading ${visible ? "on" : ""}`}>
                            Start Your <span className="grad">Culinary Voyage</span>
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed max-w-md" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
                            Experience the difference. Book a trial or send your
                            questions — we respond within 24 hours.
                        </p>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <Card className="p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-orange-100/60 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_50px_140px_rgba(0,0,0,0.12)]">

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        onSubmit={handleSubmit}
                                        className="space-y-10"
                                    >
                                        <motion.div variants={item} className="grid md:grid-cols-2 gap-5 md:gap-8">
                                            <FloatingInput
                                                label="Parent's Name"
                                                name="parentName"
                                                value={formData.parentName}
                                                onChange={handleChange}
                                                focused={focused}
                                                setFocused={setFocused}
                                            />
                                            <FloatingInput
                                                label="Email Address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                focused={focused}
                                                setFocused={setFocused}
                                            />
                                        </motion.div>

                                        <motion.div variants={item} className="grid md:grid-cols-2 gap-5 md:gap-8">
                                            <FloatingInput
                                                label="Child's Name"
                                                name="childName"
                                                value={formData.childName}
                                                onChange={handleChange}
                                                focused={focused}
                                                setFocused={setFocused}
                                            />
                                            <FloatingInput
                                                label="Age"
                                                name="childAge"
                                                type="number"
                                                value={formData.childAge}
                                                onChange={handleChange}
                                                focused={focused}
                                                setFocused={setFocused}
                                            />
                                        </motion.div>

                                        <motion.div variants={item}>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your Message"
                                                required
                                                className="w-full min-h-[130px] p-6 rounded-2xl border border-gray-200 focus:border-orange-500 focus:ring-4 ring-orange-100 transition-all resize-none font-medium"
                                            />
                                        </motion.div>

                                        <motion.div variants={item}>
                                            <Button
                                                disabled={isSubmitting}
                                                className="w-full h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-orange-400/40 transition-all group"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-3">
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-3">
                                                        Request My Free Trial
                                                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                                                    </span>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-24 space-y-8"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 180 }}
                                            className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto"
                                        >
                                            <CheckCircle2 size={48} />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold">
                                            Inquiry Received
                                        </h3>
                                        <p className="text-gray-500">
                                            Thanks {formData.parentName}! We'll contact you shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

/* Floating Label Input */
const FloatingInput = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    focused,
    setFocused,
}) => {
    const isActive = focused === name || value.length > 0;

    return (
        <div className="relative">
            <motion.label
                animate={{
                    top: isActive ? "8px" : "50%",
                    fontSize: isActive ? "12px" : "15px",
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-6 -translate-y-1/2 text-gray-400 pointer-events-none"
            >
                {label}
            </motion.label>
            <input
                name={name}
                type={type}
                value={value}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                onChange={onChange}
                required
                className="w-full h-16 px-6 pt-6 rounded-2xl border border-gray-200 focus:border-orange-500 focus:ring-4 ring-orange-100 transition-all font-medium"
            />
        </div>
    );
};