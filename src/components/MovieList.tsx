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
      {!loading && !error && hasSearching && movies.length === 0 ? 
          (
            <div className="text-center mt-10 text-gray-500">
              검색결과가 없습니다.
            </div>

          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {movies.map((movie) => 
                  <MovieItems 
                    movie={movie}
                    key={movie.id}
                  />
              )}
            </ul>
          )
      }
    </>
  );
}

export default MovieList;