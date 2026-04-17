import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

export interface IProps {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

export type Status = "idle" | "loading" | "success" | "error";

const API_KEY = import.meta.env.VITE_API_KEY;

function App(){
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IProps[]>([]);

  const handleSearch = async() => {
    if(!keyword.trim()) return;

    setStatus("loading");
    setError(null);
    
    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("API 연결을 실패했습니다.");
      const json = await response.json();
      setMovies(json.results);
      setStatus("success");
    } catch(error){
      if(error instanceof Error){
        setError(error.message);
      }
      setStatus("error");
    }
  }
  return (
    <div className="max-w-6xl mx-auto px-4">
      <SearchBar 
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
        status={status}
      />
      <div className="mt-10">
        {status === "loading" && <div className="text-center py-10">Loading...</div>}
        {status === "error" && <div className="text-center py-10 text-red-500">{error}</div>}
        {status === "success" && movies.length === 0 && (
          <div className="text-center py-10">검색된 결과가 없습니다.</div>
        )}
        {status === "success" && movies.length > 0 && (
          <MovieList 
          movies={movies}
          />
        )}
      </div>
    </div>
  );
}

export default App;


