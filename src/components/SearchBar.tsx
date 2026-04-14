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
    handleSearch: () => void;
}

 
//const API_KEY = "";

function SearchBar({movieKeyword, setMovieKeyword,loading,error,movie,handleSearch}:Props){
    
    const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMovieKeyword(e.target.value);
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