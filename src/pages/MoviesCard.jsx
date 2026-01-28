
import { useState } from "react";
import MovieDetails from "../pages/MoviesDetails";

const MoviesCard = () => {

    let movies = [
        {
            "title": "Jawan",
            "genre": "Action • Thriller",
            "rating": "⭐ 8.2",
            "img": "https://tse3.mm.bing.net/th/id/OIP.3m5hebQ5hjmc3A2lAV2jdQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "title": "Animal",
            "genre": "Crime • Drama",
            "rating": "⭐ 8.5",
            "img": "https://tse1.mm.bing.net/th/id/OIP.MfYi0uGzTSXVZm05HZtYBgHaKX?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "title": "Leo",
            "genre": "Action • Drama",
            "rating": "⭐ 8.0",
            "img": "https://tse2.mm.bing.net/th/id/OIP.yz6QSl3rfHCysqzu3AheswHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "title": "Pathaan",
            "genre": "Action • Spy",
            "rating": "⭐ 7.9",
            "img": "https://rukminim1.flixcart.com/image/832/832/xif0q/poster/c/b/d/small-pathan-shah-rukh-khan-bollywood-hindi-movie-poster-small-original-imagmt3dgxh7avyg.jpeg?q=70"
        },
        {
            "title": "KGF Chapter 2",
            "genre": "Action • Crime",
            "rating": "⭐ 8.4",
            "img": "https://tse3.mm.bing.net/th/id/OIP.0ANsIls7KowYWhVNkeB4qwHaLK?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "title": "RRR",
            "genre": "Action • Drama",
            "rating": "⭐ 8.6",
            "img": "https://tse4.mm.bing.net/th/id/OIP.vhP_IyL7c4QWBVF_Trw4RQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "title": "Pushpa: The Rise",
            "genre": "Action • Crime",
            "rating": "⭐ 8.1",
            "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aea32f95081205.5e8edb40465ea.jpg"
        },
        {
            "title": "Vikram",
            "genre": "Action • Thriller",
            "rating": "⭐ 8.3",
            "img": "https://th.bing.com/th/id/R.22f605b11b1f17510d36e98b54365b6d?rik=g7urYoZtAHl%2bag&riu=http%3a%2f%2fonlookersmedia.in%2fwp-content%2fuploads%2f2022%2f03%2fkamal-haasan-vikram-new-poster2.jpg&ehk=Rgx%2bTEGAxM4YI9F7kF4%2bkvPaH%2bVnatpQu9O5fh7ZQ1E%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            "title": "Drishyam 2",
            "genre": "Crime • Thriller",
            "rating": "⭐ 8.5",
            "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/264ac129611747.55faffbc79c61.jpg"
        },
        {
            "title": "Gadar 2",
            "genre": "Action • Drama",
            "rating": "⭐ 7.8",
            "img": "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Gadar-2.jpeg"
        }
    ]

    const [page, setPage] = useState("movies");
    const [selectedMovie, setSelectedMovie] = useState(null);


    return (
        <>
            {/* Movies Section */}
            <section className="px-6 pb-16 min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
                <h3 className="text-2xl font-bold mb-6">🔥 Now Showing</h3>

                <div className="grid grid-cols-5 gap-6">
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                        >
                            <img
                                src={movie.img}
                                alt={movie.title}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-4">
                                <h4 className="text-xl font-bold">{movie.title}</h4>
                                <p className="text-gray-400 text-sm">{movie.genre}</p>

                                <div className="flex justify-between items-center mt-3">
                                    <span className="text-yellow-400">{movie.rating}</span>
                                    <button onClick={() => {
                                        setSelectedMovie(movie);
                                        setPage("details");
                                    }}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner Section */}
                <div className="mt-12">
                    <img
                        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
                        alt="banner"
                        className="w-full h-auto rounded-xl"
                    />
                </div>
            </section>

            {/* Movie Details Modal */}
            <MovieDetails
                movie={selectedMovie}
                Close={() => setSelectedMovie(null)}
            />


            {/* MOVIES LIST PAGE */}
            {page === "movies" && (
                <section className="px-6 pb-16 min-h-screen bg-black text-white">
                    <h3 className="text-2xl font-bold mb-6">🔥 Now Showing</h3>

                    <div className="grid grid-cols-5 gap-6">
                        {movies.map((movie, index) => (
                            <div key={index} className="bg-slate-900 rounded-xl p-3">
                                <img src={movie.img} alt={movie.title} />

                                <h4 className="mt-2">{movie.title}</h4>

                                <button
                                    onClick={() => {
                                        setSelectedMovie(movie);
                                        setPage("details");
                                    }}
                                    className="mt-2 bg-red-600 px-3 py-1 rounded"
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* MOVIE DETAILS PAGE */}
            {page === "details" && (
                <MovieDetails
                    movie={selectedMovie}
                    close={() => setPage("movies")}
                    goToSeat={() => setPage("seats")}
                />
            )}

            {/* SEAT BOOKING PAGE */}
            {page === "seats" && (
                <SeatBooking
                    movie={selectedMovie}
                    goBack={() => setPage("details")}
                />
            )}


        </>
    );
};

export default MoviesCard

