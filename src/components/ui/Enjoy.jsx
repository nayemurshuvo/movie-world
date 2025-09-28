import { FiPlayCircle } from "react-icons/fi";
import Image from 'next/image';

export default function Enjoy() {
    return (
        <section className="relative h-[80vh] min-h-[700px] overflow-hidden">
            <div className="absolute inset-0">
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

            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="max-w-lg space-y-6">
                            <h1 className="text-xl lg:text-4xl font-bold leading-tight">
                                <span className="text-white">ENJOY IT</span> <span className="text-yellow-400">MOVIES</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Iaculis mollis suscipit maecenas amet eget.
                            </p>
                            <button className="bg-gradient-to-r from-[#57b4f1] to-blue-600 text-white px-14 py-2 rounded-full font-semibold text-lg shadow-2xl hover:from-blue-500 hover:to-blue-700 transition-all transform hover:scale-105">
                                WATCH NOW
                            </button>
                        </div>

                        <div className="relative flex justify-center items-center col-span-2">
                            <div className="relative w-full h-[500px]">
                                <Image
                                    src="/images/laptop.png"
                                    alt="MacBook Pro"
                                    fill
                                    className="object-contain z-10"
                                    priority
                                />

                                <div className="absolute top-[6%] left-[11%] w-[78%] h-[80%] z-20">
                                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/spider man.jpg"
                                            alt="Movie Poster"
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="flex items-center justify-center space-x-3 w-full py-6 bg-white/10">
                                                    <FiPlayCircle className="text-white" size={35} />
                                                    <span className="text-white text-2xl font-bold">TRAILER</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}