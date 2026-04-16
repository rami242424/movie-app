import type { IMovieProps } from "../App";

interface Props {
  movies: IMovieProps[];
}

function MovieList({movies}:Props){
  return(
    <>
      {movies.length > 0 && (
          <ul>
            {movies.map((movie) => 
              <li key={movie.id}>
                <h3>{movie.title} ({movie.release_date})</h3>
                {/* <p>Original title ({movie.original_title})</p> */}
                {movie.poster_path && (<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>)}
                <p>{movie.overview}</p>
              </li>
            )}
          </ul>
      )}
    </>
  );
}

export default MovieList;