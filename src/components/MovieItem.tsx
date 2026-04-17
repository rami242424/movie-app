import type { IProps } from "../App";

interface IMovieItemProps {
    movie: IProps;
}

function MovieItem({movie}:IMovieItemProps){
    return (
        <li className="border rounded p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
            <div className="space-y-2">
                <h3 className="font-semibold text-lg line-clamp-1">{movie.title}</h3>
                <p className="text-sm text-gray-500">{new Date(movie.release_date).getFullYear()}</p>
                {movie.poster_path ? (
                    <img 
                        className="w-full h-64 object-cover rounded"
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt={movie.title}
                    />
                ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded">No Image</div>
                )}
                <p className="text-sm line-clamp-3">{movie.overview}</p>
                <p className="font-medium">🌟{movie.vote_average.toFixed(1)}</p>
            </div>
        </li>
    );
}

export default MovieItem;