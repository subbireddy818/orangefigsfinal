import React, { useRef } from "react";
import { galleryImages } from "../data/mock";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export const Gallery = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section id="gallery" className="py-10 bg-white overflow-hidden font-['Montserrat',sans-serif]">
            <div className="container-custom text-center mb-8">
                <h2 className="text-[1.2rem] md:text-3xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
                    1,200+ Little Chefs learning and enjoying every month
                </h2>
                <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                    Together, we are baking the world a better place. Become a part of the Orange Figs Community to join the fun and learn a ton.
                </p>

            </div>

            {/* Carousel Area */}
            <div className="relative w-full overflow-hidden pt-8 pb-16">

                {/* Left/Right Fading Overlays */}
                <div className="absolute top-0 bottom-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Custom arrow buttons — positioned at vertical center of carousel */}
                <button
                    ref={prevRef}
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                    aria-label="Previous"
                >
                    <ChevronLeft size={20} strokeWidth={2.5} className="text-gray-700" />
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                    aria-label="Next"
                >
                    <ChevronRight size={20} strokeWidth={2.5} className="text-gray-700" />
                </button>

                {/* Swiper 3D Coverflow */}
                <div className="px-3">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        speed={900}
                        spaceBetween={24}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        coverflowEffect={{
                            rotate: -10,
                            stretch: 0,
                            depth: 30,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        modules={[EffectCoverflow, Autoplay, Navigation]}
                        className="!py-12"
                    >
                        {[...galleryImages, ...galleryImages, ...galleryImages].map((image, i) => (
                            <SwiperSlide
                                key={`${image.id}-${i}`}
                                className="!w-[220px] md:!w-[325.16px]"
                            >
                                {({ isActive }) => (
                                    <div
                                        className="mx-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer w-full h-[360px] md:h-[381.4px] transition-transform duration-700 ease-out"
                                        style={{
                                            willChange: 'transform, opacity',
                                            transform: isActive ? 'scale(1)' : 'scale(0.85)',
                                            opacity: 1,
                                        }}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};