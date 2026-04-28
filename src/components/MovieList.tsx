import type { IMoviesProps } from "../types/movie";
import MovieItem from "./MovieItem";
import MovieSkeleton from "./MovieSkeleton";

interface IMovieList {
  movies: IMoviesProps[];
  isLoading: boolean;
}
function MovieList({movies, isLoading}:IMovieList){
  return(
    <ul>
        {isLoading 
        ? ( 
          Array.from({length: 9}).map((_,i) => <MovieSkeleton key={i}/>)
        ):(
          movies.map((movie) => ( 
            <MovieItem movie={movie} key={movie.id}/>
          ))
        )
        }
    </ul>
  );
}
export default MovieList;