import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App(){
  const [movieKeyword, setMovieKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [movie, setMovie] = useState<string[]>([]);
  const handleSearch = async() => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(``);
            if(!response.ok) throw new Error("검색어를 찾을 수 없습니다.");
        } catch(error){
            if( error instanceof Error){    
                console.log(error.message);
                setError(error.message);
            }
        } finally{
            setLoading(false);
        }
        setMovie([]);
    }
  return (
    <>
      <SearchBar 
        movieKeyword={movieKeyword}
        setMovieKeyword={setMovieKeyword}
        loading = {loading}
        setLoading = {setLoading}
        error = {error}
        setError = {setError}
        movie = {movie}
        setMovie = {setMovie}
        handleSearch = {handleSearch}
      />

    </>
  );
}

export default App;

