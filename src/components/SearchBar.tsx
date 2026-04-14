import type React from "react";

export interface Props {
    movieKeyword: string;
    setMovieKeyword: (value: string) => void;
    loading: boolean;
    error: string | null;
    handleSearch: () => void;
}


function SearchBar({movieKeyword,setMovieKeyword,loading,error,handleSearch}:Props){
    
    const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMovieKeyword(e.target.value);
    }
    
    return(
        <>
            <input value={movieKeyword} onChange={handleKeywordChange}/>
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </>
    );
}

export default SearchBar;