'use client';

import Enjoy from "@/components/ui/Enjoy";
import HeroBanner from "@/components/ui/Hero";
import MovieCarousel from "@/components/ui/MovieCarousel";
import MovieSection from "@/components/ui/MovieSection";
import Image from "next/image";

const ratedMovies = [
    {
        id: 9,
        title: "Joker",
        posterPath: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        rating: 4.5,
        myRating: 5,
        voteCount: "1.2M",
        releaseYear: 2019,
        genre: "Drama",
        duration: "2h 2m",
        description: "A gritty character study of Arthur Fleck, a man disregarded by society.",
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        isInWatchlist: true,
    },
    {
        id: 10,
        title: "Avengers: Endgame",
        posterPath: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        rating: 4.8,
        myRating: 0,
        voteCount: "2.1M",
        releaseYear: 2019,
        genre: "Action",
        duration: "3h 1m",
        description: "The culmination of 22 films, the fourth installment of the Avengers saga.",
        director: "Anthony Russo, Joe Russo",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        isInWatchlist: true,
    },
    {
        id: 11,
        title: "Inception",
        posterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        rating: 4.7,
        voteCount: "1.8M",
        releaseYear: 2010,
        genre: "Sci-Fi",
        duration: "2h 28m",
        description: "A thief who steals corporate secrets through dream-sharing technology.",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
        isInWatchlist: false,
    },
    {
        id: 12,
        title: "The Dark Knight",
        posterPath: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: 4.9,
        myRating: 5,
        voteCount: "2.5M",
        releaseYear: 2008,
        genre: "Action",
        duration: "2h 32m",
        description: "Batman faces the Joker, a criminal mastermind who wreaks havoc on Gotham.",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        isInWatchlist: true,
    },
    {
        id: 13,
        title: "Interstellar",
        posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: 4.6,
        myRating: 0,
        voteCount: "1.5M",
        releaseYear: 2014,
        genre: "Sci-Fi",
        duration: "2h 49m",
        description: "A team of explorers travel through a wormhole in space.",
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        isInWatchlist: false,
    },
    {
        id: 19,
        title: "Pulp Fiction",
        posterPath: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        rating: 4.8,
        myRating: 4,
        voteCount: "1.9M",
        releaseYear: 1994,
        genre: "Crime",
        duration: "2h 34m",
        description: "The lives of two mob hitmen, a boxer, and others intertwine.",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
        isInWatchlist: true,
    },
    {
        id: 20,
        title: "The Matrix",
        posterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        rating: 4.6,
        myRating: 0,
        voteCount: "1.7M",
        releaseYear: 1999,
        genre: "Sci-Fi",
        duration: "2h 16m",
        description: "A computer programmer discovers reality is a simulation.",
        director: "The Wachowskis",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        isInWatchlist: true,
    },
    {
        id: 21,
        title: "Forrest Gump",
        posterPath: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        rating: 4.7,
        voteCount: "1.6M",
        releaseYear: 1994,
        genre: "Drama",
        duration: "2h 22m",
        description: "The presidencies of Kennedy and Johnson through the eyes of an Alabama man.",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        isInWatchlist: false,
    },
    {
        id: 22,
        title: "The Godfather",
        posterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        rating: 4.9,
        myRating: 5,
        voteCount: "1.4M",
        releaseYear: 1972,
        genre: "Crime",
        duration: "2h 55m",
        description: "The aging patriarch of an organized crime dynasty transfers control.",
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        isInWatchlist: true,
    },
    {
        id: 23,
        title: "Goodfellas",
        posterPath: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        rating: 4.5,
        myRating: 4,
        voteCount: "1.1M",
        releaseYear: 1990,
        genre: "Crime",
        duration: "2h 26m",
        description: "The story of Henry Hill and his life in the mob.",
        director: "Martin Scorsese",
        cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        isInWatchlist: false,
    },
    {
        id: 24,
        title: "Fight Club",
        posterPath: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        rating: 4.6,
        myRating: 5,
        voteCount: "1.3M",
        releaseYear: 1999,
        genre: "Drama",
        duration: "2h 19m",
        description: "An insomniac office worker forms an underground fight club.",
        director: "David Fincher",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        isInWatchlist: true,
    },
    {
        id: 25,
        title: "The Shawshank Redemption",
        posterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        rating: 4.9,
        myRating: 5,
        voteCount: "2.3M",
        releaseYear: 1994,
        genre: "Drama",
        duration: "2h 22m",
        description: "Two imprisoned men bond over years, finding solace and redemption.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        isInWatchlist: false
    }
];

