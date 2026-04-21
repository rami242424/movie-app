import type { IMoviesProps } from "../types/movie";

interface IMovieItemProps{
  movie: IMoviesProps;
}

function MovieItem({movie}:IMovieItemProps){
  return(
    <>
      <li
        className="bg-white rounded shadow p-3 flex flex-col gap-2"
      >
        {movie.poster_path ?
          (<img
            className="w-full aspect-2/3 object-cover rounded"
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          />
        ) : (
          <div className="w-full aspect-2/3 bg-gray-200 flex items-center justify-center text-gray-400 rounded"
          >
            🎬 No Image
          </div>
        )
        }
        <h2 className="font-semibold text-sm leading-tight">{movie.title}</h2>
        <p className="font-mono text-xs text-gray-500">{movie.release_date}</p>
        <p className="line-clamp-3 text-sm">{movie.overview}</p>
        <p className="text-sm">🌟{movie.vote_average}</p>
      </li>
    </>
  );
}

export default MovieItem;