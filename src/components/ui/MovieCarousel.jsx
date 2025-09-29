'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import Link from 'next/link';

const sampleMovies = [
    {
        id: 1,
        title: "Spider-Man: No Way Home",
        posterPath: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
    {
        id: 2,
        title: "The Batman",
        posterPath: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    },
    {
        id: 3,
        title: "Top Gun: Maverick",
        posterPath: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    },
    {
        id: 4,
        title: "Avatar: The Way of Water",
        posterPath: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    },
    {
        id: 5,
        title: "Black Panther: Wakanda Forever",
        posterPath: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    },
    {
        id: 6,
        title: "Doctor Strange in the Multiverse of Madness",
        posterPath: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    },
    {
        id: 7,
        title: "Thor: Love and Thunder",
        posterPath: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    },
    {
        id: 8,
        title: "Minions: The Rise of Gru",
        posterPath: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    }
];

const MovieCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative overflow-hidden py-8 mt-4">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                    const newIndex = swiper.realIndex || swiper.activeIndex;
                    setActiveIndex(newIndex);
                }}
                className="movie-carousel-swiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                {sampleMovies.map((movie, index) => (
                    <SwiperSlide key={`${movie.id}-${index}`}>
                        <Link href={`/movies/${movie.id}`}>
                            <div
                                className="relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group swiper-slide-card"
                            >
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                                    alt={movie.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 256px, 256px"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                                <div className="absolute -bottom-0 left-0 right-0">
                                    <div className="backdrop-blur-xs bg-black/20 border border-white/20 p-2">
                                        <h3 className="text-white font-bold text-lg text-center leading-tight">
                                            {movie.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieCarousel;