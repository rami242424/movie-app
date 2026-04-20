import { useState } from "react";
import type { IMovies } from "./types/movie";

const API_KEY = import.meta.env.VITE_API_KEY;

function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  const searchMovie = async() => {
    if(!keyword.trim()) return;
    setHasSearched(true);
    setLoading(true);
    setError(null);
    setMovies([]);

    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("API 연결 실패");
      const json = await response.json();
      setMovies(json.results);
    } catch(error){
      if(error instanceof Error){
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return(
    <>
      <input 
        value={keyword}
        placeholder="영화이름을 검색하세요."
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if(e.key === "Enter") searchMovie();
        }}
      />
      <button
        onClick={searchMovie}
        // disabled
      >
        Search
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && movies.length === 0 && hasSearched && <div>검색결과가 없습니다.</div>}
      {movies.length > 0 && (
        movies.map((movie) => (
          <li>{movie.title}</li>
        ))
      )}
    </>
  );
}

export default App;