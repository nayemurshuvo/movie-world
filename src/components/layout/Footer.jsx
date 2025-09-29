import { GrTwitter } from "react-icons/gr";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-30">
                <div>
                    <h4 className="font-bold text-white mb-4 text-xl">UPCOMING MOVIES</h4>
                    <ul className="space-y-2 text-lg">
                        <li>JAWAN</li>
                        <li>The Vampire Diaries</li>
                        <li>Barbie</li>
                        <li>Teen all</li>
                        <li>NCIS</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4 text-xl">ADDITIONAL PAGES</h4>
                    <ul className="space-y-2 text-lg">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>

                <div className="pl-50 col-span-2">
                    <h4 className="font-bold bg-gradient-to-r from-[#57b4f1] to-blue-600 bg-clip-text text-transparent text-2xl">MOVIE</h4>
                    <p className="text-md mb-4 ml-8">World</p>
                    <p className="text-lg leading-relaxed max-w-[300px]">
                        © 2021 movieworld.com. All Rights Reserved. This site is not affiliated
                        or owned by the listed movie streaming platform owners.
                    </p>

                    <div className="flex space-x-3 mt-4">
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#0598FB] rounded-full flex items-center justify-center"
                        >
                            <RiFacebookFill />
                        </a>

                        <a
                            href="#"
                            className="w-8 h-8 bg-[#0598FB] rounded-full flex items-center justify-center"
                        >
                            <GrTwitter />
                        </a>

                        <a
                            href="#"
                            className="w-8 h-8 bg-[#0598FB] rounded-full flex items-center justify-center"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>



                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
                Copyright © 2023 movieworld ALL Right Reserved
            </div>
        </footer>
    );
}