import { useState } from "react";

const API_KEY = "ae39336185873212a3317f6c4e235bbf";

function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [movieKeyword, setMovieKeyword] = useState("");
  const [movie, setMovie] = useState([]);

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
      //console.log(json.results[0].title, "json좀봐봐");
      setMovie(json.results);
    } catch(error){
      if( error instanceof Error){
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return(
    <>
      <input value={movieKeyword} placeholder="영화 제목을 검색하세요." onChange={handleKeywordChange}/>
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default App;