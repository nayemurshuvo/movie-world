import Enjoy from "@/components/ui/Enjoy";
import HeroBanner from "@/components/ui/Hero";
import MovieCarousel from "@/components/ui/MovieCarousel";

const page = () => {
    return (
        <div>
            <HeroBanner />

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
        </div>
    );
};

export default page;