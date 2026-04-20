import type { IMovies } from "../types/movie";

interface IMovieListProps {
  movies: IMovies[];
}

function MovieList({movies}:IMovieListProps){
  return(
    <ul>
      {movies.map((movie) => (
        <li>
          <h3>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;