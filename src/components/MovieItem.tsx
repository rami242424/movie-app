import type { IMovies } from "../types/movie";

interface IMovieItemProps {
  movie: IMovies
}
function MovieItem({movie}:IMovieItemProps){
  return(
    <li>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      {movie.poster_path ? (
          <img 
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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