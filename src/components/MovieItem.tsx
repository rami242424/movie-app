import type { IMoviesProps } from "../types/movie";

interface IMovieItemProps{
  movie: IMoviesProps;
}

function MovieItem({movie}:IMovieItemProps){
  return(
    <>
      <li key={movie.id}>
        {movie.poster_path ?
          (<img 
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          />
        ) : (
          <p>No Image</p>
        )
        }
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
        <p>🌟{movie.vote_average}</p>
      </li>
    </>
  );
}

export default MovieItem;