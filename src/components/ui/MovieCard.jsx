'use client';

import Image from 'next/image';
import { FiPlayCircle } from "react-icons/fi";

const MovieCard = ({
    movie,
    className = "",
    showRating = false,
    showTrailerButton = true,
    onCardClick,
    onWatchlistClick,
    onTrailerClick,
    fromWatchlist
}) => {
    return (
        <div className={`bg-gray-800 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group swiper-slide-card ${className}`}>
            <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 256px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-2 space-y-3">
                <h3
                    className="text-white font-bold text-lg leading-tight hover:text-blue-400 transition-colors cursor-pointer h-12 flex items-start"
                    onClick={() => onCardClick && onCardClick(movie)}
                >
                    {movie.title}
                </h3>

                <div className="space-y-2">
                    {showRating && movie.rating && (
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-white font-bold text-sm">{movie.rating}</span>
                            {movie.voteCount && (
                                <span className="text-gray-300 text-sm">({movie.voteCount})</span>
                            )}
                            {movie.myRating !== undefined && (
                                <div className="flex items-center">
                                    {movie.myRating > 0 ? (
                                        <svg
                                            className="w-5 h-5 text-blue-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5 text-blue-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L4.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onWatchlistClick && onWatchlistClick(movie);
                        }}
                        className="w-[90%] mx-auto rounded-full bg-gradient-to-r from-[#57b4f1] to-blue-600 hover:bg-blue-700 text-white py-2 px-4 font-medium text-sm transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                        {movie?.isInWatchlist || fromWatchlist ?
                            (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>) :
                            (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>)}

                        <span>WATCH LIST</span>
                    </button>

                    {showTrailerButton && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onTrailerClick && onTrailerClick(movie);
                            }}
                            className="w-full text-white py-2 px-1 font-medium text-sm transition-colors flex items-center justify-left space-x-2"
                        >
                            <FiPlayCircle size={20} />
                            <span>TRAILER</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;