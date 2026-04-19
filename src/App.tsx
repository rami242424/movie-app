import { useState } from "react";

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

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

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
      <input 
        value={keyword} 
        placeholder="영화제목을 검색하세요." 
        onChange={handleChange}
        onKeyDown={(e) => {
          if(e.key === "Enter")  handleSearch();
        }}
      
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              {movie.poster_path ? (
                <img 
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
                ) : (
                <div>No image</div>
                )}
              <p>{movie.overview}</p>
              <p>🌟{movie.vote_average}</p>
            </li>
          ))}
        </ul>
        )}
    </>
  );
}

export default App;