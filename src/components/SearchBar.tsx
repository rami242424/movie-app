import type React from "react";

export interface Props {
    movieKeyword: string;
    setMovieKeyword: (value: string) => void;
}

function SearchBar({movieKeyword, setMovieKeyword}:Props){
    const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMovieKeyword(e.target.value);
    }
    const handleSearch = () => {
        
    }
    return(
        <>
            <input value={movieKeyword} onChange={handleKeywordChange}/>
            <button onClick={handleSearch}>Search</button>
        </>
    );
}

export default SearchBar;