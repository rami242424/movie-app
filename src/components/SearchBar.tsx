import type React from "react";

export interface Props {
    movieKeyword: string;
    setMovieKeyword: (value: string) => void;
    loading: boolean;
    setLoading: (value:boolean) => void;
    error: string | null;
    setError: (value: string|null) => void;
    movie: string[];
    setMovie: (value: string[]) => void;
}

 
const API_KEY = "";

function SearchBar({movieKeyword, setMovieKeyword,loading,setLoading,error,setError,movie,setMovie}:Props){
    
    const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMovieKeyword(e.target.value);
    }
    const handleSearch = async() => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(``);
            if(!response.ok) throw new Error("검색어를 찾을 수 없습니다.");
        } catch(error){
            if( error instanceof Error){    
                console.log(error.message);
                setError(error.message);
            }
        } finally{
            setLoading(false);
        }


    }
    return(
        <>
            <input value={movieKeyword} onChange={handleKeywordChange}/>
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie && <p>{movie}</p>}
        </>
    );
}

export default SearchBar;