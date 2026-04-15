import type { MovieProps } from "../App";

interface Props {
  searching: boolean;
  movie: MovieProps[]
}

function MovieList({searching, movie}:Props){
  return(
    <>
      {searching && (
        movie.length === 0 
        ? (<div>검색결과가 없습니다.</div>)
        : (
          <ul>
            {movie.map((m) => 
              <li key={m.id}>
                <h3>{m.title} ({m.release_date})</h3>
                {m.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w200/${m.poster_path}`}/>
                  )
                }
                <p>Summary : {m.overview.length > 180 
                  ? m.overview.slice(0, 180) + "..."
                  : m.overview
                  }
                </p>
                <p>🌟{m.vote_average}</p>
              </li>
            )}
          </ul>
      ))}
    </>
  );
}

export default MovieList;