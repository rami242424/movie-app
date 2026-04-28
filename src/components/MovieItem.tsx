import { useNavigate } from "react-router-dom";
import type { IMoviesProps } from "../types/movie";

interface IMovieItem {
  movie : IMoviesProps;
}
function MovieItem({movie}:IMovieItem){
  const navigate = useNavigate();
  return(
    <li onClick={() => navigate(`/movie/${movie.id}`)} className="cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <span>{movie.overview}</span>
      <p>{movie.vote_average}</p>
    </li>
  );
}

export default MovieItem;