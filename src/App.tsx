import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList, { type Movie } from "./components/MovieList";

const API_KEY = "ae39336185873212a3317f6c4e235bbf";

function App(){
  const [movieKeyword, setMovieKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [movie, setMovie] = useState<Movie[]>([]);
  const handleSearch = async() => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
              `https://api.themoviedb.org/3/search/movie?query=${movieKeyword}&api_key=${API_KEY}`);
            if(!response.ok) throw new Error("검색어를 찾을 수 없습니다.");
            const json = await response.json();
            console.log(json.results[0].title, "json이에요")
            setMovie(json.results);
        } catch(error){
            if( error instanceof Error){    
                console.log(error.message);
                setError(error.message);
            }
        } finally{
            setLoading(false);
        }
    }
  return (
    <>
      <SearchBar 
        movieKeyword={movieKeyword}
        setMovieKeyword={setMovieKeyword}
        loading = {loading}
        error = {error}
        handleSearch = {handleSearch}
      />
      <MovieList movie={movie} />

    </>
  );
}

export default App;

