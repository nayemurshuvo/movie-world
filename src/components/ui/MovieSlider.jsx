'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';

import 'swiper/css';
import 'swiper/css/navigation';

const MovieSlider = ({
    movies = [],
    showRating = false,
    showWatchlistButton = false,
    showTrailerButton = true,
    slidesPerView = 5,
    spaceBetween = 20,
    centeredSlides = false,
    loop = true,
    className = "",
    onMovieClick,
    onRatingClick,
    onWatchlistClick,
    onTrailerClick,
    fromWatchlist
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const swiperProps = {
        modules: [Navigation],
        slidesPerView,
        spaceBetween,
        centeredSlides,
        loop: loop && movies.length > slidesPerView,
        navigation: false,
        onBeforeInit: (swiper) => {
            swiperRef.current = swiper;
        },
        onSlideChange: (swiper) => {
            const newIndex = swiper.realIndex || swiper.activeIndex;
            setActiveIndex(newIndex);
        },
        className: `movie-slider-swiper ${className}`,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1024: {
                slidesPerView,
                spaceBetween,
                centeredSlides: false,
            },
        }
    };

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    if (!movies || movies.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 text-gray-500">
                No movies to display
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white hover:bg-gray-300 text-blue-600 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white hover:bg-gray-300 text-blue-600 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="px-6">
                <Swiper {...swiperProps}>
                    {movies.map((movie, index) => (
                        <SwiperSlide key={`${movie.id}-${index}`}>
                            <MovieCard
                                movie={movie}
                                showRating={showRating}
                                showWatchlistButton={showWatchlistButton}
                                showTrailerButton={showTrailerButton}
                                onCardClick={onMovieClick}
                                onRatingClick={onRatingClick}
                                onWatchlistClick={onWatchlistClick}
                                onTrailerClick={onTrailerClick}
                                fromWatchlist={fromWatchlist}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default MovieSlider;