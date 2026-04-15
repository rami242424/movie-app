import { useState } from "react";

const API_KEY = "ae39336185873212a3317f6c4e235bbf";

interface MovieProps {
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  id: number;
}

function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [movieKeyword, setMovieKeyword] = useState("");
  const [movie, setMovie] = useState<MovieProps[]>([]);

  const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMovieKeyword(e.target.value);
  }
  const handleSearch = async() => {
    if(!movieKeyword.trim()) return;
    // 초기화
    setLoading(true);
    setError(null);
    setMovie([]);

    try{
      // 패치
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieKeyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("API 요청 실패");
      const json = await response.json();
      setMovie(json.results);
    } catch(error){
      if( error instanceof Error){
        setError(error.message);
      }
    } 
    setLoading(false);
  }

  return(
    <>
      <input value={movieKeyword} placeholder="영화 제목을 검색하세요." onChange={handleKeywordChange}/>
      <button onClick={handleSearch}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <ul>
          {movie.map((m) => 
            <li key={m.id}>
              <h3>{m.title} ({m.release_date})</h3>
              
            </li>
          )}
        </ul>
      )}
    </>
  );
}

export default App;