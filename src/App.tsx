import { useState } from "react";
import SearchBar from "./components/SearchBar";
import type { Movie } from "./types/movie";
import MovieList from "./components/MovieList";


const API_KEY = "ae39336185873212a3317f6c4e235bbf";
type Status = "idle" | "loading" | "success" | "error";

function App(){
  const [movieKeyword, setMovieKeyword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string|null>(null);
  const [movie, setMovie] = useState<Movie[]>([]);
  const handleSearch = async() => {
      if(!movieKeyword.trim()) return;

        setStatus("loading");
        setError(null);
        try {
            const response = await fetch(
              `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieKeyword)}&api_key=${API_KEY}`);
            if(!response.ok) throw new Error("API 요청 실패");
            const json = await response.json();
              setMovie(json.results);
              setStatus("success");
        } catch(error){
          if( error instanceof Error){    
              //console.log(error.message);
              setError(error.message);
          }
        } finally{
          //
        }
    }
  return (
    <>
      <SearchBar 
        movieKeyword={movieKeyword}
        setMovieKeyword={setMovieKeyword}
        handleSearch = {handleSearch}
      />
      <MovieList movie={movie} status={status} error={error} />
    </>
  );
}

export default App;

