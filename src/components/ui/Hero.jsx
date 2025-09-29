'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroBanner = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const featuredMovies = [
        {
            id: 1,
            title: "Spider-Man: Across the Spider-Verse",
            backdropPath: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            posterPath: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        },
        {
            id: 2,
            title: "John Wick: Chapter 4",
            backdropPath: "/h7dZpJDORYs5c56dydbrLFkEXpE.jpg",
            posterPath: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        },
        {
            id: 3,
            title: "Oppenheimer",
            backdropPath: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
            posterPath: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        },
        {
            id: 4,
            title: "Barbie",
            backdropPath: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
            posterPath: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        }
    ];

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
                navigation={{
                    nextEl: '.hero-button-next',
                    prevEl: '.hero-button-prev',
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                onSlideChange={handleSlideChange}
                className="h-full"
            >
                {featuredMovies.map((movie, index) => (
                    <SwiperSlide key={movie.id}>
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0">
                                <Image
                                    src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                                    alt={movie.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    quality={95}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            <div className="relative z-10 h-full flex items-center">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                        <div className="max-w-2xl text-left">
                                            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0399FA] mb-6 space-y-4">
                                                <h1>BEST WAY OF</h1>
                                                <h1>ENTERTAINMENT</h1>
                                            </div>
                                            <div className='my-10'>
                                                <h3 className='text-[28px] font-bold text-white'>MOVIES AS YOU DEMAND AT USD</h3>
                                                <h3 className='text-[28px] font-bold text-yellow-500'>10/MONTH</h3>
                                            </div>


                                        </div>

                                        <div className="hidden lg:flex justify-center items-center relative">
                                            <div className="relative w-80 h-[480px] animate-fadeIn">
                                                <button className="hero-button-prev cursor-pointer absolute -left-7 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/70 text-blue-500 p-3 rounded-lg transition-all z-30 backdrop-blur-sm">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                                                    alt={`${movie.title} poster`}
                                                    fill
                                                    className="object-cover rounded-xl shadow-2xl"
                                                    priority={index === 0}
                                                />
                                                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
                                                <button className="hero-button-next cursor-pointer absolute -right-7 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/70 text-blue-500 p-3 rounded-lg transition-all z-30 backdrop-blur-sm">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button className="cursor-pointer absolute left-45 -bottom-12 bg-gradient-to-r from-[#57b4f1] to-blue-600 text-white font-semibold text-lg transform -translate-y-1/2 px-16 py-3 rounded-full transition-all z-30 backdrop-blur-sm">
                                                WATCH NOW
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="lg:hidden">
                <button className="hero-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all z-30 backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="hero-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all z-30 backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default HeroBanner;