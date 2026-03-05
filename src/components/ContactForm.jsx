import React, { useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    User,
    Mail,
    Baby,
    Cake,
    MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// Primary recipient email
const PRIMARY_EMAIL = "go9346089096@gmail.com";
const CC_EMAILS =
    "Chakradhar@theculinarylounge.com,gopi@theculinarylounge.com,hello@theculinarylounge.com";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        childName: "",
        childAge: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${PRIMARY_EMAIL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        _subject: `New Inquiry from ${formData.parentName} - Orange Figs`,
                        _cc: CC_EMAILS,
                        "Parent's Name": formData.parentName,
                        Email: formData.email,
                        "Child's Name": formData.childName,
                        "Child's Age": formData.childAge,
                        Message: formData.message,
                        _template: "table",
                    }),
                }
            );

            const result = await response.json();

            if (result.success) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                toast.success("Inquiry Sent Successfully!", {
                    description: "We'll get back to you within 24 hours.",
                });

                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        parentName: "",
                        email: "",
                        childName: "",
                        childAge: "",
                        message: "",
                    });
                }, 5000);
            } else {
                throw new Error(result.message || "Failed to send");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            setIsSubmitting(false);
            toast.error("Failed to send inquiry", {
                description: "Please try again or contact us directly.",
            });
        }
    };

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.08 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="contact"
            className="relative min-h-[720px] md:min-h-[800px] flex items-center justify-center py-16 lg:py-24 overflow-hidden"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
            {/* Layer 1: Background image - kids cooking/celebrating */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/CL4A3492%20(2).JPG')" }}
            />

            {/* Layer 2: Soft warm gradient overlay (orange → coral/pink) */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(249,115,22,0.82) 0%, rgba(251,146,60,0.78) 25%, rgba(251,113,133,0.75) 50%, rgba(244,63,94,0.72) 100%)",
                }}
            />

            {/* Layer 2b: Subtle darkening for readability */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Subtle floating gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-30 blur-3xl animate-pulse"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,237,213,0.6) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-25 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(254,215,170,0.5) 0%, transparent 70%)",
                        animation: "pulse 6s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,228,196,0.5) 0%, transparent 60%)",
                    }}
                />
            </div>

            {/* Layer 3: Floating glassmorphism form card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 w-full max-w-[520px] mx-auto px-4 sm:px-6"
            >
                {/* Form card - glassmorphism */}
                <div
                    className="rounded-[28px] p-8 sm:p-10 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.4)]"
                    style={{
                        background: "rgba(255,255,255,0.72)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                    }}
                >
                    {/* Section header - outside card for contrast */}
                    <div className="mb-8">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/95 mb-2">
                            Contact
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                            Send an inquiry
                        </h2>
                        <p className="text-white/90 text-[15px] leading-relaxed max-w-md">
                            Share your details and we&apos;ll get back to you
                            within 24 hours.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                variants={container}
                                initial="hidden"
                                animate="show"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Two-column grid - top fields */}
                                <motion.div
                                    variants={item}
                                    className="grid sm:grid-cols-2 gap-5"
                                >
                                    <FormField
                                        label="Parent's name"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        placeholder="e.g. Sarah Johnson"
                                        icon={User}
                                        required
                                    />
                                    <FormField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        icon={Mail}
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    variants={item}
                                    className="grid sm:grid-cols-2 gap-5"
                                >
                                    <FormField
                                        label="Child's name"
                                        name="childName"
                                        value={formData.childName}
                                        onChange={handleChange}
                                        placeholder="Optional"
                                        icon={Baby}
                                    />
                                    <FormField
                                        label="Child's age"
                                        name="childAge"
                                        type="text"
                                        value={formData.childAge}
                                        onChange={handleChange}
                                        placeholder="e.g. 8"
                                        icon={Cake}
                                    />
                                </motion.div>

                                {/* Message - full width */}
                                <motion.div variants={item}>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <div className="relative">
                                        <MessageSquare
                                            className="absolute left-4 top-4 w-4 h-4 text-gray-400 pointer-events-none"
                                            strokeWidth={1.8}
                                        />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your child and what you're looking for..."
                                            required
                                            rows={4}
                                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#E5E7EB] bg-white/80 text-gray-900 placeholder:text-gray-400 resize-none text-[15px] transition-all duration-300 hover:border-gray-300 hover:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/15 outline-none"
                                        />
                                    </div>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div variants={item} className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full h-14 rounded-full font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25 active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #F97316 0%, #FB7185 50%, #F43F5E 100%)",
                                            color: "white",
                                            boxShadow:
                                                "0 4px 20px rgba(249,115,22,0.35)",
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <ArrowRight
                                                    size={20}
                                                    strokeWidth={2.5}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="text-center py-12 sm:py-14 space-y-5"
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                                    style={{
                                        background: "rgba(255,244,220,0.9)",
                                        color: "#F97316",
                                    }}
                                >
                                    <CheckCircle2 size={32} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Thank you
                                </h3>
                                <p className="text-gray-600 text-[15px] max-w-sm mx-auto leading-relaxed">
                                    Thanks
                                    {formData.parentName
                                        ? ` ${formData.parentName}`
                                        : ""}
                                    . We&apos;ll be in touch within 24 hours.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

/* Pill-shaped input with icon */
const FormField = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    icon: Icon,
    required = false,
}) => (
    <div>
        <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-2"
        >
            {label}
        </label>
        <div className="relative">
            {Icon && (
                <Icon
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    strokeWidth={1.8}
                />
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full h-12 pl-11 pr-4 rounded-full border border-[#E5E7EB] bg-white/80 text-gray-900 placeholder:text-gray-400 text-[15px] transition-all duration-300 hover:border-gray-300 hover:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/15 outline-none"
            />
        </div>
    </div>
);
