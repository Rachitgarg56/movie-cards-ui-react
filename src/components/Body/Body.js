
import MovieCard from '../MovieCard/MovieCard';
import MoviesData from '../../movies.json';

const Body = () => {

    return (
        <section className='body w-full flex flex-col items-center gap-20 bg-black border border-solid border-black p-4 md:p-16'>
            {
                MoviesData.map((movieData) => {
                    return <MovieCard imageUrl={movieData.imageUrl} bgUrl={movieData.bgUrl} movieName={movieData.movieName} releaseYear={movieData.releaseYear} durationMinutes={movieData.durationMinutes} genres={movieData.genres} description={movieData.description} />
                })
            }
        </section>
    )
}

export default Body;
