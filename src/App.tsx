import { useState } from "react";

const API_KEY = "ce5321063aa7a0ec5d37d4a0677a3e09";
export interface IMovieProps {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

function App(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovieProps[]>([]);

  const SearchInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  const SearchBtn = async() => {
    if(!keyword.trim()) return;
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
      if(!response.ok) throw new Error("API 연결 실패");
      const json = await response.json();
      setMovies(json.results);
    } catch(error) {
      if(error instanceof Error){
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return(
    <>
      <input
        onKeyDown={(e) => {if(e.key === "Enter") SearchBtn()}}
        onChange={SearchInputChange}
        value={keyword}
        placeholder="영화를 검색해주세요."
      />
      <button
        onClick={SearchBtn}
      >
        Search
      </button>
      {loading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {!loading && !error && keyword && movies.length === 0 ? (
        <div>검색된 결과가 없습니다.</div>
      ):(
        <ul>
          {movies.map((movie) => 
            <li key={movie.id}>
              {movie.poster_path ?
                (<img 
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
              ) : (
                <p>No Image</p>
              )
              }
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
              <p>🌟{movie.vote_average}</p>
            </li>
          )}
        </ul>
      )}

    </>
  );
}

export default App;