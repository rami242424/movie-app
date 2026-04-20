import type { IMovies } from "../types/movie";

interface IMovieItemProps {
  movie: IMovies
}
function MovieItem({movie}:IMovieItemProps){
  return(
    <li
      className="bg-white rounded shadow p-3 flex flex-col gap-2"
    >
      {movie.poster_path ? (
          <img 
            className="w-full aspect-2/3 object-cover rounded"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="w-full aspect-2/3 bg-gray-200 flex items-center justify-center text-gray-400 rounded">
            🎬 No Image
          </div>
        )}
      <h3
        className="font-semibold text-sm leading-tight"
      >
        {movie.title}
      </h3>
      <p
        className="font-mono text-xs text-gray-500"
      >{movie.release_date}</p>
        <p
          className="line-clamp-3 text-sm"
        >{movie.overview}</p>
        <p className="text-sm">🌟{movie.vote_average}</p>
    </li>
  );
}

export default MovieItem;