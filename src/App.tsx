import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { useMovies } from "./hooks/useMovies";


function App(){
  const [keyword, setKeyword] = useState("");
  const { fetchState, SearchBtn } = useMovies(keyword);
  return(
    <div className="min-h-screen bg-gray-200 flex felx-col items-center py-10">
      <div className="w-full max-w-3xl">
        <SearchBar 
          setKeyword={setKeyword}
          SearchBtn={SearchBtn}
          keyword={keyword}
        />
        {fetchState.status === "loading" && (
          <MovieList movies={[]} isLoading={true}/>
        )}
        {fetchState.status === "error" && <div>{fetchState.error}</div>}
        {fetchState.status === "success" && (
          fetchState.data.length > 0 
          ? (
            <MovieList movies={fetchState.data}/>
          ) : (
            <div>검색된 결과가 없습니다.</div>
          )
        )}
      </div>
    </div>
  );
}

export default App;