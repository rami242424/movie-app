// app 화면을 어떻게 보여줄까 
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { useMovies } from "./hooks/useMovies";
import MovieSkeleton from "./components/MovieSkeleton";


function App(){
  const [keyword, setKeyword] = useState("");
  const {fetchState, handleSearchBtn} = useMovies(keyword);
  
  return(
    <>
      <SearchBar 
        setKeyword={setKeyword}
        keyword={keyword}
        handleSearchBtn={handleSearchBtn}
      />
      {fetchState.status === "loading" && <MovieSkeleton />}
      {fetchState.status === "error" && <div>{fetchState.error}</div>}
      {fetchState.status === "success" && (
        fetchState.data.length > 0 
        ? (
          <MovieList 
            movies={fetchState.data}
          />
        ):(
          <div>검색된 결과가 없습니다.</div>
        )
      )}
    </>
  );
}

export default App