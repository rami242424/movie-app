import { useState } from "react";
import { type FetchState  } from "./types/movie";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_KEY = import.meta.env.VITE_API_KEY;

function App(){
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  //const [movies, setMovies] = useState<IMovies[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>({status: "idle"});


  const searchMovie = async() => {
    if(!keyword.trim()) return;
    setFetchState({status: "loading"});

    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("API 연결 실패");
      const json = await response.json();
      //setMovies(json.results);
      setFetchState({
        status: "success",
        data: json.results
      });
    } catch(error){
      if(error instanceof Error){
        setFetchState({
          status: "error",
          error: error.message
        })
      }
    } 
  }
  return(
    <>
      <SearchBar 
        keyword={keyword}
        setKeyword={setKeyword}
        searchMovie={searchMovie}

      />
      {fetchState.status === "loading" && <div>Loading...</div>}
      {fetchState.status === "error" && <div>{fetchState.error}</div>}
      {/* {status.status === "success" && status.data.length === 0 && <div>검색결과가 없습니다.</div>}
      {status.status === "success" && status.data.length > 0 && (
        <MovieList movies={movies}/>
      )} */}
      {fetchState.status === "success" && (
        fetchState.data.length === 0
        ? <div>검색결과가 없습니다.</div>
        : <MovieList movies={fetchState.data}/>
      )}
    </>
  );
}

export default App;