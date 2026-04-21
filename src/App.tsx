import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import type { FetchState } from "./types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

function App(){
  const [fetchState, setFetchState] = useState<FetchState>({status: "idle"});
  const [keyword, setKeyword] = useState("");

  const SearchBtn = async() => {
    if(!keyword.trim()) return;
    setFetchState({status: "loading"});

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      }
      );
      if(!response.ok) throw new Error("API 연결 실패");
      const json = await response.json();
      setFetchState({
        status: "success",
        data: json.results
      });
    } catch(error) {
      if(error instanceof Error){
        setFetchState({
          status: "error",
          error: error.message
        });
      }
    }
  }

  return(
    <>
      <SearchBar 
        setKeyword={setKeyword}
        SearchBtn={SearchBtn}
        keyword={keyword}
      />
      {fetchState.status === "loading" && <div>Loading...</div>}
      {fetchState.status === "error" && <div>{fetchState.error}</div>}
      {fetchState.status === "success" && (
        fetchState.data.length > 0 
        ? (
          <MovieList movies={fetchState.data}/>
        ) : (
          <div>검색된 결과가 없습니다.</div>
        )
      )}
    </>
  );
}

export default App;