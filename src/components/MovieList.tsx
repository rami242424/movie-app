import type { IMoviesProps } from "../types/movie";
import MovieItem from "./MovieItem";

interface IMovieListprops {
  movies: IMoviesProps[];
}

function MovieList({movies}:IMovieListprops){
  return(
    <>
      <ul>
        {movies.map((movie) => 
          <MovieItem 
            movie={movie}
          />
        )}
      </ul>
    </>
  );
}

export default MovieList;