import { useState } from "react";
import type { IMovies } from "./types/movie";


function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovies[]>([]);
  return(
    <>
      <input/>
      <button>Search</button>
    </>
  );
}

export default App;