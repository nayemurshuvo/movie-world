import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const MyAddedMovies = ({ movies }) => {
    return (
        <div className="max-w-7xl mx-auto w-full mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group"
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                                alt={movie.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 256px, 256px"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                            {/* Movie Title Overlay */}
                            <div className="absolute top-8 right-0 p-4">
                                <button className="cursor-pointer bg-gradient-to-r from-[#57b4f1] to-blue-600 text-white font-semibold text-lg transform -translate-y-1/2 px-8 py-3 rounded-full transition-all z-30 backdrop-blur-sm">
                                    EDIT MOVIES
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies added yet.</p>
                )}
                <div className="relative my-10 flex items-center justify-center rounded-2xl">
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="98"
                            height="98"
                            rx="4"
                            ry="4"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="2 2"
                        />
                    </svg>

                    <button className="flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-[#57b4f1] to-blue-600 text-white font-semibold text-lg px-10 py-3 rounded-full transition-all z-10 backdrop-blur-sm">
                        <FaPlus />
                        <span>ADD MOVIE</span>
                    </button>
                </div>




            </div>
        </div>
    );
};

export default MyAddedMovies;