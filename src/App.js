import React from "react";
import "./App.css";
import { Toaster } from 'sonner';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';

import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { RegistrationPopup } from './components/RegistrationPopup';
import StartJourneyBanner from './components/StartJourneyBanner';
import { Partnerships } from './components/Partnerships';
import { SocialVideos } from './components/SocialVideos';
import { FAQ } from './components/FAQ';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="App selection:bg-orange-100 selection:text-orange-600">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 origin-left z-[100]"
                style={{ scaleX }}
            />
            <div className="noise-overlay hidden md:block" />
            <RegistrationPopup />
            <Header />

            <main>
                <Hero />
                <Services />
                <HowItWorks />
                <WhyChooseUs />

                <StartJourneyBanner />
                <Partnerships />
                <Testimonials />
                <Gallery />
                <SocialVideos />
                <FAQ />
                <ContactForm />
            </main>

            <Footer />
            <ScrollToTop />
            <Toaster position="top-right" richColors />
        </div>
    );
}

export default App;