const watchlistMovies = [
    {
        id: 14,
        title: "Dune: Part Two",
        posterPath: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        releaseYear: 2024,
        genre: "Sci-Fi",
        duration: "2h 46m",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge.",
        director: "Denis Villeneuve",
        cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        rating: 4.9,
    },
    {
        id: 15,
        title: "Fast X",
        posterPath: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        releaseYear: 2023,
        genre: "Action",
        duration: "2h 21m",
        description: "Dom Toretto faces his most lethal adversary yet.",
        director: "Louis Leterrier",
        cast: ["Vin Diesel", "Jason Momoa", "Michelle Rodriguez"],
        rating: 5.3,
    },
    {
        id: 16,
        title: "John Wick: Chapter 4",
        posterPath: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        releaseYear: 2023,
        genre: "Action",
        duration: "2h 49m",
        description: "John Wick faces his deadliest adversaries in the fourth installment.",
        director: "Chad Stahelski",
        cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
        rating: 4.2,
    },
    {
        id: 17,
        title: "Guardians of the Galaxy Vol. 3",
        posterPath: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        releaseYear: 2023,
        genre: "Action",
        duration: "2h 30m",
        description: "The Guardians embark on a mission to protect Rocket.",
        director: "James Gunn",
        cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
        rating: 3.5,
    },
    {
        id: 18,
        title: "Oppenheimer",
        posterPath: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        releaseYear: 2023,
        genre: "Biography",
        duration: "3h 0m",
        description: "The story of American scientist J. Robert Oppenheimer.",
        director: "Christopher Nolan",
        cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        rating: 4.4,
    },
    {
        id: 26,
        title: "Barbie",
        posterPath: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        releaseYear: 2023,
        genre: "Comedy",
        duration: "1h 54m",
        description: "Barbie and Ken are having the time of their lives in Barbie Land.",
        director: "Greta Gerwig",
        cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
        rating: 3.8,
    },
    {
        id: 27,
        title: "Mission: Impossible – Dead Reckoning",
        posterPath: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        releaseYear: 2023,
        genre: "Action",
        duration: "2h 43m",
        description: "Ethan Hunt and his team face their most dangerous mission yet.",
        director: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"],
        rating: 4.1,
    },
    {
        id: 28,
        title: "Indiana Jones and the Dial of Destiny",
        posterPath: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
        releaseYear: 2023,
        genre: "Adventure",
        duration: "2h 34m",
        description: "Indy races against time to retrieve a legendary artifact.",
        director: "James Mangold",
        cast: ["Harrison Ford", "Phoebe Waller-Bridge", "Antonio Banderas"],
        rating: 3.9,
    },
    {
        id: 29,
        title: "The Flash",
        posterPath: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        releaseYear: 2023,
        genre: "Superhero",
        duration: "2h 24m",
        description: "Barry Allen travels back in time to prevent his mother's murder.",
        director: "Andy Muschietti",
        cast: ["Ezra Miller", "Sasha Calle", "Michael Shannon"],
        rating: 4.9,
    },
    {
        id: 30,
        title: "Transformers: Rise of the Beasts",
        posterPath: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        releaseYear: 2023,
        genre: "Sci-Fi",
        duration: "2h 7m",
        description: "The Autobots and Maximals face a new threat from the Terrorcons.",
        director: "Steven Caple Jr.",
        cast: ["Anthony Ramos", "Dominique Fishback", "Peter Cullen"],
        rating: 4.5,
    },
    {
        id: 31,
        title: "Scream VI",
        posterPath: "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        releaseYear: 2023,
        genre: "Horror",
        duration: "2h 3m",
        description: "The Carpenter sisters are pursued by a new Ghostface killer.",
        director: "Matt Bettinelli-Olpin, Tyler Gillett",
        cast: ["Melissa Barrera", "Jenna Ortega", "Courteney Cox"],
        rating: 4.0,
    },
    {
        id: 32,
        title: "Ant-Man and the Wasp: Quantumania",
        posterPath: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
        releaseYear: 2023,
        genre: "Superhero",
        duration: "2h 5m",
        description: "Scott Lang and Hope van Dyne explore the Quantum Realm.",
        director: "Peyton Reed",
        cast: ["Paul Rudd", "Evangeline Lilly", "Jonathan Majors"],
        rating: 3.7,
    },
    {
        id: 33,
        title: "Cocaine Bear",
        posterPath: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
        releaseYear: 2023,
        genre: "Comedy",
        duration: "1h 35m",
        description: "A bear ingests cocaine and goes on a rampage.",
        director: "Elizabeth Banks",
        cast: ["Keri Russell", "O'Shea Jackson Jr.", "Christian Convery"],
        rating: 3.2,
    },
    {
        id: 34,
        title: "65",
        posterPath: "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
        releaseYear: 2023,
        genre: "Sci-Fi",
        duration: "1h 33m",
        description: "A pilot crash-lands on a mysterious planet 65 million years ago.",
        director: "Scott Beck, Bryan Woods",
        cast: ["Adam Driver", "Ariana Greenblatt", "Chloe Coleman"],
        rating: 3.6,
    },
    {
        id: 35,
        title: "Creed III",
        posterPath: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
        releaseYear: 2023,
        genre: "Sports",
        duration: "1h 56m",
        description: "Adonis faces his childhood friend who's fresh out of prison.",
        director: "Michael B. Jordan",
        cast: ["Michael B. Jordan", "Tessa Thompson", "Jonathan Majors"],
        rating: 4.3,
    }
];

