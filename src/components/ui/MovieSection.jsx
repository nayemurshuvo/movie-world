'use client';

import MovieSlider from './MovieSlider';

const MovieSection = ({
    movies = [],
    showRating = false,
    showWatchlistButton = false,
    showTrailerButton = true,
    slidesPerView = 5,
    spaceBetween = 20,
    centeredSlides = false,
    loop = true,
    onMovieClick,
    onRatingClick,
    onWatchlistClick,
    onTrailerClick,
    fromWatchlist,
}) => {
    return (
        <div className="mt-12 max-w-7xl mx-auto w-full">
            <MovieSlider
                movies={movies}
                showRating={showRating}
                showWatchlistButton={showWatchlistButton}
                showTrailerButton={showTrailerButton}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                centeredSlides={centeredSlides}
                loop={loop}
                onMovieClick={onMovieClick}
                onRatingClick={onRatingClick}
                onWatchlistClick={onWatchlistClick}
                onTrailerClick={onTrailerClick}
                fromWatchlist={fromWatchlist}
            />
        </div>
    );
};

export default MovieSection;