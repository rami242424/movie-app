import type { IMoviesProps } from "../types/movie";

interface IMovieItemProp {
  movie: IMoviesProps;
}
function MovieItem ({movie}:IMovieItemProp){
  return( 
    <>
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </li>
    </>
  );
}
export default MovieItem