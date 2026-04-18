import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export interface IMovies {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
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

      const json = await response.json();
      setMovies(json.results);
      console.log(json.results)
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
      <input value={keyword} placeholder="영화제목을 검색하세요." onChange={handleChange}/>
      <button onClick={handleSearch}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
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