const page = () => {
    const handleMovieClick = (movie) => {
        console.log('Movie clicked:', movie);
    };

    const handleRatingClick = (movie) => {
        console.log('Rating clicked for:', movie);
    };

    const handleWatchlistClick = (movie) => {
        console.log('Watchlist clicked for:', movie);
    };

    const handleTrailerClick = (movie) => {
        console.log('Trailer clicked for:', movie);
    };

    return (
        <div>
            <HeroBanner />

            {/* Upcoming Movies */}
            <div className="pt-20 pb-15 bg-gray-900">
                <div className="flex flex-col items-center justify-between px-4 md:px-8 lg:px-12">
                    <h2 className="text-3xl font-extrabold"><span className="text-[#0399FA]">UPCOMING</span> <span className="text-yellow-500">MOVIES</span></h2>
                    <p className="text-white mt-2">We constantly offers new movies</p>
                </div>

                <div className="h-[400px] flex items-center">
                    <MovieCarousel />
                </div>
            </div>

            <Enjoy />

            {/* Movies You Rated */}
            <div className="pt-20 pb-15 bg-[#06090C]">
                <h2 className="text-4xl text-center font-extrabold">
                    <span className="text-yellow-500">MOVIES YOU</span>
                    <span className="text-[#0399FA]"> RATED</span>
                </h2>

                <MovieSection
                    movies={ratedMovies}
                    showRating={true}
                    onMovieClick={handleMovieClick}
                    onRatingClick={handleRatingClick}
                    onTrailerClick={handleTrailerClick}
                    fromWatchlist={false}
                />
            </div>

            {/* Your Watch-List */}
            <div className="pt-20 pb-15 relative min-h-[600px]">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/spider man.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                        quality={95}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl max-w-7xl mx-auto w-full text-left font-extrabold pl-5">
                        <span className="text-white">YOUR </span>
                        <span className="text-yellow-500">WATCH-LIST</span>
                    </h2>

                    <MovieSection
                        movies={watchlistMovies}
                        showRating={true}
                        showWatchlistButton={true}
                        onMovieClick={handleMovieClick}
                        onWatchlistClick={handleWatchlistClick}
                        onTrailerClick={handleTrailerClick}
                        fromWatchlist={true}
                    />
                </div>
            </div>

        </div>
    );
};

export default page;