import { useState } from "react";
import { type FetchState  } from "./types/movie";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

function App(){
  const [keyword, setKeyword] = useState("");
  const [fetchState, setFetchState] = useState<FetchState>({status: "idle"});


  const searchMovie = async() => {
    if(!keyword.trim()) return; 
    if(fetchState.status === "loading") return;
    setFetchState({status: "loading"});

    try{
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
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl">
        <SearchBar 
          keyword={keyword}
          setKeyword={setKeyword}
          searchMovie={searchMovie}
        />
        {/* {fetchState.status === "loading" && <div>Loading...</div>} */}
        {fetchState.status === "error" && <div>{fetchState.error}</div>}
        {/* {fetchState.status === "success" && (
          fetchState.data.length === 0
          ? <div>검색결과가 없습니다.</div>
          : <MovieList movies={fetchState.data}/>
        )} */}
        {fetchState.status === "loading" && (
          <MovieList movies={[]} isLoading={true} />
        )}
        {fetchState.status === "success" && (
          fetchState.data.length === 0
          ? <div>검색결과가 없습니다.</div>
          : <MovieList movies={fetchState.data}/>
        )}
      </div>  
    </div>
  );
}

export default App;