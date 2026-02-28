import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/oflogo.png';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                window.history.pushState(null, '', `#${sectionId}`);
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    };

    const navItems = [
        { label: 'Our Services', id: 'services' },
        { label: 'How It Works', id: 'how-it-works' },
        { label: 'Why Us', id: 'why' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-visible ${isScrolled
                ? 'glass-header shadow-premium'
                : 'bg-transparent'
                }`}
        >
            <header
                style={{ backdropFilter: isScrolled ? 'blur(20px)' : 'none' }}
                className="max-w-[1440px] mx-auto px-6 lg:px-12 py-1.5"
            >
                <div className="flex items-center justify-between min-h-[56px]">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="relative -my-1">
                            <img src={logo} alt="Logo" className="w-14 h-14 lg:w-16 lg:h-16 object-contain relative z-10" />
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={`#${item.id}`}
                                onClick={closeMenu}
                                className="relative px-5 py-2 text-[13px] font-extrabold text-gray-600 hover:text-orange-600 transition-all duration-300 group"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <span
                                    className="absolute bottom-1 left-3 right-3 h-[4px] bg-orange-500/20 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left block"
                                />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            asChild
                            className="h-11 px-8 rounded-full bg-gray-900 hover:bg-orange-600 text-white font-extrabold text-sm shadow-premium hover:shadow-orange-500/25 transition-all duration-500 border-0 overflow-hidden group relative"
                        >
                            <a href="#contact">
                                <span className="relative z-10">Get Started Free</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </a>
                        </Button>
                    </div>

                    {/* Mobile */}
                    <button
                        type="button"
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden overflow-hidden bg-white border-t border-orange-100">
                        <div className="px-6 py-6 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={`#${item.id}`}
                                    onClick={(e) => scrollToSection(e, item.id)}
                                    className="text-left text-lg font-extrabold text-gray-900 py-3 px-4 rounded-2xl hover:bg-orange-50 transition-colors block"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button
                                asChild
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className="mt-2 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-base"
                            >
                                <a href="#contact">Get Started Free</a>
                            </Button>
                        </div>
                    </div>
                )}
            </header>
        </nav>
    );
};
