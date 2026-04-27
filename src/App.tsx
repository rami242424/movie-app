import { useState } from "react";
import type { FetchState } from "./types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

function App(){
  const [keyword, setKeyword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string|null>(null);
  // const [movies, setMovies] = useState<IMoviesProps[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>({status:"idle"});
  const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  const searchBtn = async() => {
    if(!keyword.trim()) return;

    setFetchState({status:"loading"});

    try{

      const response = await fetch (
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`
            }
          }
      );
      if(!response.ok) throw new Error("API 연결 실패");
      
      const json = await response.json();
      setFetchState({status: "success", data: json.results});
    } catch(error){
      if(error instanceof Error){
        setFetchState({status:"error", error: error.message});
      }
    }
  }
  return(
    <>
      <input 
        placeholder="영화이름을 검색하세요." 
        value={keyword}
        onChange={inputChange}
        onKeyDown={(e) => {if((e.key) === "Enter") searchBtn()}}
      />
      <button
        onClick={searchBtn}
      >
        Search
      </button>
      {/* {fetchState.status === "idle" &&} */}
      {fetchState.status === "loading" && <div>Loading...</div>}
      {fetchState.status === "error" && <div>{fetchState.error}</div>}
      {fetchState.status === "success" && (
        fetchState.data.length > 0 
        ? (
          <ul>
            {fetchState.data.map((movie) => ( 
              <li key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <span>{movie.overview}</span>
                <p>{movie.vote_average}</p>
              </li>
            ))}
          </ul>
          ) : <div>검색결과가 없습니다.</div>
        )
      }
    </>
  );
}

export default App;