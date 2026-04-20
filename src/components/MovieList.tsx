import type { IMovies } from "../types/movie";
import MovieItem from "./MovieItem";
import MovieSkeleton from "./MovieSkeleton";

interface IMovieListProps {
  movies: IMovies[];
  isLoading?: boolean;
}

function MovieList({movies, isLoading}:IMovieListProps){
  return(
    <ul
      className="grid grid-cols-3 gap-4"
    >
      {isLoading
        ? Array.from({ length: 9}).map((_,i) => (
          <MovieSkeleton key={i}/>
        ))
        : movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))
      }
      {/* {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
        />
      ))} */}
    </ul>
  );
}

export default MovieList;