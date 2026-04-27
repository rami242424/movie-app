import type { IMoviesProps } from "../types/movie";
import MovieItem from "./MovieItem";

interface IMovieList {
  movies: IMoviesProps[];
}
function MovieList({movies}:IMovieList){
  return(
    <>
      <ul>
          {movies.map((movie) => ( 
            <MovieItem movie={movie} key={movie.id}/>
          ))}
      </ul>
    </>
  );
}
export default MovieList;