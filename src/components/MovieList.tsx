import type { IProps } from "../App";
import MovieItems from "./MovieItems";

export interface ImovieListProps {
  movies: IProps[];
  loading: boolean;
  error: string | null;
  hasSearching: boolean;
}

function MovieList({movies, loading, error, hasSearching}:ImovieListProps){
  return(
    <>
      {!loading && !error && hasSearching && movies.length === 0 ? (
          <div>검색결과가 없습니다.</div>
        ) : (
          <ul>
            {movies.map((movie) => 
                <MovieItems 
                  movie={movie}
                  key={movie.id}
                />
            )}
          </ul>
      )}
    </>
  );
}

export default MovieList;