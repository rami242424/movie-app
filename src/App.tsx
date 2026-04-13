import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App(){
  const [movieKeyword, setMovieKeyword] = useState("");
  return (
    <>
      <SearchBar 
        movieKeyword={movieKeyword}
        setMovieKeyword={setMovieKeyword}
      />
    </>
  );
}

export default App;

