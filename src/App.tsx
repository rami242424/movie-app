import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import SearchBar from "./components/SearchBar";


function App(){
  const [keyword, setKeyword] = useState("");
  const {searchBtn, fetchState} = useMovies(keyword);

  return(
    <>
      <SearchBar 
        keyword={keyword}
        setKeyword={setKeyword}
        searchBtn={searchBtn}
      />
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