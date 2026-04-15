import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_KEY = "ae39336185873212a3317f6c4e235bbf";

export interface MovieProps {
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  id: number;
}

function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [movieKeyword, setMovieKeyword] = useState("");
  const [movie, setMovie] = useState<MovieProps[]>([]);
  const [searching, setSearching] = useState(false);
  const handleSearch = async() => {
    if(!movieKeyword.trim()) return;
    // 초기화
    setSearching(true);
    setLoading(true);
    setError(null);
    setMovie([]);

    try{
      // 패치
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieKeyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("API 요청 실패");
      const json = await response.json();
      setMovie(json.results);
    } catch(error){
      if( error instanceof Error){
        setError(error.message);
      }
    } finally{
      setLoading(false);
    }
  }

  return(
    <>
      <SearchBar 
        movieKeyword={movieKeyword}
        setMovieKeyword={setMovieKeyword}
        handleSearch={handleSearch}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <MovieList 
        searching={searching}
        movie={movie}
      />
      {/* {searching && (
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
      ))} */}
    </>
  );
}

export default App;