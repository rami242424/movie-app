import { useState } from "react";

export interface IProps {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

export type Status = "idle" | "loading" | "success" | "error";


const API_KEY = "ae39336185873212a3317f6c4e235bbf";

function App(){
  // const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IProps[]>([]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const handleSearch = async() => {
    if(!keyword.trim()) return;

    setStatus("loading");
    setError(null);
    //setMovies([]);

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
    <>
      <input 
        value={keyword} 
        placeholder="영화 제목을 검색하세요." 
        onChange={handleChange}
        onKeyDown={(e) => {
          if(e.key === "Enter") handleSearch();
        }}
      />
      <button onClick={handleSearch} disabled={status === "loading"}>Search</button>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>{error}</div>}
      {status === "success" && movies.length === 0 && (
        <div>검색된 결과가 없습니다.</div>
      )}
      {status === "success" && movies.length > 0 && (
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
                  <div>No Image</div>
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