import './MovieCard.css';
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";


const MovieCard = ( { imageUrl,bgUrl,movieName,releaseYear,durationMinutes,genres,description } ) => {

    return (

        <div className='movie-card border border-solid border-black w-full max-w-screen-md flex flex-col sm:flex-row rounded-xl'>

            <div className="movie-details flex-1 rounded-lg">

                <div className="flex flex-col justify-between gap-8 sm:gap-16 flex-1 bg-black rounded-lg p-4">

                    <div className="movie-details-main flex flex-col gap-2 border border-solid border-black">

                        <div className="movie-details-main-top flex gap-5">

                            <figure className="thumbnail w-20 h-25">
                                <img alt="movie-thumbnail" src={imageUrl} className="w-full" />
                            </figure>

                            <div className="movie-details-main-top-right flex flex-col gap-2">

                                <div className="name-and-year flex flex-col">
                                    <h5 className="movie-name text-white text-2xl">{movieName}</h5>
                                    <span className="release-year text-blue-300">{releaseYear}</span>
                                </div>

                                <div className="duration-and-genre flex items-center text-sm gap-3">
                                    <p className="duration text-white border border-solid border-neutral-700 rounded-sm px-px">{durationMinutes + " min"}</p>
                                    <p className="genre text-blue-200">{ genres.join(', ') }</p>
                                </div>

                            </div>

                        </div>

                        <p className="movie-description text-gray-300 text-base leading-4">{description}</p>

                    </div>

                    <div className="icons flex item-center text-gray-400 gap-6 text-lg">
                        <div className="icon"><IoShareSocial /></div>
                        <div className="icon"><FaHeart /></div>
                        <div className="icon"><MdRateReview /></div>
                    </div>

                </div>

            </div>

            <figure className="bg-img flex-1 rounded-lg">
                <img alt="movie-poster" src={bgUrl} className="rounded-lg w-full h-full object-cover" />
            </figure>

        </div>

    )
}

export default MovieCard;
