import type { IMovies } from "../types/movie";
import MovieItem from "./MovieItem";

interface IMovieListProps {
  movies: IMovies[];
}

function MovieList({movies}:IMovieListProps){
  return(
    <ul
      className="grid grid-cols-3 gap-4"
    >
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  );
}

export default MovieList;