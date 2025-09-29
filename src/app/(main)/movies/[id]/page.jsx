import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";

const sampleMovies = [
    {
        id: 1,
        title: "Spider-Man: No Way Home",
        posterPath: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        creators: ["Jon Watts", "Chris McKenna", "Erik Sommers"],
        stars: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
        rating: 8.4,
        votes: "892,547",
        episodes: 1,
        videos: 25,
        photos: 486
    },
    {
        id: 2,
        title: "The Batman",
        posterPath: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        creators: ["Matt Reeves", "Peter Craig"],
        stars: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright", "Colin Farrell"],
        rating: 7.8,
        votes: "745,203",
        episodes: 1,
        videos: 32,
        photos: 324
    },
    {
        id: 3,
        title: "Top Gun: Maverick",
        posterPath: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        description: "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        creators: ["Joseph Kosinski", "Ehren Kruger", "Eric Warren Singer"],
        stars: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"],
        rating: 8.3,
        votes: "654,789",
        episodes: 1,
        videos: 28,
        photos: 298
    },
    {
        id: 4,
        title: "Avatar: The Way of Water",
        posterPath: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        description: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        creators: ["James Cameron", "Rick Jaffa", "Amanda Silver"],
        stars: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
        rating: 7.6,
        votes: "478,921",
        episodes: 1,
        videos: 35,
        photos: 512
    },
    {
        id: 5,
        title: "Black Panther: Wakanda Forever",
        posterPath: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        creators: ["Ryan Coogler", "Joe Robert Cole"],
        stars: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira", "Winston Duke"],
        rating: 6.7,
        votes: "385,642",
        episodes: 1,
        videos: 29,
        photos: 367
    },
    {
        id: 6,
        title: "Doctor Strange in the Multiverse of Madness",
        posterPath: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        description: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        creators: ["Sam Raimi", "Michael Waldron"],
        stars: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor", "Benedict Wong"],
        rating: 6.9,
        votes: "423,156",
        episodes: 1,
        videos: 31,
        photos: 289
    },
    {
        id: 7,
        title: "Thor: Love and Thunder",
        posterPath: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        description: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor.",
        creators: ["Taika Waititi", "Jennifer Kaytin Robinson"],
        stars: ["Chris Hemsworth", "Natalie Portman", "Christian Bale", "Tessa Thompson"],
        rating: 6.2,
        votes: "367,894",
        episodes: 1,
        videos: 26,
        photos: 245
    },
    {
        id: 8,
        title: "Minions: The Rise of Gru",
        posterPath: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        description: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        creators: ["Kyle Balda", "Brad Ableson", "Jonathan del Val"],
        stars: ["Steve Carell", "Pierre Coffin", "Alan Arkin", "Taraji P. Henson"],
        rating: 6.5,
        votes: "156,234",
        episodes: 1,
        videos: 18,
        photos: 187
    }
];

export default async function DetailsPage({ params }) {
    const { id } = await params;

    const movie = sampleMovies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="bg-gray-900 pt-6">
            <div className="max-w-7xl mx-auto w-full min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white rounded-2xl">
                    <div className="w-full h-[400px] relative">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                            alt={movie.title}
                            className="w-full h-full rounded-xl shadow-lg object-cover"
                            width={200}
                            height={100}
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/25" />
                    </div>

                    <div className="col-span-2 w-full h-[400px] relative">
                        <Image
                            src="/images/suicide squad.jpg"
                            alt="Trailer thumbnail"
                            className="w-full h-full rounded-xl shadow-lg object-cover"
                            width={200}
                            height={100}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 rounded-xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center space-x-3 px-8 py-4 font-extrabold">
                                    <FiPlayCircle className="text-white" size={35} />
                                    <span className="text-white text-2xl font-bold">TRAILER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-40 mt-6">
                    <div className="flex gap-60">
                        <div>
                            <div className="text-white text-xl flex flex-col gap-3 font-semibold">
                                <span>EPISODES <span className="text-yellow-500">{movie.episodes}</span></span>
                                <span>VIDEOS <span className="text-yellow-500">{movie.videos}</span></span>
                                <span>PHOTOS <span className="text-yellow-500">{movie.photos}</span></span>
                            </div>
                        </div>
                        <div className="flex-1 border-l-2 border-blue-500 pl-6">
                            <p className="text-white text-lg text-justify font-semibold leading-relaxed">{movie.description}</p>

                            <div className="mt-4">
                                <p className="text-white">
                                    <span className="font-bold text-blue-400">Creators: </span>
                                    {movie.creators.join(", ")}
                                </p>
                                <p className="text-white mt-2">
                                    <span className="font-bold text-blue-400">Stars &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span>
                                    {movie.stars.join(", ")}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 text-white mt-4">
                                <FaStar className="text-yellow-400" />
                                <span className="font-semibold">
                                    {movie.rating} <span className="text-gray-400">({movie.votes})</span>
                                </span>
                                <button className="ml-4 text-sm font-semibold flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-blue-400"
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
                                    Rate Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
