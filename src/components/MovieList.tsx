import type { IProps } from "../App";
import MovieItem from "./MovieItem";

interface IMovieListProps {
  movies: IProps[];
}

function MovieList({movies}:IMovieListProps){
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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