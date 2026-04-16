import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

export interface IMovieProps {
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
  const [movies, setMovies] = useState<IMovieProps[]>([]);
  
  const handleSearch = async() => {
    if(!keyword.trim()) return;

    //초기화
    setLoading(true);
    setError(null);
    setMovies([]);

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
    />
    {loading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    <MovieList 
      movies={movies}
    />
    {/* {movies.length > 0 && (
      <ul>
        {movies.map((movie) => 
          <li key={movie.id}>
            <h3>{movie.title} ({movie.release_date})</h3>
            {movie.poster_path && (<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>)}
            <p>{movie.overview}</p>
          </li>
        )}
      </ul>
    )} */}
  </>
  );
}

export default App;