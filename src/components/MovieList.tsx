import type { IMovies } from "../App";
import MovieItem from "./MovieItem";

interface IMovieListProps{
  movies: IMovies[];
}

function MovieList({movies}:IMovieListProps){
  return(
    <ul>
      {movies.map((movie) => (
        <MovieItem 
          movie={movie}
        />
      ))}
    </ul>
  )
}

export default MovieList;