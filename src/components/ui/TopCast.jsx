'use client';

import Image from 'next/image';
import { FiChevronRight } from "react-icons/fi";

const TopCast = ({ cast = [] }) => {
    const displayCast = cast.slice(0, 12);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <h2 className="text-white text-2xl font-bold">
                        <span>TOP </span>
                        <span className='text-blue-500'>CAST</span>
                    </h2>
                    <div className="bg-white rounded-lg p-2 hover:bg-gray-700 transition-colors cursor-pointer">
                        <FiChevronRight className="text-blue-500 text-xl" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {displayCast.map((actor, index) => (
                    <CastCard key={index} actor={actor} />
                ))}
            </div>
        </div>
    );
};

const CastCard = ({ actor }) => {
    return (
        <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-3">
                <div className="relative w-16 h-16 flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-blue-500 transition-colors bg-gray-700">
                        {actor.profilePath ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/w185${actor.profilePath}`}
                                alt={actor.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1 space-y-1">
                    <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors">
                        {actor.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-tight">
                        {actor.character}
                    </p>
                    {actor.episodeCount && actor.year && (
                        <p className="text-gray-500 text-xs">
                            {actor.episodeCount} Episodes. {actor.year}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopCast;