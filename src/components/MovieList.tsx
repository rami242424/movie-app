import type { IProps } from "../App";
import MovieItem from "./MovieItem";

interface IMovieListProps {
  movies: IProps[];
}

function MovieList({movies}:IMovieListProps){
  return (
    <ul>
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