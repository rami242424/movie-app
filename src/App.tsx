import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App(){
  const [movieKeyword, setMovieKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [movie, setMovie] = useState<string[]>([]);
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
      />
    </>
  );
}

export default App;

