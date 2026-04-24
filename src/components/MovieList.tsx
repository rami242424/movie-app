import type { IMoviesProps } from "../types/movie";
import MovieItem from "./MovieItem";
import MovieSkeleton from "./MovieSkeleton";

interface IMovieListProps{
  movies: IMoviesProps[]; 
  isLoading?: boolean; 
} 

function MovieList({movies, isLoading}:IMovieListProps){
  return(
    <>
      <ul>
        {isLoading 
        ? (
          Array.from({length: 9}).map((_,i) =>
          <MovieSkeleton key={i}/>)
        ) : (
          movies.map((movie) => (
            <MovieItem movie={movie} />
            ))
        )}
      </ul>
    </>
  )
}

export default MovieList;