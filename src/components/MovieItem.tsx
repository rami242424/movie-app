import type { IProps } from "../App";

interface IMovieItemProps {
    movie: IProps;
}

function MovieItem({movie}:IMovieItemProps){
    return (
        <li className="border rounded p-3 shadow-sm hover:shadow-md transition">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            {movie.poster_path ? (
                <img 
                    className="border rounded p-4 shadow-sm hover:shadow-md transition"
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                />
            ) : (
                <div>No Image</div>
            )}
            <p>{movie.overview}</p>
            <p>🌟{movie.vote_average}</p>
        </li>
    );
}

export default MovieItem;