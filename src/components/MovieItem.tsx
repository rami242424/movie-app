import type { IMovies } from "../types/movie";

interface IMovieItemProps {
  movie: IMovies
}
function MovieItem({movie}:IMovieItemProps){
  return(
    <li>
      <h3>{movie.title}</h3>
    </li>
  );
}

export default MovieItem;