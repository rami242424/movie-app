import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_KEY = import.meta.env.VITE_API_KEY;

export interface IMovies {
  id: number;
  overview: string;
  poster_path: string |null;
  release_date: string;
  title: string;
  vote_average: number;
}

interface MoviesResponse {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}


function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovies[]>([]);

  

  const handleSearch = async() => {
    if(!keyword.trim()) return;

    setLoading(true);
    setError(null);
  
    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error ("API 연결 실패");

      const json :MoviesResponse = await response.json();
      if (!json || !Array.isArray(json.results)) {
          throw new Error("잘못된 응답 구조");
        }
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
      <SearchBar 
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movies.length > 0 && (
        <MovieList 
          movies={movies}
        />
        )}
    </>
  );
}

export default App;