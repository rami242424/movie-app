import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { useMovies } from "./hooks/useMovies";
import { useState } from "react";



function App(){
  const [keyword, setKeyword] = useState("");
  const { movies, status, error, handleSearch } = useMovies();

  return(
    <>
      <SearchBar 
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={() => handleSearch(keyword)}
        status={status}
      />
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>{error}</div>}
      {status === "success" && movies.length === 0 && (
        <div>검색된 결과가 없습니다</div> 
      )}
      {status === "success" && movies.length > 0 && (
        <MovieList 
          movies={movies}
        />
      )}
    </>
  );
}

export default App;