import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

export interface IProps {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  original_title: string;
}
const API_KEY = "ae39336185873212a3317f6c4e235bbf";

function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IProps[]>([]);
  const [hasSearching, setHasSearching] = useState(false);
  
  const handleSearch = async() => {
    if(!keyword.trim()) return;

    //초기화
    setLoading(true);
    setError(null);
    setMovies([]);
    setHasSearching(true);

    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("서버에 응답이 없습니다.");
      const json = await response.json();
      setMovies(json.results);
    } catch(error){
      if(error instanceof Error){
        setError(error.message);
      }
    } finally{
      setLoading(false);
    }
  }

  return(
  <>
    <SearchBar 
      keyword={keyword}
      handleSearch={handleSearch}
      setKeyword={setKeyword}
      loading={loading}
    />
    <MovieList 
      movies={movies}
      loading={loading}
      error={error}
      hasSearching={hasSearching}
    />
  </>
  );
}

export default App;