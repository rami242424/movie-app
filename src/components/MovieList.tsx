import type { IMovieProps } from "../App";
import MovieItem from "./MovieItem";

interface IMovieListprops {
  movies: IMovieProps[];
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